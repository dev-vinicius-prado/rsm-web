import { CdkAccordionModule } from "@angular/cdk/accordion";
import { NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { TranslocoModule } from "@ngneat/transloco";

@Component({
  selector: "step-resource-data",
  standalone: true,
  imports: [TranslocoModule, CdkAccordionModule, MatButtonModule, MatIconModule, MatExpansionModule, NgFor, MatStepperModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatRadioModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./step-resource-data.component.html",
  styleUrl: "./step-resource-data.component.scss",
})
export class StepResourceDataComponent implements OnInit {
  contractForm: FormGroup;
  resourceDataForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _ctrlContainer: FormGroupDirective) {}

  ngOnInit(): void {
    this.resourceDataForm = this._formBuilder.group({
      contractorManager: this._formBuilder.group({
        name: ["", null],
        email: ["", null],
        phoneNumber: ["", null],
      }),
      type: ["", null],
      function: ["", null],
      quantity: ["", null],
      files: this._formBuilder.array([]),
    });

    this.contractForm = this._ctrlContainer.form;
    this.contractForm.addControl("resourceData", this.resourceDataForm);
  }

  filesArray(): FormArray {
    return this.resourceDataForm.get("files") as FormArray;
  }

  addFile(){
    this.filesArray().push(this.newFile());
  }

  removeFile(rowIndex: number) {
    this.filesArray().removeAt(rowIndex);
  }
  
  newFile(): FormGroup {
    if (this.filesArray().length === 0) {
    
      return this._formBuilder.group({
        fileName: ["Certidão negativa da JUCEMG", null],
        mandatory: [true, null],
      })
    } else {
      return this._formBuilder.group({
        fileName: ["", null],
        mandatory: ["", null],
      })

    }
  }
}
