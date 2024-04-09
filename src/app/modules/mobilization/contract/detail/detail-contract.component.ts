import { TranslocoModule } from "@ngneat/transloco";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { MatTableModule } from "@angular/material/table";
import { ContractResource } from '../contract.types';

const DATA = [
  {
    nome: "Nimasi",
    funcao: "Administrador",
    email: "email@email.com",
  },
  {
    nome: "Togata",
    funcao: "Coordenador",
    email: "email@email.com",
  },
];

const COLUMNS_SCHEMA = [
  {
    key: "nome",
    type: "text",
    label: "Nome",
  },
  {
    key: "funcao",
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
  includeNewContractForm: FormGroup;
  contractResource: ContractResource;
  
  
  dataSource: any = DATA;
  displayedColsResponsibles: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;

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
    // Horizontal stepper form
    this.includeNewContractForm = this._formBuilder.group({
      contractData: this._formBuilder.group({
        cnpj: ["", Validators.required],
        dateInitialMet: ["", Validators.required],
        fantasyName: ["", Validators.required],
        startVigence: ["", Validators.required],
        endingVigence: ["", Validators.required],
        scope: ["", Validators.required],
        degreeRiskLevel: ["", Validators.required],
        contractManager: this._formBuilder.group({
          managerName: ['', Validators.required],
          email: ["", Validators.required],
          phoneNumber: ["", Validators.required],
        }),
        matrixOfResponsability: this._formBuilder.group({
          name: ["", Validators.required],
          function: ["", Validators.required],
          email: ["", Validators.required]
        })
      }),
      contractorData: this._formBuilder.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        userName: ["", Validators.required],
        about: [""],
      }),
      resourcesData: this._formBuilder.group({
        byEmail: this._formBuilder.group({
          companyNews: [true],
          featuredProducts: [false],
          messages: [true],
        }),
        pushNotifications: ["everything", Validators.required],
      }),
    });
  }
}
