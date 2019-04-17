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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'edit' , 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userManagementService: UserManagementService , private router: Router) {
  }
  ngOnInit() {
    this.updateMaterialTable();
  }
  newFilteredData($event: User[]) : void {
    this.dataSource = new MatTableDataSource($event);
    this.updateMaterialTable();
  }

  deleteUser(userID) : void {
    this.userManagementService.ElementData.map((elem , index)=>{
      if(userID == elem.position){
        this.userManagementService.ElementData.splice(index,1 );
       }
    })
    this.dataSource = new MatTableDataSource(this.userManagementService.ElementData);
    this.updateMaterialTable();
  }
  updateUser(userID) : void{
    this.router.navigate(['/user-management/form',  userID ]);
  }

  updateMaterialTable() : void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
