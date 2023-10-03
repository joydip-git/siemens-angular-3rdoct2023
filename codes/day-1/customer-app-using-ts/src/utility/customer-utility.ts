import { Customer } from "../models/customer";

export const printCustomers = (customers: Customer[]) => customers.forEach(c => console.log(c.name + ' ' + c.id + ' ' + c.mobileNo + ' ' + c.address))