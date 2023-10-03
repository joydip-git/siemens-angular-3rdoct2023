import { Employee } from "../models/employee";
import { EmployeeRepository } from "../repository/employeerepository";
import { Manager } from "./managercontract";

export class EmployeeManager implements Manager<Employee>{
    add(data: Employee): boolean {
        let status = false

        const allRecords = EmployeeRepository.getEmployees()
        let found = allRecords.find(
            (e) => e.id === data.id
        )
        if (!found) {
            allRecords.push(data)
            status = true
        }

        return status
    }
    remove(id: number): boolean {
        let status = false

        const allRecords = EmployeeRepository.getEmployees()
        let foundIndex = allRecords.findIndex(
            (e) => e.id === id
        )
        if (foundIndex) {
            allRecords.splice(foundIndex, 1)
            status = true
        }

        return status
    }
    update(id: number, data: Employee): boolean {
        let status = false

        const allRecords = EmployeeRepository.getEmployees()
        let foundIndex = allRecords.findIndex(
            (e) => e.id === id
        )
        if (foundIndex) {
            allRecords.splice(foundIndex, 1, data)
            status = true
        }

        return status
    }
    get(id: number): Employee {

        const allRecords = EmployeeRepository.getEmployees()
        let found = allRecords.find(
            (e) => e.id === id
        )
        return found
    }
    getAll(): Employee[] {
        return EmployeeRepository.getEmployees()
    }

}