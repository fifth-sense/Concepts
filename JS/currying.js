function multiply(x){
    return function(y){
        return x*y
    }
}
let mul = multiply(2);
console.log(mul);
console.log(mul(3))

function curry(fn){
    const helper = function(...args){
        console.log(args, fn)
        if(args.length >=fn.length){
            console.log("inside---", args.length, fn.length)
            return fn.apply(this, args)
        }else{
            return (...args2) => helper.call(this, ...args, ...args2)
        }
    }
    console.log(helper)
    return helper;
}

let join = (a, b, c) =>{
    return `${a}_${b}_${c}`
}
let curriedJoin = curry(join);
console.log(curriedJoin(13)(42,3))
console.log(curriedJoin(13)(42)(3))

var x = 23;

(function(){
  var x = 43;
  (function random(){
    console.log(x) // here x is undefinde because x value is not assigned yet due to hoisting
    x++; // we are trying to increment undefined which not a number so it give NaN
    console.log(x); // prints NaN 
    var x = 21; //  defined here
  })();
})();