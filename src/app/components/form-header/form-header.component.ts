import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss']
})
export class FormHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() saveDisabled = false;
  @Output() canceled= new EventEmitter<void>();
  @Output() confirmed= new EventEmitter<void>();
  constructor() { }

  ngOnInit() {}

  onCancel(): void {
    this.canceled.emit();
  }
  onConfirm(): void {
    this.confirmed.emit();
  }

}
