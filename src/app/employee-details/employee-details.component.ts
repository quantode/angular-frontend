import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{
  employee: Employee = {
    id:0,
    firstName: '',
    lastName:'',
    emailId:''
  }
  // @ts-ignore
  id:number;

  constructor( private employeeService: EmployeeService , private router: Router, private route: ActivatedRoute)  {
  }


  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(res=>{
      console.log("response",res)
    this.employee = res;
    console.log("employee",this.employee);
    })
  }


}
