import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-multi-select-chips",
  templateUrl: "./multi-select-chips.component.html",
  styleUrls: ["./multi-select-chips.component.scss"]
})
export class MultiSelectChipsComponent implements OnInit {
  @Input() optionsArray: string[];
  @Input() control: FormControl;
  @Input() inputLabel: string;
  @Input() isRequired: boolean;
  isInputTouched: boolean;
  // workaround
  // problem with list error

  constructor() {
    this.isRequired = false;
  }

  ngOnInit() {
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
