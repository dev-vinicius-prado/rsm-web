import { CdkAccordionModule } from "@angular/cdk/accordion";
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormArray, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { TranslocoModule } from "@ngneat/transloco";
import { ContractResource, MatrixOfResponsabilityResource } from "../contract.types";

const DATA = {
  id: 0,
  code: "",
  cnpj: "",
  dateInitialMet: null,
  fantasyName: "Pico Empreendimentos",
  vigence: {
    startAt: null,
    finishAt: null,
  },
  scope: "",
  degreeRiskLevel: null,
  contractManager: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  matrixOfResponsability: [
    {
      name: "Nimasi",
      function: "Administrador",
      email: "email@email.com",
    },
    {
      name: "Togata",
      function: "Coordenador",
      email: "email@email.com",
    },
  ],
  contractor: {
    name: "",
  },
};

const COLUMNS_SCHEMA = [
  {
    key: "name",
    type: "text",
    label: "Nome",
  },
  {
    key: "function",
    type: "text",
    label: "Função",
  },
  {
    key: "email",
    type: "text",
    label: "E-mail",
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: "",
  },
];

@Component({
  selector: "app-detail-contract",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TranslocoModule, MatIconModule, FormsModule, ReactiveFormsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatExpansionModule, CdkAccordionModule, MatTableModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: "./detail-contract.component.html",
  styleUrl: "./detail-contract.component.scss",
})
export class DetailContractComponent implements OnInit {
  isEditing: boolean = false;
  includeForm: UntypedFormGroup;
  contractResource: ContractResource = DATA;
  dataSource: any[] = this.contractResource.matrixOfResponsability;
  displayedColsResponsibles = COLUMNS_SCHEMA.map((col) => col.key);
  /**
   * Constructor
   */
  constructor(private _formBuilder: UntypedFormBuilder) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Horizontal stepper form
    this.includeForm = this._formBuilder.group({
      contractData: this._formBuilder.group({
        cnpj: ["", Validators.required],
        dateInitialMet: ["", Validators.required],
        fantasyName: ["", Validators.required],
        startVigence: ["", Validators.required],
        endingVigence: ["", Validators.required],
        scope: ["", Validators.required],
        degreeRiskLevel: ["", Validators.required],
        contractManager: this._formBuilder.group({
          name: ["", Validators.required],
          email: ["", Validators.required],
          phoneNumber: ["", Validators.required],
        }),
        matrixOfResponsability: this._formBuilder.array([]),
      }),
    });
  }

  matrix(): FormArray {
    return this.includeForm.get("contractData").get("matrixOfResponsability") as FormArray;
  }

  newResponsible(): FormGroup {
    return this._formBuilder.group({
      name: [{value: "", disabled: true},],
      function: [""],
      email: [""],
    });
  }

  addResponsible() {
    this.matrix().push(this.newResponsible());
  }

  removeResponsible(rowIndex: number) {
    this.matrix().removeAt(rowIndex);
  }

  isEdit() {
    this.isEditing = !this.isEditing;
  }

  save() {
    console.log(this.includeForm);
  }
}
