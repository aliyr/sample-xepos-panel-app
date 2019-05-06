import { Injectable } from "@angular/core";
import {Device} from 'app/models/device';
@Injectable({
  providedIn: "root"
})
export class DevicesService {

  ElementData: Device[] = [
    {
      name: "bakery",
      description: "we bake it so good",
      business: "register1",
      isOnline: true,
      password: "pass",
      location: "london"
    },
    {
      name: "felafeli",
      description: "biain felafel bokhorin mofte",
      business: "register2",
      isOnline: true,
      password: "admin",
      location: "london"
    },
    {
      name: "kale pazi",
      description: "sag paz",
      business: "register3",
      isOnline: true,
      password: "admin",
      location: "somewhere"
    },
  ];
  constructor() {}
}
