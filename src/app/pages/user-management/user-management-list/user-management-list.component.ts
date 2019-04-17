import { Component, OnInit , ViewChild} from '@angular/core';
import {UserManagementService} from '../../../services/user-management/user-management.service';
import {User} from '../../../models/User';
import {MatPaginator, MatSort , MatTableDataSource} from '@angular/material';
import {NgLog} from '../../../decorators/nglog.decorator';

@Component({
  selector: 'app-user-management-list',
  templateUrl: './user-management-list.component.html',
  styleUrls: ['./user-management-list.component.scss']
})
@NgLog()
export class UserManagementListComponent implements OnInit {
  dataSource = new MatTableDataSource(this.userManagementService.ElementData);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userManagementService: UserManagementService) {
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
}
