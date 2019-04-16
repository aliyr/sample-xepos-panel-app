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
        width: '0px'
      })),
      state('end', style({
        width: '300px'
      })),
      // transition('start => end', animate(500)),
      // transition('end => start', animate(500))
    ]),
  ],
})
export class AppComponent {
}
