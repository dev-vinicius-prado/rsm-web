import { MatChipsModule } from '@angular/material/chips';
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, JsonPipe } from "@angular/common";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { StepContractDataComponent } from '../step-contract-data/step-contract-data.component';

const DEFAULT_CONTRACT_DATA = {
  id: 0,
  code: "RSM-20240001",
  cnpj: "00.000.000/0001-00",
  dateInitialMet: new Date("2024-04-16"),
  fantasyName: "Prado Sistemas SA",
  vigence: {
    startAt: new Date("2024-04-16"),
    finishAt: new Date("2024-04-16"),
  },
  scope: "32.240-410",
  degreeRiskLevel: "HIGH",
  contractManager: {
    name: "Vinicius Francisco Prado",
    email: "email@email.com",
    phoneNumber: "32956565656",
  },
  matrixOfResponsability: [
    {
      name: "Vinicius Francisco Prado",
      function: "admin",
      email: "developer.vinicius.prado@gmail.com",
    },
    {
      name: "Vinicius Francisco Prado",
      function: "coordenador",
      email: "developer.vinicius.prado@gmail.com",
    },
  ],
  contractor: {
    name: "",
  },
};
/* eslint-disable */
export const items = {
  files: [],
};
@Component({
  selector: "app-detail-contract",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TranslocoModule, MatIconModule, FormsModule, MatChipsModule, ReactiveFormsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatExpansionModule, CdkAccordionModule, MatTableModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, JsonPipe, StepContractDataComponent],
  templateUrl: "./detail-contract.component.html",
  styleUrl: "./detail-contract.component.scss",
})
export class DetailContractComponent implements OnInit {

  isLinear = true;
  includeForm: FormGroup;
  contractForm: FormGroup;
  contractResource: ContractResource = DEFAULT_CONTRACT_DATA;
  items: any = items;
  addOnBlur: boolean = true;
  readonly separatorKeysCode = ['ENTER', 'COMMA'] as const;
  nrsList: string[] = [];



  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.contractForm = this._formBuilder.group({});
    this.includeForm = this._formBuilder.group({
      // contractData: this._formBuilder.group({
      //   code: ["RSM-20240001"],
      //   dateInitialMet: ["", Validators.required],
      //   vigence: this._formBuilder.group({
      //     startAt: ["", Validators.required],
      //     finishAt: ["", Validators.required],
      //   }),
      //   scope: ["", Validators.required],
      //   degreeRiskLevel: ["", Validators.required],
      //   contractManager: this._formBuilder.group({
      //     name: ["", Validators.required],
      //     email: ["", Validators.required],
      //     phoneNumber: ["", Validators.required],
      //   }),
      //   matrixOfResponsability: this._formBuilder.array([]),
      // }),
      // contractorData: this._formBuilder.group({
      //   cnpj: ["", Validators.required],
      //   fantasyName: ["", Validators.required],
      //   companyName: ["", Validators.required],
      //   phoneNumber: ["", Validators.required],
      //   email: ["", Validators.required],
      //   address: this._formBuilder.group({
      //     street: ["", Validators.required],
      //     number: ["", Validators.required],
      //     neighborhood: ["", Validators.required],
      //     city: ["", Validators.required],
      //     state: ["", Validators.required],
      //     postalCode: ["", Validators.required],
      //   }),
      // }),
      // resourcesData: this._formBuilder.group({
      //   contractorManager: this._formBuilder.group({
      //     name: ["", Validators.required],
      //     email: ["", Validators.required],
      //     phoneNumber: ["", Validators.required],
      //   }),
      //   type: ["", Validators.required],
      //   function: ["", Validators.required],
      //   quantity: ["", Validators.required],
      //   files: this._formBuilder.array([]),
      // }),
    });

    // this.includeForm.patchValue({
    //   contractData: {
    //     code: "RSM-20240001",
    //     dateInitialMet: new Date("2024-04-16"),
    //     vigence: {
    //       startAt: new Date("2024-04-16"),
    //       finishAt: new Date("2024-04-16"),
    //     },
    //     scope: "Mineiração",
    //     degreeRiskLevel: "HIGH",
    //     contractManager: {
    //       name: "Vinicius Francisco Prado",
    //       email: "email@email.com",
    //       phoneNumber: "32956565656",
    //     },
    //     matrixOfResponsability: [
    //       {
    //         name: "Vinicius Francisco Prado",
    //         function: "admin",
    //         email: "developer.vinicius.prado@gmail.com",
    //       },
    //       {
    //         name: "Vinicius Francisco Prado",
    //         function: "coordenador",
    //         email: "developer.vinicius.prado@gmail.com",
    //       },
    //     ],
    //   },
    //   contractorData: {
    //     cnpj: "00.000.000/0001-00",
    //     fantasyName: "Prado Sistemas SA",
    //     companyName: "Prado Sistemas SA",
    //     email: "prado.sistemas@gmail.com",
    //     phoneNumber: "31980104522",
    //     address: {
    //       street: "Rua dos Franciscanos",
    //       number: "214",
    //       neighborhood: "Bandeirantes",
    //       city: "Contagem",
    //       state: "MG",
    //       postalCode: "32.240-410",
    //     },
    //     contractorManager: {
    //       name: "Vinicius Francisco Prado",
    //       email: "4lternativo@gmail.com",
    //       phoneNumber: "31980104522",
    //     }
    //   },
    //   resources: {}
    // });

    // this.addFile();

  }


  // files(): FormArray {
  //   return this.includeForm.get("resourcesData").get("files") as FormArray;
  // }

  // addFile(){
  //   this.files().push(this.newFile());
  // }

  // removeFile(rowIndex: number) {
  //   this.files().removeAt(rowIndex);
  // }
  
  // newFile(): FormGroup {
  //   if (this.files().length === 0) {
    
  //     return this._formBuilder.group({
  //       fileName: ["Certidão negativa da JUCEMG", Validators.required],
  //       mandatory: [true, Validators.required],
  //     })
  //   } else {
  //     return this._formBuilder.group({
  //       fileName: ["", Validators.required],
  //       mandatory: ["", Validators.required],
  //     })

  //   }
  // }



  // addNR(event: MatChipInputEvent): void {
  //   const value: string = (event.value || '').trim();
  //   if (value) {
  //     this.nrsList.push(value);
  //   }
  //   event.chipInput!.clear();
  // }
  // editNR(nr: string, event: MatChipInputEvent): void {
  //   const value: string = event.value.trim();
  //   if (value) {
  //     this.removeNR(nr);
  //   }
  //   const index = this.nrsList.indexOf(nr);
  //   if (index >= 0) {
  //     this.nrsList[index] = value;
  //   }
  // }

  // removeNR(nr: string) {
  //   const index = this.nrsList.indexOf(nr);
  //   if (index >= 0) {
  //     this.nrsList.splice(index, 1);
  //   }
  // }

  save() {
    console.log(this.includeForm.value);
  }
}
