import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { Contract } from 'app/core/models/contract/contract.types';
import { contracts as contractsData } from 'app/mock-api/common/contract/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class ContractMockApi {
    private _contracts: Contract[] = contractsData.map(contract => ({
        ...contract,
        dateInitialMet: new Date(contract.dateInitialMet)
    }));

    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }

    registerHandlers(): void {
        this._fuseMockApiService
            .onGet('api/common/contracts')
            .reply(() => [200, cloneDeep(this._contracts)]);
    }
}
