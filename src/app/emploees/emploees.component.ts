import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { EmployeeService } from '../services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-emploees',
  templateUrl: './emploees.component.html',
  styleUrls: ['./emploees.component.scss']
})

export class EmploeesComponent implements OnInit {

  displayedColumns: string[] = [
  'id',
  'firstname',
  'lastname',
  'email',
  'phone',
  'dob',
  'gender',
  'education',
  'experinses',
  'action'
];
  dataSource = new MatTableDataSource <any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  AddEmp() {
  const dialogRef = this._dialog.open(AddComponent);
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getEmployeeList();
      }
    }
  })
  }
  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      next: (res) =>{
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
    error: err => {
      console.log(err);
    }
  });
}

deleteEmployee(id: number){
  this._empService.deleteEmployee(id).subscribe({
    next: (res) =>{
      alert("Employee Deleted Successfully");
      this.getEmployeeList();
},
error: err => {
  console.log(err);

}
});
}

UpdateEmp(data: any) {
  const dialogRef = this._dialog.open(AddComponent, {
    data,
  });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      }

  })
  }
}
