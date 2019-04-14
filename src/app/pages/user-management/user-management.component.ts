import {Component, OnInit, ViewChild} from '@angular/core';
import {UserManagementService} from '../../services/user-management/user-management.service';
import {User} from '../../models/User';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  dataSource = new MatTableDataSource(this.userManagementService.ElementData);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userManagementService: UserManagementService) {
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
