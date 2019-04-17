import { Component, OnInit , ViewChild} from '@angular/core';
import {UserManagementService} from '../../../services/user-management/user-management.service';
import {User} from '../../../models/User';
import {MatPaginator, MatSort , MatTableDataSource} from '@angular/material';
import {NgLog} from '../../../decorators/nglog.decorator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management-list',
  templateUrl: './user-management-list.component.html',
  styleUrls: ['./user-management-list.component.scss']
})
@NgLog()
export class UserManagementListComponent implements OnInit {
  dataSource = new MatTableDataSource(this.userManagementService.ElementData);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userManagementService: UserManagementService , private router: Router) {
  }
  ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  newFilteredData($event: User[]) {
    this.dataSource = new MatTableDataSource($event);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteUser(userID) {
    this.userManagementService.ElementData.map((elem , index)=>{
      if(userID == elem.position){
        console.log(elem)
        this.userManagementService.ElementData.splice(index,1 );
       }
    })
    this.dataSource = new MatTableDataSource(this.userManagementService.ElementData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  updateUser(userID){
  
  }
}
