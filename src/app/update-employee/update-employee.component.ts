import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../employee";


@Component({
  selector: 'update-employee',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})


export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = {
    id:0,
    firstName: '',
    lastName:'',
    emailId:''
  }
  // @ts-ignore
  id: number;


constructor( private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
}

ngOnInit() {
  this.id=this.route.snapshot.params['id'];

this.employeeService.getEmployeeById(this.id).subscribe(res=>{
  this.employee = res;
  console.log("employee",this.employee);
});
}

  onSubmit() {
   this.employeeService.updateEmployee(this.id, this.employee).subscribe(res=>{
this.goToEmployeeList();
console.log("successfully updated",res);
   });
  }

  goToEmployeeList(){
  this.router.navigate(['employee-list']);
  }
}
