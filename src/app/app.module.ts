import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
// import {HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    // AppComponent,
    // EmployeeListComponent,
    // CreateEmployeeComponent,
    // UpdateEmployeeComponent,
    // EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // HttpClient
    // MatFormFieldModule,
    // MatInputModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
