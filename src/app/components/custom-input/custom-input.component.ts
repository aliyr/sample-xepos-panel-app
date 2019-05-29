import { Component, Input, OnInit } from "@angular/core";
import { FormControl, ControlContainer } from "@angular/forms";
import { Error } from "app/models/input-error";

@Component({
  selector: "app-custom-input",
  templateUrl: "./custom-input.component.html",
  styleUrls: ["./custom-input.component.scss"]
})
export class CustomInputComponent implements OnInit {
  @Input() controlName: string;
  @Input() label: string;
  @Input() errors: Error[];
  @Input() inputType: string;
  control: FormControl;
  hide = false;

  constructor(private controlContainer: ControlContainer) {
    this.inputType = "text";
  }
  getControlValue() {
    this.control = this.controlContainer.control.get(
      this.controlName
    ) as FormControl;
  }
  ngOnInit() {
    this.getControlValue();
  }
}
