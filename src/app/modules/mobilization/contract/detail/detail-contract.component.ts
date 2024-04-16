import { CdkAccordionModule } from "@angular/cdk/accordion";
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, JsonPipe } from "@angular/common";
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
import { ContractResource } from "../contract.types";

const DEFAULT_CONTRACT_DATA = {
  "id": 0,
  "code": 'RSM-20240001',
  "cnpj": "00.000.000/0001-00",
  "dateInitialMet": new Date("2024-04-16"),
  "fantasyName": "Prado Sistemas SA",
  "vigence": {
    "startAt": new Date("2024-04-16"),
    "finishAt": new Date("2024-04-16"),
  },
  "scope": "32.240-410",
  "degreeRiskLevel": "HIGH",
  "contractManager": {
    "name": "Vinicius Francisco Prado",
    "email": "email@email.com",
    "phoneNumber": "32956565656"
  },
  "matrixOfResponsability": [
    {
      "name": "Vinicius Francisco Prado",
      "function": "admin",
      "email": "developer.vinicius.prado@gmail.com"
    },
    {
      "name": "Vinicius Francisco Prado",
      "function": "coordenador",
      "email": "developer.vinicius.prado@gmail.com"
    }
  ],
  "contractor": {
    name: "",
  }
}
@Component({
  selector: "app-detail-contract",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TranslocoModule, MatIconModule, FormsModule, ReactiveFormsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatExpansionModule, CdkAccordionModule, MatTableModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, JsonPipe],
  templateUrl: "./detail-contract.component.html",
  styleUrl: "./detail-contract.component.scss",
})
export class DetailContractComponent implements OnInit {
  includeForm: UntypedFormGroup;
  contractResource: ContractResource = DEFAULT_CONTRACT_DATA;
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
    console.log(this.contractResource);
    
    // Horizontal stepper form
    this.includeForm = this._formBuilder.group({
      contractData: this._formBuilder.group({
        code: ['RSM-20240001'],
        cnpj: ["", Validators.required],
        dateInitialMet: ["", Validators.required],
        fantasyName: ["", Validators.required],
        vigence: this._formBuilder.group({
          startAt: ["", Validators.required],
          finishAt: ["", Validators.required],
        }),
        scope: ["", Validators.required],
        degreeRiskLevel: ["", Validators.required],
        contractManager: this._formBuilder.group({
          name: ["", Validators.required],
          email: ["", Validators.required],
          phoneNumber: ["", Validators.required],
        }),
        matrixOfResponsability: this._formBuilder.array([]),
      }),
      contractorData: this._formBuilder.group({})
    });

    this.addResponsible();

    this.includeForm.patchValue({
      contractData: {
        "code": 'RSM-20240001',
        "cnpj": "00.000.000/0001-00",
        "dateInitialMet": new Date("2024-04-16"),
        "fantasyName": "Prado Sistemas SA",
        "vigence": {
          "startAt": new Date("2024-04-16"),
          "finishAt": new Date("2024-04-16"),
        },
        "scope": "32.240-410",
        "degreeRiskLevel": "HIGH",
        "contractManager": {
          "name": "Vinicius Francisco Prado",
          "email": "email@email.com",
          "phoneNumber": "32956565656"
        },
        "matrixOfResponsability": [
          {
            "name": "Vinicius Francisco Prado",
            "function": "admin",
            "email": "developer.vinicius.prado@gmail.com"
          },
          {
            "name": "Vinicius Francisco Prado",
            "function": "coordenador",
            "email": "developer.vinicius.prado@gmail.com"
          }
        ]
      }
    })
  }

  matrix(): FormArray {
    return this.includeForm.get("contractData").get("matrixOfResponsability") as FormArray;
  }

  addResponsible() {
    this.matrix().push(this.newResponsible());
  }

  removeResponsible(rowIndex: number) {
    this.matrix().removeAt(rowIndex);
  }

  newResponsible(): FormGroup {
    return this._formBuilder.group({
      name: [""],
      function: [""],
      email: [""],
    });
  }

  save() {
    console.log(this.includeForm.value);
  }
}
