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

let a=10;
var b=30;
