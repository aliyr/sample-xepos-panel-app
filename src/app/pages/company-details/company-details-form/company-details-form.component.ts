import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-company-details-form",
  templateUrl: "./company-details-form.component.html",
  styleUrls: ["./company-details-form.component.scss"]
})
export class CompanyDetailsFormComponent implements OnInit {
  sells: string[];
  latitude: number;
  longitude: number;
  companyEditForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.sells= ["a", "aa", "aaa"];
    this.latitude = 51.743004;
    this.longitude = -0.640457;
    this.companyEditForm = this.fb.group({
      name: ["", [Validators.required]],
      addressLine1: ["", [Validators.required]],
      addressLine2: ["", [Validators.required]],
      city: ["", [Validators.required]],
      country: ["", [Validators.required]],
      postCode: ["", [Validators.required]],
      telephone: ["", [Validators.required, Validators.pattern("[0-9]+")]],
      website: ["", [Validators.required]],
      emailSettingIsActive: [],
      smtpServer: [""],
      portNumber: [""],
      companyLat: [this.latitude],
      companyLng: [this.longitude],
      password: [""]
    });
  }

  markerDragEnd($event: any) {
    this.companyEditForm.get("companyLat").patchValue($event.coords.lat);
    this.companyEditForm.get("companyLng").patchValue($event.coords.lng);
  }

  cancelCompanyEditForm() {
    this.router.navigate(["/company-details/list"]);
  }
  saveCompanyEditForm() {
    const confirmedData = {
      name: this.companyEditForm.get("name").value,
      addressLine1: this.companyEditForm.get("addressLine1").value,
      addressLine2: this.companyEditForm.get("addressLine2").value,
      city: this.companyEditForm.get("city").value,
      country: this.companyEditForm.get("country").value,
      postCode: this.companyEditForm.get("postCode").value,
      telephone: this.companyEditForm.get("telephone").value,
      website: this.companyEditForm.get("website").value,
      companyLat: this.companyEditForm.get("companyLat").value,
      companyLng: this.companyEditForm.get("companyLng").value
    };

    console.log(confirmedData);
  }
}
