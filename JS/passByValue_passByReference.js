//pass by value
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
passByValue(a, b)
console.log("a and b after pass by value", a, b) //a=1, b=2

//pass by reference
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
console.log("before calling pass by refrence", obj.a, obj.b) // a: 10, b: 20
passByReference(obj) // a: 20, b:10
console.log("after calling pass by refrence", obj.a, obj.b) // a:20, b: 10

//Note: In Pass by Reference, we are mutating the original value. when we pass an object as an arguments and update that object’s reference in
// the function’s context, that won’t affect the object value. But if we mutate the object internally, It will affect the object .

 //Updatting the object reference in the function
function passByReference1(obj){
    obj = {
        a: 10,
        b: 20,
        c: "Hello"
    }
    console.log("inside function",obj)
}
let ob = {
    a: 10, b: 20
}
console.log("before calling function obj", ob); //{ a: 10, b: 20 }
passByReference1(ob); // { a: 10, b: 20, c: 'Hello' }
console.log("after calling function obj", ob); //{ a: 10, b: 20 }

//Mutating the original object
function passByReference2(o){
    o.c = "Bye"
    console.log("object inside function ", o)
}
let o = {
    a:1,
    b: 2
}
console.log("object before function ", o); // { a: 1, b: 2 }
passByReference2(o);   // { a: 1, b: 2, c: 'Bye' }                 
console.log("object after function ", o); //{ a: 1, b: 2, c: 'Bye' }


