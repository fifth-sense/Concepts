//A closure in JavaScript is when a function "remembers" the variables from its outer scope even after the outer 
//function has finished executing. Closures are commonly used for \
// encapsulating functionality, 
// creating private 
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

let employees = [
    { name: "Alice", salary: 50000 },
    { name: "David", salary: 60000 },
    { name: "Charlie", salary: 70000 },
    { name: "Alice", salary: 80000 },
    { name: "David", salary: 90000 }
];
// sum of salary for the all the emp. and combine salary for the same name person and sort it .

function getSalary(emp){
    
    let sum = emp.reduce((sum,c)=> sum+c.salary ,0);
    console.log(sum)
    
    
}

getSalary(employees);


 
// a.callA(); // undefined
// a.callB(); // India


// decorators
// tupples
// generics 
// react fiber
// useReducer()
// useMutation();
// react query concept
// pattern 
// signleton pattern drawbacks

// solid principle
// acid -
// indexing
// optimised db query
// service descorver
// ciruit breaker
// clusters and 
// session based token and token based token







