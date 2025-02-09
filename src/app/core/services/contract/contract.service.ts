import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contract } from 'app/core/models/contract/contract.types';
import { Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContractService {
    private _apiUrl = 'api/common/contracts'; // 🔥 Ajuste para sua API real

    private _httpClient: HttpClient = inject(HttpClient);
    private _contracts: ReplaySubject<Contract[]> = new ReplaySubject<
        Contract[]
    >(1);

    get contracts$(): Observable<Contract[]> {
        return this._contracts.asObservable();
    }

    getContracts(): Observable<Contract[]> {
        return this._httpClient.get<Contract[]>(this._apiUrl).pipe(
            tap((contracts) => {
                this._contracts.next(contracts);
            })
        );
    }
}
