import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: "app-company-details-wizard",
  templateUrl: "./company-details-wizard.component.html",
  styleUrls: ["./company-details-wizard.component.scss"],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CompanyDetailsWizardComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {}
  companyWizardForm: FormGroup;

  ngOnInit() {
    this.companyWizardForm = this.fb.group({
      generalInfo: this.fb.group({
        businessName: ["", Validators.required],
        address1: [""],
        address2: [""],
        town: [""],
        country: [""],
        postcode: ["", Validators.required],
        privateAddress: [""],
        phoneNumber: [""],
        email: [""],
        CRMOrderNumber: [""],
      }),
      locations: this.fb.array([])
    });

    this.addLocationToLocationsFormArray();
  }

  createLocationFormGroup(): FormGroup {
    return this.fb.group({
      name: ["", Validators.required],
      address1: [""],
      address2: [""],
      town: [""],
      country: [""],
      currency: ["", Validators.required],
      postcode: ["", Validators.required]
    });
  }

  get locationsFormArray() {
    return(this.companyWizardForm.get('locations') as FormArray);
  }

  get generalInfoFormGroup() {
    return (this.companyWizardForm.get('generalInfo') as FormGroup);
  }

  addLocationToLocationsFormArray() {
    this.locationsFormArray.push(this.createLocationFormGroup());
  }

  removeLocationFromLocationsFormArray(index) {
    this.locationsFormArray.removeAt(index);
  }

  cancelCompanyWizardForm() {
    this.router.navigate(["/company-details/list"]);
  }
}
