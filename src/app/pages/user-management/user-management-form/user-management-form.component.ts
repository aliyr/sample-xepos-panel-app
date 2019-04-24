import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import ErrorStateValidator from "../../../validators/error-state-matcher";

@Component({
  selector: "app-user-management-form",
  templateUrl: "./user-management-form.component.html",
  styleUrls: ["./user-management-form.component.scss"]
})
export class UserManagementFormComponent implements OnInit {
  locations: string[] = ["address1", "address"];
  confirmPasswordErrorMatcher = new ErrorStateValidator();

  profileForm = this.fb.group(
    {
      firstName: ["", [Validators.required]],
      surname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      type: ["", [Validators.required]],
      locationInput: ["" , []],
      locations: ["", [Validators.required]],
      RFIDToken: [""],
      timeAttendance: [""],
      wage: [""],
      username: ["", [Validators.required]],
      backOfficePassword: ["", [Validators.required]],
      backOfficeRepeatedPassword: ["", [Validators.required]],
      fourDigitPassword: [
        "",
        [Validators.required, Validators.pattern("[0-9]{4}")]
      ]
    },
    { validator: this.passwordValidator }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  validateUserLocations(userLocations, insertedLocation): boolean {
    // check if the location is valid or not
    const isLocationValid =
      this.locations.find(p => p === insertedLocation) !== undefined;
    let isLocationNonRepetitive = true;
    if (userLocations) {
      isLocationNonRepetitive =
        userLocations.find(p => p === insertedLocation) === undefined;
    }
    return isLocationValid && isLocationNonRepetitive;
  }

  addToLocations(location) {
    const usersLocations = this.profileForm.get("locations").value as FormArray;
    const LocationInterAllowed = this.validateUserLocations(
      usersLocations,
      location
    );

    if (LocationInterAllowed) {
      if (usersLocations.length === 0) {
        // if locations array doesn't existed
        this.profileForm.get("locations").patchValue([location]);
      } else {
        usersLocations.push(location);
        this.profileForm.get("locations").patchValue(usersLocations);
      }
    }
  }

  passwordValidator(form: FormGroup) {
    const condition =
      form.get("backOfficePassword").value !==
      form.get("backOfficeRepeatedPassword").value;
    return condition ? { passwordsDoNotMatch: true } : null;
  }

  removeSelectedLocations(location) {
    const selectedLocations: [] = this.profileForm.get("locations").value;
    selectedLocations.map((p, index) => {
      if (p === location) {
        selectedLocations.splice(index, 1);
        this.profileForm.get("locations").patchValue(selectedLocations);
      }
    });
  }

  returnToList() {}
  save() {
   const confirmedData  =[
     {firstName : this.profileForm.get('firstName').value },
     {surname : this.profileForm.get('surname').value },
     {email : this.profileForm.get('email').value },
     {type : this.profileForm.get('type').value },
     {locations : this.profileForm.get('locations').value },
     {RFIDToken : this.profileForm.get('RFIDToken').value },
     {timeAttendance : this.profileForm.get('timeAttendance').value },
     {wage : this.profileForm.get('wage').value },
     {username : this.profileForm.get('username').value },
     {backOfficePassword : this.profileForm.get('backOfficePassword').value },
     {fourDigitPassword : this.profileForm.get('fourDigitPassword').value },
   ]

   console.log(confirmedData);

  }
}