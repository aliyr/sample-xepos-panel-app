import { Component, OnInit } from "@angular/core";
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: "app-company-details-form",
  templateUrl: "./company-details-form.component.html",
  styleUrls: ["./company-details-form.component.scss"]
})
export class CompanyDetailsFormComponent implements OnInit {
  sells = ["a", "aa", "aaa"];
  latitude = 51.743004;
  longitude = -0.640457;

  companyEditForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.companyEditForm = this.fb.group({
      name: ["", [Validators.required]],
      addressLine1: ["", [Validators.required]],
      addressLine2: ["", [Validators.required]],
      city: ["", [Validators.required]],
      country: ["", [Validators.required]],
      postCode: ["", [Validators.required]],
      telephone: ["", [Validators.required,  Validators.pattern("[0-9]+")]],
      website: ["", [Validators.required]],
      emailSettingIsActive: [],
      smtpServer: [""],
      portNumber: [""],
      companyLat: [""],
      companyLng: [""],
      password: [""],
    });

    // should edit
    this.companyEditForm.get('companyLat').patchValue(this.latitude);
    this.companyEditForm.get('companyLng').patchValue(this.longitude);
  }

  markerDragEnd($event) {
    this.companyEditForm.get('companyLat').patchValue($event.coords.lat);
    this.companyEditForm.get('companyLng').patchValue($event.coords.lng);
  }

  cancelCompanyEditForm() {
    this.router.navigate(["/company-details/list"]);
  }
  saveCompanyEditForm() {
    const confirmedData = [
      { name: this.companyEditForm.get("name").value },
      { addressLine1: this.companyEditForm.get("addressLine1").value },
      { addressLine2: this.companyEditForm.get("addressLine2").value },
      { city: this.companyEditForm.get("city").value },
      { country: this.companyEditForm.get("country").value },
      { postCode: this.companyEditForm.get("postCode").value },
      { telephone: this.companyEditForm.get("telephone").value },
      { website: this.companyEditForm.get("website").value },
      { companyLat: this.companyEditForm.get("companyLat").value },
      { companyLng: this.companyEditForm.get("companyLng").value }
    ];
    console.log(confirmedData);
  }
}
