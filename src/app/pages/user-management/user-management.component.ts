import { Component, OnInit ,ViewChild} from '@angular/core';
import {UserManagementService} from '../../services/user-management/user-management.service';
import {User} from '../../models/User';
import {MatPaginator ,MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  dataSource= new MatTableDataSource(this.userManagementService.ElementData);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private userManagementService: UserManagementService) {}
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
      this.dataSource.paginator = this.paginator;

  }
  newFilteredData($event : User[]){
    this.dataSource= new MatTableDataSource($event);
  }
  goToNextPage(){
    this.dataSource.paginator.nextPage();

  }
}