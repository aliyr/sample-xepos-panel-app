import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-company-details-form",
  templateUrl: "./company-details-form.component.html",
  styleUrls: ["./company-details-form.component.scss"]
})
export class CompanyDetailsFormComponent implements OnInit {
  sells = ["a", "aa", "aaa"];

  companyEditForm = this.fb.group({
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
    password: [""],
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  validateUserSells(usersSells, sellType): boolean {
    // check if the sell is valid or not
    const isSellValid = this.sells.find(p => p === sellType) !== undefined;
    let isSellNonRepetitive = true;

    if (usersSells) {
      isSellNonRepetitive = usersSells.find(p => p === sellType) === undefined;
    }
    return isSellValid && isSellNonRepetitive;
  }
  addToSells(sellType) {
    const usersSells = this.companyEditForm.get("sells").value as FormArray;

    const sellInterAllowed = this.validateUserSells(usersSells, sellType);

    if (sellInterAllowed) {
      if (usersSells.length === 0) {
        // if sell array doesn't existed
        this.companyEditForm.get("sells").patchValue([sellType]);
      } else {
        usersSells.push(sellType);
        this.companyEditForm.get("sells").patchValue(usersSells);
      }
    }
  }
  removeSelectedSells(sell) {
    const selectedSells: [] = this.companyEditForm.get("sells").value;
    selectedSells.map((p, index) => {
      if (p === sell) {
        selectedSells.splice(index, 1);
        this.companyEditForm.get("sells").patchValue(selectedSells);
      }
    });
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
    ];
    console.log(confirmedData);
  }
}
