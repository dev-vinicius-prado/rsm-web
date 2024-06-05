import { Component, Input, OnInit } from "@angular/core";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, JsonPipe } from "@angular/common";
import { TranslocoModule } from "@ngneat/transloco";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
@Component({
  selector: "step-contract-data",
  standalone: true,
  templateUrl: "./step-contract-data.component.html",
  styleUrls: ["./step-contract-data.component.css"],
  imports: [TranslocoModule, CdkAccordionModule, MatButtonModule, MatIconModule, MatExpansionModule, NgFor, MatStepperModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatRadioModule, FormsModule, ReactiveFormsModule],
})
export class StepContractDataComponent implements OnInit {
  contractForm: FormGroup;
  contractDataForm: FormGroup;

  constructor(private _ctrlContainer: FormGroupDirective, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contractDataForm = this._formBuilder.group({
      code: ["RSM-20240001"],
      dateInitialMet: ["", Validators.required],
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
    });
    this.contractForm = this._ctrlContainer.form;
    this.contractForm.addControl("contractData", this.contractDataForm);
    this.addResponsible();
  }

  matrix(): FormArray {
    return this.contractDataForm.get("matrixOfResponsability") as FormArray;
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
}
