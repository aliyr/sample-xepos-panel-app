import { Component, OnInit, Input } from "@angular/core";
import { Error } from "app/models/input-error";
import { FormControl, ControlContainer } from "@angular/forms";

@Component({
  selector: "app-custom-options-select",
  templateUrl: "./custom-options-select.component.html",
  styleUrls: ["./custom-options-select.component.scss"]
})
export class CustomOptionSelectComponent implements OnInit {
  @Input() optionsArray: [];
  @Input() controlName: string;
  @Input() label: string;
  @Input() errors: Error[];
  control: FormControl;
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.getValue();
  }

  getValue() {
    this.control = this.controlContainer.control.get(
      this.controlName
    ) as FormControl;
  }
}
