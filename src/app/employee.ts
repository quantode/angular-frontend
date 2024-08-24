import {EmployeeService} from "./employee.service";

export interface Employee {
  //holds the response of rest api
  id: number;
  firstName: string;
  lastName: string;
  emailId: string
}
