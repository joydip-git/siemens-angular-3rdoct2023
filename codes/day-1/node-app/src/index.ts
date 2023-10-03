import { Employee } from "./employee";
import { add, subtract } from "./utility";

console.log('welcome to node js')
console.log(add(12, 3))
console.log(subtract(12, 3))

const anilEmployee = new Employee("anil", 1, 1000, 2000, 3000)
console.log(anilEmployee.calcultateSalary())