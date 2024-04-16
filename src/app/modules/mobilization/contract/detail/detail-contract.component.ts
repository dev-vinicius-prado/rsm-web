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
  contractResource: ContractResource;
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

    this.addResponsible();
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
