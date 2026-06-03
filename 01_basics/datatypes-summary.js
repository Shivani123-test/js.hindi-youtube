//Primitive 
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score=100
const scoreValue = 33.3

const isLoggedIn = true
const temp = null
let username;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid)

const bigNumber = 34345435465767n

//Reference(non-primitive)
//Array, Objects, Functions

const heros = ["shaktmaan", "Hanumaan"];
let myObj = {
    name: "shiv",
    age:22,
}

const muFunction = function(){
    console.log("hey pretty girl");
}