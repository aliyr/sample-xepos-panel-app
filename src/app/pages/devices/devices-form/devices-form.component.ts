import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-devices-form",
  templateUrl: "./devices-form.component.html",
  styleUrls: ["./devices-form.component.scss"]
})
export class DevicesFormComponent implements OnInit {
  devicesEditForm: FormGroup;
  locations: string[];
  businessHints: string[];
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.locations = ["location1", "location2", "location3", "location4"];
    this.businessHints = [
      "register1",
      "register2",
      "register3",
      "register4",
      "register5"
    ];
    this.devicesEditForm = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      business: ["", [Validators.required]],
      password: ["", [Validators.required]],
      location: ["", [Validators.required]]
    });
  }
  cancelEditDeviceForm() {
    this.router.navigate(["/panel/devices"]);
  }

  saveDevicesEditForm() {
    const confirmedData = {
      name: this.devicesEditForm.get("name").value,
      description: this.devicesEditForm.get("description").value,
      business: this.devicesEditForm.get("business").value,
      password: this.devicesEditForm.get("password").value,
      location: this.devicesEditForm.get("location").value
    };
    console.log(confirmedData);
  }
}
