import { Injectable } from '@angular/core';
import {Register} from '../../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegistersService {
  registers: Register[] = [
    {
      name: 'register_1',
      openTime: '13:34 pm',
      closeTime: '13:34 pm',
      assignedLocation: 'west virginia'
    },
    {
      name: 'register_2',
      openTime: '13:34 pm',
      closeTime: '13:34 pm',
      assignedLocation: 'west virginia'
    },
    {
      name: 'register_3',
      openTime: '13:34 pm',
      closeTime: '13:34 pm',
      assignedLocation: 'south virginia'
    },
    {
      name: 'register_4',
      openTime: '13:34 pm',
      closeTime: '13:34 pm',
      assignedLocation: 'north virginia'
    }
  ];
  constructor() { }
}
