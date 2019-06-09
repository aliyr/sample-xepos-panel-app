import { Component, OnInit } from "@angular/core";
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material";
import { SideMenu } from "app/models/side-menu";

@Component({
  selector: "app-sub-nav",
  templateUrl: "./sub-nav.component.html",
  styleUrls: ["./sub-nav.component.scss"]
})
export class SubNavComponent {
  treeControl = new NestedTreeControl<SideMenu>(node => node.items);
  dataSource = new MatTreeNestedDataSource<SideMenu>();
  sideNavItems: SideMenu[];
  constructor() {
    this.sideNavItems = [
      {
        title: "dashboard",
        route: "dashboard"
      },
      {
        title: "reporting",
        items: [
          {
            title: "sales",
            items: [
              { title: "Sales Report", route: "" },
              { title: "Product Types Report", route: "" },
              { title: "Customer Report", route: "" },
              { title: "User Sales Report", route: "" },
              { title: "Sales per product", route: "" },
              { title: "Stock Report", route: "" },
              { title: "Transactions Log", route: "" }
            ]
          },
          {
            title: "other",
            items: [
              { title: "register closures", route: "" },
              { title: "time attendance", route: "" }
            ]
          }
        ]
      },
      {
        title: "products",
        items: [
          {
            title: "products",
            items: [
              { title: "products", route: "" },
              { title: "composite products", route: "" },
              { title: "promotions", route: "" },
              { title: "categories", route: "" },
              { title: "service products", route: "" },
              { title: "product types", route: "" },
              { title: "popup alerts", route: "" },
              { title: "brands", route: "" },
              { title: "tags", route: "" },
              { title: "tax rates", route: "" },
              { title: "attributes", route: "" },
              { title: "miscs", route: "" }
            ]
          },
          {
            title: "stock",
            items: [
              { title: "ingredients", route: "" },
              { title: "stock movement", route: "" },
              { title: "suppliers", route: "" }
            ]
          }
        ]
      },
      {
        title: "company",
        items: [
          {
            title: "company",
            items: [
              { title: "license details", route: "/panel/license-details" },
              { title: "company details", route: "/panel/company-management" }
            ]
          },
          {
            title: "locations",
            items: [
              { title: "locations", route: "/panel/locations" },
              { title: "registers", route: "/panel/registers" },
              { title: "devices", route: "/panel/devices" }
            ]
          },
          {
            title: "customers",
            items: [
              { title: "groups", route: "" },
              { title: "customers", route: "" }
            ]
          }
        ]
      },
      {
        title: "management",
        items: [
          {
            title: "printers",
            items: [
              { title: "printers", route: "" },
              { title: "printers templates", route: "" }
            ]
          },
          {
            title: "users",
            items: [
              { title: "user management", route: "/panel/user-management" },
              { title: "loyalty schemes", route: "" }
            ]
          },
          {
            title: "settings",
            items: [
              { title: "favorite products", route: "" },
              { title: "reasons" },
              { title: "loyalty setting", route: "" },
              { title: "delivery charges", route: "" }
            ]
          }
        ]
      }
    ];

    this.dataSource.data = this.sideNavItems;
  }

  hasChild = (_: number, node: SideMenu) => node.items && node.items.length > 0;
}
