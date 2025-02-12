import { CdkAccordionModule } from '@angular/cdk/accordion';
import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormGroup,
    FormGroupDirective,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
@Component({
    selector: 'step-contract-data',
    standalone: true,
    templateUrl: './step-basic-data-contract.component.html',
    styleUrls: ['./step-basic-data-contract.component.css'],
    imports: [
        JsonPipe,
        TranslocoModule,
        CdkAccordionModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatStepperModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [provideNgxMask({})],
})
export class StepContractDataComponent implements OnInit {
    contractForm: FormGroup;
    basicDataContractForm: FormGroup;

    constructor(
        private _ctrlContainer: FormGroupDirective,
        private _formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.basicDataContractForm = this._formBuilder.group({
            id: [],
            code: [{ value: '', disabled: true }],
            dateInitialMet: ['', Validators.required],
            scope: ['', Validators.required],
            degreeRiskLevel: ['', Validators.required],

            vigence: this._formBuilder.group({
                startAt: ['', Validators.required],
                finishAt: [''],
            }),
            /**
             * Dados da Emp. Contratante.
             *
             * Carregados automaticamente.
             */
            contractor: this._formBuilder.group({
                cnpj: [{ value: '', disabled: true }],
                company: [{ value: '', disabled: true }],
            }),
            /**
             * Pessoa da Emp. Contratante responsável pelo contrato.
             */
            contractManager: this._formBuilder.group({
                participant: this.createParticipant(),
            }),
            matrixOfResponsability: this._formBuilder.array([]),
        });

        this.contractForm = this._ctrlContainer.form;
        this.contractForm.addControl(
            'basic-data-contract',
            this.basicDataContractForm
        );
        this.addResponsible();

        this.contractForm.patchValue({
            contractData: {
                code: 'RSM-20240001',
                dateInitialMet: '12/04/2012',
                vigence: {
                    startAt: '01/05/2012',
                    finishAt: '31/12/2025',
                },
                scope: 'Mineiração',
                degreeRiskLevel: 'HIGH',
                contractManager: {
                    name: 'Vinicius Francisco Prado',
                    email: 'email@email.com',
                    phoneNumber: '32956565656',
                },
                matrixOfResponsability: [
                    {
                        name: 'Vinicius Francisco Prado',
                        function: 'admin',
                        email: 'developer.vinicius.prado@gmail.com',
                    },
                ],
            },
        });
    }

    private createParticipant(): FormGroup {
        return this._formBuilder.group({
            name: ['', Validators.required],
            function: ['', Validators.required],
            contact: this._formBuilder.group({
                email: ['', Validators.required],
                phoneNumber: ['', Validators.required],
            }),
        });
    }

    addResponsible(): void {
        this.matrixOfResponsability.push(this.createParticipant());
    }

    get matrixOfResponsability(): FormArray {
        return this.basicDataContractForm
            .get('matrixOfResponsability') as FormArray;
    }

    removeResponsible(rowIndex: number) {
        this.matrixOfResponsability.removeAt(rowIndex);
    }
}
