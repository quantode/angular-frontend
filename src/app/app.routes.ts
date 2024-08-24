import { Routes } from '@angular/router';

import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeService} from "./employee.service";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";


export const routes: Routes = [
  {
    path:'employee-list', component: EmployeeListComponent,

  },
  {
    path:'create-employee', component: CreateEmployeeComponent,
  },
  {
    path:'update-employee/:id' , component: UpdateEmployeeComponent,
  },
  {
    path:'employee-details/:id' , component: EmployeeDetailsComponent,
  }

];


