import { Component, OnInit } from "@angular/core";
import { trigger, state, style } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("subNav", [
      state(
        "start",
        style({
          width: "0px"
        })
      ),
      state(
        "end",
        style({
          width: "300px"
        })
      )
      // transition('start => end', animate(500)),
      // transition('end => start', animate(500))
    ])
  ]
})
export class AppComponent implements OnInit {
  isMenuOpenDefault: boolean;
  ngOnInit() {
    this.checkWidthOnInit();
  }

  checkWidthOnInit() {
    this.isMenuOpenDefault = true;
    if (window.innerWidth < 1300) {
      this.isMenuOpenDefault = false;
    }
  }
  toggleDrawer() {
    this.isMenuOpenDefault = !this.isMenuOpenDefault;
  }
}
