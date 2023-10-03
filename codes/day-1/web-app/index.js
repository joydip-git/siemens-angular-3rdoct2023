//function main(){
var intValue = 100
var floatValue = 100.34
var nameValue = 'joydip'
var boolValue = true
var joydipObject = {
    //value properties
    name: 'joydip',
    isTrainer: true,
    salary: 1000,

    //functional properties
    print: function () {
        return this.name + ' ' + this.isTrainer + ' ' + this.salary;
    }
}

console.log(add(12, 3))
//function declaration
function add(a, b) {
    return a + b
}

//subtract(12,3)
//function expression
var subtract = function (a, b) {
    return a - b
}
console.log(subtract(12, 3))

var x
console.log(x)
console.log(typeof x)

var y = x + 12
console.log(y)
console.log(typeof y)

var z = x + 'siemens'
console.log(z)
console.log(typeof z)

var res = 10 / 0
console.log(res)
console.log(typeof res)

function divide(a, b) {
    var r = a / b
    if (r == Infinity)
        throw new Error('denominator should not be zero')

    return r
}

try {
    var divRes = divide(12, 0)
    console.log(divRes)
} catch (e) {
    console.log(e)
}

console.log(typeof intValue)
console.log(typeof floatValue)
console.log(typeof nameValue)
console.log(typeof boolValue)
console.log(typeof joydipObject)
console.log(typeof add)

console.log(joydipObject.name)
console.log(joydipObject['salary'])
console.log(joydipObject.print())
//console.log(joydipObject['print']())

//}
//main()