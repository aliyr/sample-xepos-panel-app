import { Component, OnInit, Input } from "@angular/core";
import { FormControl, ControlContainer } from "@angular/forms";
import { controlNameBinding } from "@angular/forms/src/directives/reactive_directives/form_control_name";

@Component({
  selector: "app-multi-select-chips",
  templateUrl: "./multi-select-chips.component.html",
  styleUrls: ["./multi-select-chips.component.scss"]
})
export class MultiSelectChipsComponent implements OnInit {
  @Input() optionsArray: string[];
  @Input() controlName: string;
  @Input() inputLabel: string;
  @Input() isRequired: boolean;
  control: FormControl;
  isInputTouched: boolean;
  // workaround
  // problem with list error

  constructor(private controlContainer: ControlContainer) {
    this.isRequired = false;
  }

  ngOnInit() {
    this.control = this.controlContainer.control.get(
      this.controlName
    ) as FormControl;
    this.control.patchValue([]);
  }

  validateUseroptions(userOptions: string[], insertedOption: string): boolean {
    // check if the Option is valid or not
    let isOptionNonRepetitive = true;
    const isOptionValid =
      this.optionsArray.find(p => p === insertedOption) !== undefined;

    if (userOptions) {
      isOptionNonRepetitive =
        userOptions.find(p => p === insertedOption) === undefined;
    }
    return isOptionValid && isOptionNonRepetitive;
  }

  addToOptions(Option: string) {
    const usersOptions: string[] = this.control.value;
    const OptionInterAllowed = this.validateUseroptions(usersOptions, Option);
    if (OptionInterAllowed) {
      usersOptions.push(Option);
      this.control.patchValue(usersOptions);
    }
  }

  removeSelectedOptions(Option: string) {
    const selectedOptions: string[] = this.control.value;
    selectedOptions.map((p, index) => {
      if (p === Option) {
        selectedOptions.splice(index, 1);
        this.control.patchValue(selectedOptions);
      }
    });
  }
}
