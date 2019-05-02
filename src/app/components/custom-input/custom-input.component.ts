import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

interface Error {
  title: string;
  message: string;
}

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() errors: Error[];

  constructor() { }

  ngOnInit() {
  }

}
