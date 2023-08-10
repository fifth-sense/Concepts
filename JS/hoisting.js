/**
 *  hoisting is a concept in javascript using which we can access functiona and variables even without initialising it
 * this concept of hoisting lies in the memory creation phase of javascript
 * so as we all know javascript is a single threaded synchronous language. and whenever a js code a global execution context 
 * is got created execution starts with two phases first phase is memory creation phase where js assign memory to all vars and 
 * function in case variable its assigned a special value undefined in case of proper function it will take the functions as its
 * value, because of this hoisting happens in js
 * examples....
 * 
 * 

 */
// var x = 7;
// function getName(){
//     console.log("hello js");
// }
console.log(x) // undefined
getName(); // hello js 
y(); // undefined
p(); // undefined

//try to access the var and the function before initialising it 
var x = 7;
function getName(){
    console.log("hello js");
}

var y = function(){
    console.log("calling for y");
}
const p = () =>{
    console.log("calling for p");
}

// if we remove x at line 21 then in that case will give error like x is not defined
// y and p is treated a variable in js only traditional way of calling a function will have a whole function as value in memory phase