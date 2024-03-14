import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from "@angular/forms";
import {
  Subject,
  debounceTime,
  map,
  switchMap,
  takeUntil,
  Observable,
} from "rxjs";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { Contact } from "app/layout/common/quick-chat/quick-chat.types";
import { ContractResource } from "../contract.types";
import { TranslocoModule } from "@ngneat/transloco";

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
    RouterOutlet,
    MatTableModule,
    MatPaginatorModule,
    TranslocoModule
  ],
  templateUrl: "./list-contract.component.html",
  styleUrl: "./list-contract.component.scss",
})
export class ListComponent {
  isLoading: boolean = false;
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  contracts$: Observable<ContractResource[]>;
  displayedColumns: string[] = ['codigo-contrato', 'empresa-contratante', 'vigencia'];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    console.log("initialzing contract list component!!");
  }
}
