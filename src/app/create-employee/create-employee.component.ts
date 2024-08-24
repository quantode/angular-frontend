import { Component,OnInit } from '@angular/core';
import {Employee} from "../employee";
import {FormsModule, NgForm} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";


@Component({
  selector: 'create-employee',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})

export class CreateEmployeeComponent implements OnInit{



   employee: Employee = {
    id:0,
    firstName: '',
    lastName:'',
    emailId:''
  }
  constructor( private employeeService: EmployeeService, private router: Router)  {

  }

  ngOnInit(){

  }

  onSubmit(){
     console.log('submitted employee',this.employee);
     this.saveEmployee();

  }
  saveEmployee(){
     this.employeeService.createEmployee(this.employee).subscribe(res=>{
       console.log('successfully created',res);
       this.gotToEmployeeList();
     });
  }

  gotToEmployeeList(){
this.router.navigate(['employees']);
  }

}
