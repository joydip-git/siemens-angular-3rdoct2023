import { CustomerManager } from "./manager/implementation/customer-manager";
import { Customer } from "./models/customer";
import { printCustomers } from "./utility/customer-utility";

const manager = new CustomerManager()
console.log(manager.add({ id: 2, name: 'sunil', address: 'bangalore', mobileNo: 9090909090 }))
console.log(manager.add({ id: 1, name: 'joydip', address: 'chennai', mobileNo: 9090909091 }))
console.log(manager.add({ id: 3, name: 'anil', address: 'mumbai', mobileNo: 9090909092 }))

console.log('\nprinting after addition')
printCustomers(manager.getAll())

const customer = manager.get(2)
customer ? console.log(customer.name) : console.log('customer not found')

const updatedCustomer: Customer = {
    ...customer,
    name: 'sunil kumar'
}
const updateStatus = manager.update(2, updatedCustomer)
console.log(updateStatus ? 'updated' : 'could not update')

console.log('\nprinting after update')
printCustomers(manager.getAll())

const deleteStatus = manager.remove(2)
console.log(deleteStatus ? 'deleted' : 'could not delete')

console.log('\nprinting after deletion')
printCustomers(manager.getAll())

