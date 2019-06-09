import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { validateConfig } from "@angular/router/src/config";

@Component({
  selector: "app-location-form",
  templateUrl: "./location-form.component.html",
  styleUrls: ["./location-form.component.scss"]
})
export class LocationFormComponent implements OnInit {
  data: string[] = [
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Mali",
    "Maldives",
    "Malta",
    "Marshall Islands",
    " Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Federated States of Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique"
  ];

  locationsForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.locationsForm = this.fb.group({
      locationName: ["", Validators.required],
      cityName: ["", Validators.required],
      streeName: ["", Validators.required],
      zipCode: ["", Validators.required],
      Country: ["", Validators.required]
    });
  }

  ngOnInit() {}

  cancelForm() {
    this.router.navigate(["/panel/locations"]);
  }

  updateLocation() {
    const savedData = {
      locationName: this.locationsForm.get("locationName").value,
      cityName: this.locationsForm.get("cityName").value,
      streeName: this.locationsForm.get("streeName").value,
      zipCode: this.locationsForm.get("zipCode").value,
      Country: this.locationsForm.get("Country").value
    };
    console.log(savedData);
  }
}
