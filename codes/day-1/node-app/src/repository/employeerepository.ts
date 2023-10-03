import { Employee } from "../models/employee";

export class EmployeeRepository {
    private static employees: Employee[] = []
    static getEmployees() {
        return this.employees
    }
}