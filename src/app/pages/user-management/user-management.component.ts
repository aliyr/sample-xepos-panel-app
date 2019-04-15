import { Component, OnInit , ViewChild} from '@angular/core';
import {UserManagementService} from '../../services/user-management/user-management.service';
import {User} from '../../models/User';
import {MatPaginator, MatSort , MatTableDataSource} from '@angular/material';
import {NgLog} from '../../decorators/nglog.decorator';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
@NgLog()
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userManagementService: UserManagementService) {
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.userManagementService.ElementData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  newFilteredData($event: User[]) {
    this.dataSource = new MatTableDataSource($event);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  goToNextPage(){
     this.dataSource.paginator.nextPage(); 
     console.log(this.dataSource.sort.direction)
    }
}
