import { Component, OnInit } from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.hasError('passwordsDoNotMatch');
  }
}

@Component({
  selector: "app-user-management-form",
  templateUrl: "./user-management-form.component.html",
  styleUrls: ["./user-management-form.component.scss"]
})
export class UserManagementFormComponent implements OnInit {
  locations: string[] = ["address1", "address"];

  errorMatcher = new CrossFieldErrorMatcher();

  profileForm = this.fb.group({
    firstName: ['',[
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
    backOfficeRepeatedPassword:['',[
      Validators.required
    ]],
    fourDigitPassword:['',[
      Validators.required,
      Validators.maxLength(4)
    ]],
  },
    {validator: this.passwordValidator});

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

  passwordValidator(form: FormGroup) {
    const condition = form.get('backOfficePassword').value !== form.get('backOfficeRepeatedPassword').value;
    return condition ? { passwordsDoNotMatch: true} : null;
  }

  returnToList() {
  }
  save() {

  }
}
