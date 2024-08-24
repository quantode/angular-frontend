import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";


const routes: Routes = [
  {
    path:'employee-list', component: EmployeeListComponent,

  },
  {
    path:'create-employee', component: CreateEmployeeComponent,
  }
  // {
  //   path: '', redirectTo: '/create-employee', pathMatch: 'full'
  // }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
