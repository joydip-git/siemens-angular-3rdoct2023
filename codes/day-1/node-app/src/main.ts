import { Developer } from "./models/developer";
import { Employee } from "./models/employee";
import { Hr } from "./models/hr";
//import { Employee } from "./employee";
import { add, subtract } from "./utility";

console.log('welcome to node js')
console.log(add(12, 3))
console.log(subtract(12, 3))

const anilEmployee = new Developer("anil", 1, 1000, 2000, 3000, 4000)
const sunilEmployee = new Hr('sunil', 2, 2000, 3000, 4000, 5000)

// const employees: Employee[] = new Array(anilEmployee, sunilEmployee)
const employees: Employee[] = [anilEmployee, sunilEmployee]
// employees.push(anilEmployee)
// employees.push(sunilEmployee)
//employees.push(12)
for (let i = 0; i < employees.length; i++) {
    let e: Employee = employees[i]
    console.log(e.name + ' has got salary of ' + e.calcultateSalary())
}

for (let e of employees) {
    console.log(e.name + ' has got salary of ' + e.calcultateSalary())
}

for (let index in employees) {
    console.log(employees[index].name + ' has got salary of ' + employees[index].calcultateSalary())
}

const numbers: number[] = [1, 2, 3, 4, 5, 6]
numbers.push(30)
numbers.unshift(10, 20)
console.log(numbers)
//numbers.splice(1, 2)
numbers.splice(1, 2, 200, 300)
console.log(numbers)

const evenNumbers = numbers.filter(
    (num: number) => num % 2 == 0
)
console.log(evenNumbers)

//delegate bool Predicate<T>(T num)
type logicType<T> = (value: T) => boolean
function filterValues<T>(arr: T[], fn: logicType<T>): T[] {
    const resultant: T[] = []
    for (const num of arr) {
        const status = fn(num)
        if (status)
            resultant.push(num)
    }
    return resultant
}
//const isOdd: logicType = (a: number) => a % 2 != 0
const isOdd: logicType<number> = function (a: number) {
    return a % 2 != 0
}
const isGreater: logicType<number> = (a: number) => a > 50
const oddNumbers = filterValues<number>(numbers, isOdd)
console.log(oddNumbers)

const greaterNumbers = filterValues<number>(numbers, isGreater)
console.log(greaterNumbers)


console.log(filterValues<Employee>(employees, (e: Employee) => e.calcultateSalary() > 10000))

// employees.filter(
//     function (e) {
//         return e.calcultateSalary() > 10000
//     }
// )

// numbers.sort(
//     function (a, b) {
//         return b - a
//     }
// )

// console.log(numbers)

// const mappedArray = numbers
//     .map(
//         (a) => (a * 5).toString()
//     )
// console.log(mappedArray)

numbers
    .sort(
        (a, b) => a - b
    )
    .filter(
        (a) => a % 2 == 0
    ).map(
        a => a * 5
    ).forEach(
        a => console.log(a)
    )