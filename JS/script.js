/*let nam = "Hello World"
var nam2 = "Hello 2"

console.log(nam)
console.log(nam2)

var a = 4
var b = 2
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

let c = 6

console.log("======")

console.log(c)

let d = ++c
console.log(d)

console.log("======")

console.log(c)

let e = c++
console.log(d)

// function :

console.log("======")

function add(a,b) {
    return (a+b)
}
let ans = add(10,10)
console.log(ans)


function area(l,b) {
    return (l*b)
}
console.log(area(5,5))

// IF , ELSE :

const A = 20
if(A == 20){
    console.log("PRINT 20")
} else{
    console.log("BLOCK")
}

const Z = 0
if(Z == 0) {
    console.log("STOP")
} else {
    console.log("GET READY")
}

// FOR :

for(let i = 0; i < 99; i = i+1){
    console.log(i)
} */

/* 
// ARRAY :

const arr = [1,2,3,4,5]
const arr1 = [1,"JD",true,null]

console.log(arr)
console.log(arr1)

//INDEX :

console.log(arr1[1])

// MODIFY :

arr1[2] = false 
console.log("After",arr1)

// ADDING :

console.log(arr1.push(true))
console.log(arr1)

// DELETION :

console.log(arr.pop())
console.log(arr)

*/

//OBJECTS :

const person = {
    name: "Jaga",
    age: 22,
    Place: "Chennai"
};
console.log(person);

// Access element in objecta :

console.log(person.name)
console.log(person.age)

console.log(person["name"])
console.log(person["age"])

// Modify in objects :

person.name = "Jaga"
console.log(person)

person["name"] = "Jd"
console.log(person)

// Identifiers : Set of Rules naming the Variable :

/**
 * - firstname
 * - $firstname
 * 
 * - first name ❌
 * - 12 first name ❌  
 */

const firstname = "Ananth"
console.log(firstname)

// Add properties to object :

const a = {}
console.log('Before:', a)
a.place = "goa"
a["city"] = "chennai"
console.log('After:', a)

let object = {
    number: 1,
    names: "Sam",
    habit: true,
    number: null,
    habits: ["Waking", "GYM"],
    car: {
        names: "A6",
        color: "A5"
    }
}

console.log(object)

