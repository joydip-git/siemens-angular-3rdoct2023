import { EmployeeManager } from "./manager/employeemanager";
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";
import { Product } from "./product";

const anilEmployee = new Developer("anil", 1, 1000, 2000, 3000, 4000)
const sunilEmployee = new Hr('sunil', 2, 2000, 3000, 4000, 5000)

const manager = new EmployeeManager()
console.log(manager.add(anilEmployee) ? "added" : "not added")
console.log(manager.add(sunilEmployee) ? "added" : "not added")

console.log(manager.getAll())

const products: Product[] = []
products.push({ id: 1, name: 'dell xps', price: 100000, description: 'new product from dell' })



