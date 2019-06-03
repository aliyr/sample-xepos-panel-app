import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { MatDialog } from "@angular/material";
import { DaysPickerComponent } from "app/components/dialogs/days-picker/days-picker.component";

@Component({
  selector: "app-company-details-wizard",
  templateUrl: "./company-management-wizard.component.html",
  styleUrls: ["./company-management-wizard.component.scss"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class CompanyManagementWizardComponent implements OnInit {
  latitude = 51.743004;
  longitude = -0.640457;
  currencyList: string[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}
  companyWizardForm: FormGroup;

  ngOnInit() {
    this.currencyList = [
      "Dollar",
      "Euro",
      "Gambia Dalasi",
      "Naira",
      "Pound Sterling"
    ];
    this.companyWizardForm = this.fb.group({
      generalInfo: this.fb.group({
        businessName: ["", Validators.required],
        address1: ["", Validators.required],
        address2: [""],
        town: [""],
        country: [""],
        postcode: ["", Validators.required],
        registersName: [""],
        workHours: [""],
        website: [""],
        staffsNO: [""],
        deviceNo: ["", Validators.required],
        privateAddress: [""],
        phoneNumber: ["", Validators.required],
        email: [""],
        CRMOrderNumber: [""],
        companyLat: [this.latitude],
        companyLng: [this.longitude]
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
      postcode: ["", Validators.required],
      companyLng: [this.longitude],
      companyLat: [this.latitude]
    });
  }

  get locationsFormArray() {
    return this.companyWizardForm.get("locations") as FormArray;
  }

  get generalInfoFormGroup() {
    return this.companyWizardForm.get("generalInfo") as FormGroup;
  }

  addLocationToLocationsFormArray() {
    this.locationsFormArray.push(this.createLocationFormGroup());
  }

  removeLocationFromLocationsFormArray(index) {
    this.locationsFormArray.removeAt(index);
  }

  cancelCompanyWizardForm() {
    this.router.navigate(["/panel/company-management/details"]);
  }

  markerDragEnd($event) {
    this.generalInfoFormGroup.get("companyLat").patchValue($event.coords.lat);
    this.generalInfoFormGroup.get("companyLng").patchValue($event.coords.lng);
  }
  LocationArrayMarkerDragEnd($event, i: number) {
    this.locationsFormArray.controls[i]
      .get("companyLat")
      .patchValue($event.coords.lat);
    this.locationsFormArray.controls[i]
      .get("companyLng")
      .patchValue($event.coords.lng);
  }
  saveCompanyWizardForm() {
    const confirmedData = {
      businessName: this.generalInfoFormGroup.get("businessName").value,
      address1: this.generalInfoFormGroup.get("address1").value,
      address2: this.generalInfoFormGroup.get("address2").value,
      town: this.generalInfoFormGroup.get("town").value,
      country: this.generalInfoFormGroup.get("country").value,
      postcode: this.generalInfoFormGroup.get("postcode").value,
      privateAddress: this.generalInfoFormGroup.get("privateAddress").value,
      phoneNumber: this.generalInfoFormGroup.get("phoneNumber").value,
      email: this.generalInfoFormGroup.get("email").value,
      CRMOrderNumber: this.generalInfoFormGroup.get("CRMOrderNumber").value,
      companyLng: this.generalInfoFormGroup.get("companyLng").value,
      companyLat: this.generalInfoFormGroup.get("companyLat").value,
      locations: this.locationsFormArray.controls.map(item => {
        return {
          name: item.get("name").value,
          address1: item.get("address1").value,
          address2: item.get("address2").value,
          town: item.get("town").value,
          country: item.get("country").value,
          currency: item.get("currency").value,
          postcode: item.get("postcode").value,
          companyLng: item.get("companyLng").value,
          companyLat: item.get("companyLat").value
        };
      })
    };
    console.log(confirmedData);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DaysPickerComponent, {
      data: {
        controller: this.generalInfoFormGroup.get("workHours")
      }
    });
  }
}
