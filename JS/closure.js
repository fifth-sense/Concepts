//A closure in JavaScript is when a function "remembers" the variables from its outer scope even after the outer 
//function has finished executing. Closures are commonly used for encapsulating functionality, creating private 
//variables, and maintaining state.//functun with its lexical scope forms a closure
function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    return y; //or return y if you return y you have to call it later to rexecute
}

let tmp = x();
console.log(tmp) // function(){}
tmp() //10

function z(){
    var b=100;
    function x(){
        let a = 10;
        function y(){
            console.log(a, b);
        }
        b=40;
         y(); //or return y if you return y you have to call it later to rexecute
    }
    x();
}
z() // 10, 40



 function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function () {
            count--;
            console.log(`Count: ${count}`);
        },
        reset: function () {
            count = 0;
            console.log(`Count reset to ${count}`);
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();

counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log(`Current Count: ${counter.getCount()}`); // Current Count: 1
counter.reset(); // Count reset to 0
