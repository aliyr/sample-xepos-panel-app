import { Component, OnInit } from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: "app-user-management-form",
  templateUrl: "./user-management-form.component.html",
  styleUrls: ["./user-management-form.component.scss"]
})
export class UserManagementFormComponent implements OnInit {
  locations: string[] = ["address1", "address"];

  profileForm = this.fb.group({
    firstName: ['',[
      Validators.required
    ]],
    surname: ['',[
      Validators.required
    ]],
    email: ['',[
      Validators.required,
      Validators.email
    ]],
    type: ['',[
      Validators.required
    ]],
    locations: ['',
      [
      Validators.required
    ]],
    RFIDToken: [''],
    timeAttendance:[''],
    wage:[''],
    username:['',[
      Validators.required
    ]],
    backOfficePassword:['',[
      Validators.required
    ]],
    fourDigitPassword:['',[
      Validators.required,
      Validators.maxLength(4)
    ]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  remove(locations: string): void {

  }

  validateUserLocations(userLocations, insertedLocation): boolean {
    // check if the location is valid or not
    const isLocationValid = this.locations.find(p => p === insertedLocation) !== undefined;
    let isLocationNonRepetitive = true;
    if (userLocations) {
      isLocationNonRepetitive = userLocations.find(p => p === insertedLocation) === undefined;
    }
    return isLocationValid && isLocationNonRepetitive;
  }

  addToLocations(location) {
    const usersLocations = this.profileForm.get('locations').value as FormArray;
    debugger;
    const LocationInterAllowed = this.validateUserLocations(usersLocations, location);

    if (LocationInterAllowed) {
      if (usersLocations.length === 0) {
        // if locations array doesn't existed
        this.profileForm.get('locations').patchValue([location]);
      } else {
        usersLocations.push(location);
        this.profileForm.get('locations').patchValue(usersLocations);
      }
    }
  }

  returnToList() {
  }
  save() {

  }
}
