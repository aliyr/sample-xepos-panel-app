import { Component, OnInit } from "@angular/core";
import { trigger, state, style } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("sub-nav", [
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
  menuIsOpen: boolean;

  ngOnInit() {
    this.setInitialValueForMenuIsOpen();
  }

  setInitialValueForMenuIsOpen() {
    this.menuIsOpen = window.innerWidth >= 1300;
  }

  toggleDrawer() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
