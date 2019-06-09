import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registers-form',
  templateUrl: './registers-form.component.html',
  styleUrls: ['./registers-form.component.scss']
})
export class RegistersFormComponent implements OnInit {
  locations: string[];
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        name: ["", [Validators.required]],
        openTime: ["", [Validators.required]],
        closeTime: ["", [Validators.required]],
        location: ["", [Validators.required]],
      }
    );

    this.locations = ["address1", "address"];
  }

  returnToList() {
    this.router.navigate(["/panel/registers/details"]);
  }

  save() {
    const confirmedData = {
      name: this.registerForm.get("name").value,
      openTime: this.registerForm.get("openTime").value,
      closeTime: this.registerForm.get("closeTime").value,
      location: this.registerForm.get("location").value,
    };

    console.log(confirmedData);
  }

}
