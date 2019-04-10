import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../../services/user-management/user-management.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  dataSource: User[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private userManagementService: UserManagementService) {
  }
  ngOnInit() {
    this.dataSource = this.userManagementService.ElementData;
  }

}
