import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

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
