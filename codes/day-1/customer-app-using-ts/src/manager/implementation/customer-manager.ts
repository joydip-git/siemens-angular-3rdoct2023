import { Customer } from "../../models/customer";
import { Manager } from "../abstract/manager";
import { customers } from "../../repository/customers";

export class CustomerManager implements Manager<Customer>{
    add(data: Customer): boolean {
        let status = false
        let found = customers.find(
            (c) => c.id === data.id
        )
        if (!found) {
            customers.push(data)
            status = true
        }

        return status
    }
    remove(id: number): boolean {
        let status = false

        let foundIndex = customers.findIndex(
            (c) => c.id === id
        )
        if (foundIndex) {
            customers.splice(foundIndex, 1)
            status = true
        }

        return status
    }
    update(id: number, data: Customer): boolean {
        let status = false

        let foundIndex = customers.findIndex(
            (c) => c.id === id
        )
        if (foundIndex) {
            customers.splice(foundIndex, 1, data)
            status = true
        }

        return status
    }
    get(id: number): Customer | undefined {
        let found = customers.find(
            (c) => c.id === id
        )
        return found
    }
    getAll(): Customer[] {

        //spread operator (...)
        const copy: Customer[] = [...customers]
        return copy
    }
}