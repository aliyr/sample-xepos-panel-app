import { Component, Input, OnInit } from "@angular/core";
import { FormControl, ControlContainer } from "@angular/forms";
import { Error } from "app/models/input-error";
@Component({
  selector: "app-custom-double-check-input",
  templateUrl: "./custom-double-check-input.component.html",
  styleUrls: ["./custom-double-check-input.component.scss"]
})
export class CustomDoubleCheckInputComponent implements OnInit {
  @Input() firstControlName: string;
  @Input() secondControlName: string;

  @Input() label: string;
  @Input() errors: Error[];
  @Input() inputType: string;
  firstControl: FormControl;
  secondControl: FormControl;

  constructor(private controlcontainer: ControlContainer) {}
  // workaround
  //this component is not reusable as much
  ngOnInit() {
    this.getValue();
  }
  getValue(): void {
    this.controlcontainer.hasError("passwordsDoNotMatch");

    this.firstControl = this.controlcontainer.control.get(
      this.firstControlName
    ) as FormControl;
    this.secondControl = this.controlcontainer.control.get(
      this.secondControlName
    ) as FormControl;
  }
}
