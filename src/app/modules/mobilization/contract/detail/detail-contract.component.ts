import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ContractService } from 'app/core/services/contract/contract.service';
import { StepContractDataComponent } from '../step-basic-data-contract/step-basic-data-contract.component';
import { StepContractorDataComponent } from '../step-contractor-data/step-contractor-data.component';
import { StepResourceDataComponent } from '../step-resource-data/step-resource-data.component';

/* eslint-disable */
export const items = {
    files: [],
};
@Component({
    selector: 'app-detail-contract',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [
        TranslocoModule,
        MatIconModule,
        FormsModule,
        MatChipsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatExpansionModule,
        CdkAccordionModule,
        MatTableModule,
        StepContractDataComponent,
        StepContractorDataComponent,
        StepResourceDataComponent,
    ],
    templateUrl: './detail-contract.component.html',
    styleUrl: './detail-contract.component.scss',
})
export class DetailContractComponent implements OnInit {
    editMode: boolean = false;
    isLinear: boolean = true;
    addOnBlur: boolean = true;
    includeForm: FormGroup;
    basicDataContractForm: FormGroup;
    contractorForm: FormGroup;
    resourceForm: FormGroup;
    readonly separatorKeysCode = ['ENTER', 'COMMA'] as const;
    nrsList: string[] = [];

    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _contractService: ContractService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.editMode = !!this._route.snapshot.paramMap.get('id');

        this.basicDataContractForm = this._formBuilder.group({});
        this.resourceForm = this._formBuilder.group({});
        this.contractorForm = this._formBuilder.group({});
        this.includeForm = this._formBuilder.group({
            contractorData: this.basicDataContractForm,
            resourceData: this.resourceForm,
            contractData: this.contractorForm,
        });

        if (this.editMode) {
            this.loadContract();
        }
    }
    private loadContract() {
        const id = Number(this._route.snapshot.paramMap.get('id'))
        this._contractService.getContractById(id)
            .subscribe(contract => this.includeForm.patchValue(contract))
    }

    save() {
        console.log('Includ Form: ', this.includeForm.value);
    }

    backToList() {
        this._router.navigate(['mobilizacao/contratos']);
    }
}
