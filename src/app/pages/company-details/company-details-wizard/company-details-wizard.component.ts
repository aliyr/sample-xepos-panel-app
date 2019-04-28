import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-company-details-wizard",
  templateUrl: "./company-details-wizard.component.html",
  styleUrls: ["./company-details-wizard.component.scss"]
})
export class CompanyDetailsWizardComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}
  companyWizardForm = this.fb.group([]);

  ngOnInit() {}
  cancelCompanyWizardForm() {
    this.router.navigate(["/company-details/list"]);
  }
}
