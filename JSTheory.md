
Q. difference amonge var, let and constusing two method
A. refer ES6->let-const-var.js file

Q. difference between arrow function and normal function
A. Regular function
   function print(){
    console.log("hello);
   } 

   Arrow function
   const printArrow = () => {
    console.log("hello in arrow)
   }

   Regular function are contructable that means we can  call it using new keyword but arrow functions are not contructable we cannot use new keyword  for arrow function
   Ex new Print(); // is ok new printArrow() //not ok give TypeError printArrow not defined
   Regular function binds this but this are not binded in arrow function
   memory assignment of regular function and arrow function are different regular function got stored as whole function as value but arrow function get undefined as value

  normal function can be hoisted but arrow function cannot
  normal function can create its own this arrow function cannot arrow function  will refer that this before making arrow function this was pointing
  arrow function cannot be declared regular function can
  function declration***
       function print(){

     }
  function expression***
       const print = function(){

     }
  No arguments in arrow function in regaular function we get arguments parameter
  function print(){
    console.log(arguments) //ok
  }
  const print = () =>{
    console.log(arguments) //reference error no arguments defined
  }

Q. Primitive and non-primitive
   Primitive are those which predefined in js. they are build types provided by js. they only represents single value. they are primitive
   Number, String, Undefined, Null, Boolean, BigInt, Symbol
   Symbol are used to create object which will always be unique.
       var sym = Symbol("Hello")
       console.log(typeof(sym)); //symbol
       console.log(sym); //Symbol("Hello")

   Non primitive types are derived from primitive. 
   they cannot contains the value directly
   ex. Object, Array
       creating a object using constructor
       const obj = new Object()
       creating a object using string literal
       const obj1 = {a: 20}

       var a = new Array(); // -
       var b = new Array(10); // , , , , , , , , , ,
       var d = new Array(1, 2, 3, "Hello"); // 1,2,3, Hello
    
Q. Pass by Value pass by reference
A. see Js folder for example
   Pass by Value = In Pass by value we directly pass value of the variable as an arguments. so changes made inside the function doesnot change the original value
   Parameter passed as an  arguments creates its own copy of the passed valriable

   ex. 
     let a = 1
     let b = 2
     console.log("a and b befoere pass by value", a, b) //a=1, b=2
     function passByValue(a, b){
        let tmp;
        tmp = b;
        b=a;
        a = tmp;
        console.log("pass by value indise function", a, b) // a=2 b=1    
    }
    console.log("a and b after pass by value", a, b) //a=1, b=2

  Pass by reference
  Pass by references, function is called by passing refrence/address of the  variable as an arguments. they are mostly non-primitive
  updating them insude function will directly update the original value
  function doesnot create there own copy inside function
  array and object follows pass by refrences in js
  Ex. 
    function passByReference(obj){
        let tmp ;
        tmp = obj.b
        obj.b = obj.a
        obj.a = tmp;
        console.log("inside function a and b", obj.a, obj.b) // a: 20, b: 10
    }

    let obj = {
        a: 10,
        b: 20
    }
    consol.log("before calling pass by refrence", obj.a, obj.b) // a: 10, b: 20
    passByReference(obj) // a: 20, b:10
    consol.log("after calling pass by refrence", obj.a, obj.b) // a:20, b: 10

    Note: In Pass by Reference, we are mutating the original value. when we pass an object as an arguments and update that object’s reference in the function’s context, that won’t affect the object value. But if we mutate the object internally, It will affect the object .

    For mutating the original object we have to obj.newvariable like obj.c
    for just updating the value obj ={ ...o, c: "hello"} // this c will only add inside function outside function obj refer its original value

Q. What is hoisting 
A. see akshay sainy hoisting video

Q. What is Coercion?
A. Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number   to String, String to Number, Boolean to Number etc
    1 == '1' //true '1' is converted 
    1 === '1' // false
Q. Closure in JS
A. see Js folder  for example
   A function along with its lexical environment or scope will create a closure.
   function x(){
    let a =10;
    function y(){
        console.log(a) // function y has the reference of a it will remember its address whenever you call it
    }
    y();
   }
   x();

   Use of Closure
   Module design patter
   memoization
   function like once // it will just execute once
   maintaining state in async world
   iterations
   currying
   setTimeout

Q. what is pure function 
A. Pure function are those which will return same value if we pass same argument to the function
   function calculate(price){
      return price*0.5;
   }
   calulate(10); // if we pass 10 the functio always return 5 every time

   what a pure function can't do or not allowed to do
   Making an HTTP calls
   mutating data
   math.random()
   Dom/Query manupulation
   printing console or screen
   getting current Time
Q. Callback Promise Async/Await
A. https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/
A. Callback : callback fun are the func which we pass function as an arguments in an another func. As we know JS is a single threaded synchronous  programming lang. but using callback we can perform async task in js ex. are setTimeout, setInterval 
   Promises: Promises help us to implemnet asynchronoud task in synchrounous way. mainly there are three state of a promise. pending, fullfilled and rejected

   const promise = new Promise((resolve, rejec)=>{

      if(true)
      resolve();

      else
      reject()

   })
Async/Await: As we know JS is a non-blocking pgm lang. to block the code we can use async await.
 suppose we are calling an API we can use asynch await.

Generators: 

Q. JavaScript (JS) is a programming language developed by Brendan Eich in 1995 while he was working at Netscape Communications. Since then, it has been widely adopted and is now used by millions of developers around the world to create interactive web pages, web applications, and mobile applications.  

Q. How we can achieve encapsulation in js
A. using closure (inner function can access var and func of its lexical scope)  and classes - in classes creating private variables _name: "hari"

Q. Array methods
A. Slice and Splice - 
let arr = [1, 5,6,8,2,4,5,6]
slice(optional start index, optional end index) -create a copy of an array and return a portion of an array. it will return a new array doesnot change the original array
slice() // copy the whole array - [1, 5,6,8,2,4,5,6]
slice(1) //  slice from index 1 // [ 5,6,8,2,4,5,6]
slice(-2) // [5,6]
if start parameter is greated than the last index of the array it will return empty
slice(9) // []

slice(2, 4) //[6,8]
slice(-3)

const food = ['pizza', 'cake', 'salad', 'cookie'];

Splice - It will change the content of original array. used to add/remove element in existing array. and the return value will be the removed item in array
Splice(start, optional delete count, optional item to be added)
food.Splice(1, 0, 4) // 1 se 0 elemnt ko delete krk, 4 add krna h
food.splice(2,1) // 
console.log(food)// ['pizza', 'cake', 'cookie'];

slice create a shallow copy of the original array, and return a portion of an array, but splice updated the original array

Building Blocks of a Web Application
There are a few things you need to consider when building modern applications. Such as:

User Interface - how users will consume and interact with your application.
Routing - how users navigate between different parts of your application.
Data Fetching - where your data lives and how to get it.
Rendering - when and where you render static or dynamic content.
Integrations - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
Infrastructure - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
Performance - how to optimize your application for end-users.
Scalability - how your application adapts as your team, data, and traffic grow.
Developer Experience - your team’s experience building and maintaining your application.








