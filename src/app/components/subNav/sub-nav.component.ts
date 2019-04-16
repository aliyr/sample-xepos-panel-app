import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeNodePadding} from '@angular/material';


interface SideMenu {
  title: string;
  items?: SideMenu[];
}

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})

export class SubNavComponent {
  treeControl = new NestedTreeControl<SideMenu>(node => node.items);
  dataSource = new MatTreeNestedDataSource<SideMenu>();
  sideNavItems: SideMenu[] = [
      {
          title:'reporting',
          items : [
            { title : 'sales',
              items : [
                {title : 'Sales Report'},
                {title : 'Product Types Report'},
                {title : 'Customer Report'},
                {title : 'User Sales Report'},
                {title : 'Sales per product'},
                {title : 'Stock Report'},
                {title : 'Transactions Log'},
              ]
            },
            {
              title : 'other',
              items:[
                {title : 'register closures'},
                {title : 'time attendance'},
              ]
            },
          ]
        },
      {
        title: 'products',
        items: [
          { title : 'products',
            items : [
              {title : 'products'},
              {title : 'composite products'},
              {title : 'promotions'},
              {title : 'categories'},
              {title : 'service products'},
              {title : 'product types'},
              {title : 'popup alerts'},
              {title : 'brands'},
              {title : 'tags'},
              {title : 'tax rates'},
              {title : 'attributes'},
              {title : 'miscs'},
            ]
          },
          {
            title : 'stock',
            items:[
              {title : 'ingredients'},
              {title : 'stock movement'},
              {title : 'suppliers'},
            ]
          },
        ]
      },
      {
        title: 'company',
        items: [
          { title : 'company',
            items : [
              {title : 'company details'},
            ]
          },
          {
            title : 'locations',
            items:[
              {title : 'locations'},
              {title : 'devices'},
              {title : 'registers'},
            ]
          },
          {
            title : 'customers',
            items:[
              {title : 'groups'},
              {title : 'customers'},
            ]
          },
        ]
      },
      {
        title: 'management',
        items: [
          { title : 'printers',
            items : [
              {title : 'printers'},
              {title : 'printers templates'},

            ]
          },
          {
            title : 'users',
            items:[
              {title : 'user management'},
              {title : 'loyalty schemes'},
            ]
          },
          {
            title : 'settings',
            items:[
              {title : 'favorite products'},
              {title : 'reasons'},
              {title : 'loyalty setting'},
              {title : 'delivery charges'},
            ]
          },
        ]
      }
    ];
  constructor() {
    this.dataSource.data = this.sideNavItems;
  }

  hasChild = (_: number, node: SideMenu) => !!node.items && node.items.length > 0;
}
