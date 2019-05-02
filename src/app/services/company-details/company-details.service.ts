import { Injectable } from "@angular/core";
import { Company } from "app/models/company";
@Injectable({
  providedIn: "root"
})
export class CompanyDetailsService {
  ElementData: Company[] = [
    {
      orderNo: 1,
      name: "first co",
      privateAddress: "somewhere private",
      lastLogin: "wasnt that long",
      salesToday: 100,
      allTransactions: 141,
      lastTransaction: "yesterday"
    },
    {
      orderNo: 2,
      name: "second co",
      privateAddress: "somewhere far",
      lastLogin: "today",
      salesToday: 200,
      allTransactions: 111,
      lastTransaction: "today"
    },
    {
      orderNo: 3,
      name: "third co",
      privateAddress: "not that far",
      lastLogin: "yesterday",
      salesToday: 300,
      allTransactions: 121,
      lastTransaction: "yesterday"
    }
  ];
}
