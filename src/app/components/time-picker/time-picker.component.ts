import {Component, Input, OnInit} from '@angular/core';
import {Error} from '../../models/input-error';
import {ControlContainer, FormControl} from '@angular/forms';
import {NgxMaterialTimepickerTheme} from 'ngx-material-timepicker';
import {timePickerTheme} from 'app/themes/time-picker';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  @Input() controlName: string;
  @Input() label: string;
  @Input() error: Error;
  control: FormControl;
  theme: NgxMaterialTimepickerTheme;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.getControlValue();
    this.theme = timePickerTheme;
  }

  getControlValue() {
    this.control = this.controlContainer.control.get(
      this.controlName
    ) as FormControl;
  }

}
