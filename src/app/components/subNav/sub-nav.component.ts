import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
  sideNavItems = {
    reporting : [
      { title : 'sales',
        items : [
          {name : 'Sales Report'},
          {name : 'Product Types Report'},
          {name : 'Customer Report'},
          {name : 'User Sales Report'},
          {name : 'Sales per product'},
          {name : 'Stock Report'},
          {name : 'Transactions Log'},
        ]
      },
      {
        title : 'other',
        items:[
          {name : 'register closures'},
          {name : 'time attendance'},
        ]
      },
    ],
    products : [
      { title : 'products',
        items : [
          {name : 'products'},
          {name : 'composite products'},
          {name : 'promotions'},
          {name : 'categories'},
          {name : 'service products'},
          {name : 'product types'},
          {name : 'popup alerts'},
          {name : 'brands'},
          {name : 'tags'},
          {name : 'tax rates'},
          {name : 'attributes'},
          {name : 'miscs'},
        ]
      },
      {
        title : 'stock',
        items:[
          {name : 'ingredients'},
          {name : 'stock movement'},
          {name : 'suppliers'},
        ]
      },
    ],
    company : [
      { title : 'company',
        items : [
          {name : 'company details'},
        ]
      },
      {
        title : 'locations',
        items:[
          {name : 'locations'},
          {name : 'devices'},
          {name : 'registers'},
        ]
      },
      {
        title : 'customers',
        items:[
          {name : 'groups'},
          {name : 'customers'},
        ]
      },
    ],
    management : [
      { title : 'printers',
        items : [
          {name : 'printers'},
          {name : 'printers templates'},

        ]
      },
      {
        title : 'users',
        items:[
          {name : 'user management'},
          {name : 'loyalty schemes'},
        ]
      },
      {
        title : 'settings',
        items:[
          {name : 'favorite products'},
          {name : 'reasons'},
          {name : 'loyalty setting'},
          {name : 'delivery charges'},
        ]
      },
    ],
  };
  constructor() { }

  ngOnInit() {
  }

}
