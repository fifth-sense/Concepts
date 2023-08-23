/**
 * in js there are 3 ways of declaring a variable uisng var, let and const
 * var are hoisted in js - means we can access it even before initializing it because they got the memory in global 
 * space or object because js works in that way
 * in case of let and const they are also  hoisted but in a diffrent memory space not in global memory or object
 * and we cannot acceess the object where let and cont are hoisted (Script object not part of global object)
 * the time between declaration and the initializing the let and const variable are in temporal dead zone
 * in case of let we can declare it and initialize its value later but const is strict than let we have to declare and initialize
 * it then and there otherwise we will get syntex error
 */

//diffrenece 

var a =20;
var b =70; // this is fine
/**
 * Variables are declared using the let keyword are block-scoped, are not initialized to any value, and are not attached 
   to the global object.
   Redeclaring a variable using the let keyword will cause an error.
   A temporal dead zone of a variable declared using the let keyword starts from the block until the initialization 
   is evaluated.
 */
let c=10;
//let a  // not fine SyntaxError: Identifier 'a' has already been declared


//console.log(a)
const d = 80//const d   //
console.log(d) // SyntaxError: Missing initializer in const declaration


//temporal deadzone = The temporal death zone prevents you from accidentally referencing a variable before its declaration.
{
    // a new block scope 
    let log = function(){
        console.log(message)
    }
   // log(); // temporal deadzone we cannot access message untill ints initialze that is why calling log is girving error here
    let message = "hello";
    log(); // no error because message is initialized now
}


for(var i=0;i<5;i++){ // here i is a global variable
    console.log("excuting in var ", i)
    setTimeout(()=>{
        console.log("excuting in setTimeOut ", i)
        console.log(i); // 5 5 5 5 5 because its declared as var till setTimeOut execute itself value of i become 5
    }, 1000)
}
// how to print 0 1 2 3 4 using var only
// so for that we need to used a another function which will immediately invoke, we will create a new scope for var so that each call back function reference a new variable

for(var i =0;i<5;i++){
    (
        function(j){
            setTimeout(()=>{
              console.log(j)
            }, 1000)
        }
    ) (i)
}

for(let i=0;i<4;i++){ // lwt create a new variable in every iteration 
    console.log("excuting in let ", i)
    setTimeout(()=>{
        console.log("excuting in setTimeOut let  ", i)
        console.log(i); // 0 1 2 3 4  because its declared as let 
    }, 1000)
}

/**
 * LET VS VAR
 * variable scope
 * 
 * Variable scope
 *    var have global scope if define outside a function get attached to global object as property eg in JS global object is window so window.a and in node js global object is global 
 *    inside a function it has a block scope out side the function we cannot access it, they are hoisted in js
 * 
 *    Let - have block scope, they are not attached to global scope they are attched to script tag
     you cannot access them using window.c
 * Redeclaration
 *   var counter = 10;
     var counter;
     console.log(counter); // 10
     let a = 18;
     let a  // error

 * Temporal DeadZone
     The lifecycle of a variable happens in two phases 1. creation phase and 2 execution phase
     in case of var in creation phase it got memory and get initialize with special keyword 'undefined' because of this also var are hoisted
     got initialize with specified value in execution phase
    But in case of let in creation phase they got assigned the storage but not got initialized they will be in temporal dedzone we cannot access them 
    once in execution phase they got initialize with specified value    
 */

/**
 * CONST in ES6
 *   const are strictier in js, we cannot reassigned them a value
 *   const variable,  have to declare and initialze at the same time 
 *   const a // error / initialization is must
 *   const a = 20;
 *   const a = 40 // error no reassignementy
 * 
 * Const and object - variable should be read only
 * The const keyword ensures that the variable it creates is read-only. However, it doesn’t mean that the actual value to which the const variable reference is immutable. 
 * For example:
 * const person = {age: 30};
 * person.age = 40 // ok
 * console.log(person.age )// 40
 * 
 * But we cannot resign person a new object
 * person = {age: 50} // type error
 * 
 * If we want to make value to immutable then we can use Object.freeze()
 * 
 * const person = Object.freeze({age: 20})
 * Object.freeze() is shallow - meaning that it w=freeze the property of the object not the property referring to object
 * let object = Object.freeze({
 *    name: "company A",
 *    address: {
 *       street : "a",
 *       city: "n"
 *    }
 * })
 * here company object is freezed but company.address object is not freeze
 * company.address.city = " y" //OK fine
 * Const and Array 
 *     const color = ["red"]
 *           color.push("green")
 *      console.log(color)// ["red", "green"]
 *   color.pop();
 *   color.pop(); //[]
 *   color = ["yellow"] // type error, we are reassigning color array
 * Const in for loop
 *   for ... of... object can use const but normal for loop cannot use const while itrating
 *   let scores = [75, 80, 95];
     for (const score of scores) { // because it assigne a new const in each iteration
       console.log(score);
     }

     for(const i=0;i<scores.length();i++) // typeerrpr
 */

