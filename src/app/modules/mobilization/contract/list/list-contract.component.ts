import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import {
    FormControl,
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslocoModule } from "@ngneat/transloco";
import { FormatDateVigenceDirective } from "app/core/directives/format-date-vigence.directive";
import { RoleAccessDirective } from "app/core/directives/role-access.directive";
import { Contract } from "app/core/models/contract/contract.types";
import { ContractService } from "app/core/services/contract/contract.service";
import {
    debounceTime,
    Observable
} from "rxjs";
import { ContractResource } from "../contract.types";
import { MatMenu, MatMenuItem, MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";


@Component({
  selector: "app-list-contract",
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
      TranslocoModule,
      RoleAccessDirective,
      FormatDateVigenceDirective,
      MatMenuModule,
      MatTooltipModule,

  ],
  templateUrl: "./list-contract.component.html",
  styleUrl: "./list-contract.component.scss",
})
export class ListContractComponent {
    displayedColumns: string[] = ['codigo-contrato', 'empresa-contratante', 'vigencia', 'acoes'];
    dataSource = new MatTableDataSource<Contract>([]);
    searchInputControl = new FormControl();

    @ViewChild(MatPaginator) paginator!: MatPaginator;



  isLoading: boolean = false;
  contracts$: Observable<ContractResource[]>;

  constructor(
    private _router: Router,
      private _activatedRoute: ActivatedRoute,
    private _contractService: ContractService
  ) {}

  ngOnInit(): void {
      this._contractService.getContracts().subscribe((contracts) => {
          this.dataSource.data = contracts;
          this.dataSource.paginator = this.paginator;
      });

      this.dataSource.filterPredicate = (data: Contract, filter: string) => {
          filter = filter.trim().toLowerCase();
            return data.code.toLowerCase().includes(filter) ||
              data.contractManager.company.toLowerCase().includes(filter)
      };

      this.searchInputControl.valueChanges
          .pipe(debounceTime(300))
          .subscribe((value) => this.dataSource.filter = value.trim().toLowerCase());
  }

  createContract() {
    this._router.navigate(["incluir"], { relativeTo: this._activatedRoute });
  }
}
