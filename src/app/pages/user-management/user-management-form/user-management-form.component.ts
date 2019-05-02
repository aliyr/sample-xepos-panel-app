import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import ErrorStateValidator from "app/validators/error-state-matcher";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-management-form",
  templateUrl: "./user-management-form.component.html",
  styleUrls: ["./user-management-form.component.scss"]
})
export class UserManagementFormComponent implements OnInit {
  locations: string[];
  confirmPasswordErrorMatcher = new ErrorStateValidator();

  profileForm = this.fb.group(
    {
      firstName: ["", [Validators.required]],
      surname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      role: ["", [Validators.required]],
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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.locations = ["address1", "address"];
  }

  passwordValidator(form: FormGroup) {
    const condition =
      form.get("backOfficePassword").value !==
      form.get("backOfficeRepeatedPassword").value;
    return condition ? { passwordsDoNotMatch: true } : null;
  }

  returnToList() {
    this.router.navigate(["/user-management/list"]);
  }
  save() {
    const confirmedData = {
      firstName: this.profileForm.get("firstName").value,
      surname: this.profileForm.get("surname").value,
      email: this.profileForm.get("email").value,
      role: this.profileForm.get("role").value,
      username: this.profileForm.get("username").value,
      backOfficePassword: this.profileForm.get("backOfficePassword").value,
      fourDigitPassword: this.profileForm.get("fourDigitPassword").value
    };

    console.log(confirmedData);
  }
}
