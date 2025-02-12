import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { User } from 'app/core/user/user.types';
import { cloneDeep } from 'lodash-es';
import { contracts as contractsData } from './data';
import { Contract } from 'app/core/models/contract/contract.types';

@Injectable({ providedIn: 'root' })
export class ContractMockApi {
    private _contracts: Contract[] = contractsData.map((contract) => ({
        ...contract,
        dateInitialMet: new Date(contract.dateInitialMet),
        vigence: {
            ...contract.vigence,
            startAt: new Date(contract.vigence.startAt),
            finishAt: new Date(contract.vigence.finishAt),
        },
    }));

    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }

    registerHandlers(): void {
        this._fuseMockApiService.onGet('api/common/contracts').reply(() => {
            const loggedUser = JSON.parse(localStorage.getItem('user')) as User;
            if (loggedUser.role === 'ADMIN') {
                return [200, cloneDeep(this._contracts)];
            }
            const filtredContracts = this._contracts.filter(
                (contract) => contract.contracted.id === loggedUser.companyId
            );
            return [200, cloneDeep(filtredContracts)];
        });

        this._fuseMockApiService
            .onGet('api/common/contracts/:id')
            .reply(({ request }) => {
                const id = Number(request.urlWithParams.split('/').pop());
                const contract = this._contracts.find((c) => c.id === id);
                return contract
                    ? [200, contract]
                    : [404, { message: 'Contrato não encontrado!' }];
            });
    }
}
