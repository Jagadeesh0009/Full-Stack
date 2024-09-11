let nam = "Hello World"
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
}