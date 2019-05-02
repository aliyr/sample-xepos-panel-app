import { Injectable } from "@angular/core";
import { User } from "app/models/user";

@Injectable({
  providedIn: "root"
})
export class UserManagementService {
  ElementData: User[] = [
    {
      displayName: "jon",
      firstName: "jon",
      surname: "joni",
      emailAddress: "joni@gmail.com",
      type: "admin",
      userLocation: "near",
      RFIDtoken: "1234",
      timeAttendance: true,
      wage: "0",
      username: "jon jon",
      backOfficePassword: "123456789",
      fourDigitPassword: "1234",
      frontOfficeFastLogin: true
    },
    {
      displayName: "adam",
      firstName: "adam",
      surname: "adami",
      emailAddress: "adam@gmail.com",
      type: "accountant",
      userLocation: "far",
      RFIDtoken: "4321",
      timeAttendance: false,
      wage: "2",
      username: "adam adam1",
      backOfficePassword: "987654321",
      fourDigitPassword: "2312",
      frontOfficeFastLogin: true
    },
    {
      displayName: "ben",
      firstName: "ben",
      surname: "benzade",
      emailAddress: "ben@gmail.com",
      type: "admin",
      userLocation: "near",
      RFIDtoken: "4316",
      timeAttendance: true,
      wage: "4",
      username: "ben benzade",
      backOfficePassword: "7467543",
      fourDigitPassword: "3214",
      frontOfficeFastLogin: false
    }
  ];
  constructor() {}
}
