import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, RouterLink, RouterLinkActive,CreateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Spring Boot CRUD Full Stack Application';
  protected readonly EmployeeListComponent = EmployeeListComponent;
  protected readonly CreateEmployeeComponent = CreateEmployeeComponent;
}
