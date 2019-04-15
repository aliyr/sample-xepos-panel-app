import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger('subNav', [
      state('start', style({
        backgroundColor: 'yellow',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'green',
        width: '300px',
        height: '300px'
      })),
      transition('start => end', animate(1500)),
      transition('end => start', animate('800ms 0.5s ease-out'))
    ]),
  ],
})
export class AppComponent {
  isSubNavOpen  = true;
  toggleSubNav() {
    this.isSubNavOpen = this.isSubNavOpen !== true;
  }
}
