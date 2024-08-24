import { Component , OnInit} from '@angular/core';
import {Employee} from "../employee";
import {NgForOf} from "@angular/common";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";


@Component({
  selector: 'employee-list',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
constructor(private employeeService: EmployeeService, private router:Router) {}

ngOnInit() {
this.getEmployees();


}
private getEmployees(){
  this.employeeService.getEmployeesList().subscribe(res =>
    this.employees = res);
  console.log("emp data",this.employees);
}
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }


updateEmployee(id:number){
this.router.navigate(['update-employee',id]);
}
deleteEmployee(id:number){
this.employeeService.deleteEmployee(id).subscribe(res=>{
  console.log(res);
  this.getEmployees()
})
}
}
