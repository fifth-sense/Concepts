

/**
 * How do promises differ from async/await? Which would you use in a given scenario?
 * Promises and async/await are both used to handle asynchronous operations in JavaScript.
Syntax	
Uses .then() and .catch() for chaining callbacks. promises	
Syntactic sugar over promises; uses async functions and await keyword for cleaner code. async/await

Readability	
Can become harder to read with complex chains ("callback hell"-like).	
Easier to read and write, resembling synchronous code.

Error Handling	
Errors are caught with .catch() or try...catch.	Errors are handled with try...catch directly,
 making it more intuitive.

Control Flow	
Requires chaining or nesting .then() to handle sequential or dependent async operations.	
Executes code sequentially, making it simpler to write logic for dependent async tasks.

Parallel Execution	
Promises can be used with Promise.all() for parallel execution of multiple tasks.	
await runs tasks sequentially unless explicitly managed with Promise.all() or similar constructs.

Debugging	
Slightly harder to debug due to chaining and asynchronous stack traces.	
Easier to debug since stack traces often appear more like synchronous code.
 */

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("done"), 1000)
    })
}

fetchData.then((data)=> {
    console.log('response found', data)
}).then((processded)=> {
    console.log(processded)
}).catch((e)=> console.log('error found', e));

async function fetchresponse(){

  try{
    const data = await fetchData();
    console.log(data);
    const processded = "processing";
    console.log(processded);
  }catch(err){
    console.log(err)
  }

}

/**
 * What is the purpose of use strict in JavaScript?
 * The "use strict" directive in JavaScript is a way to enable strict mode, which imposes a stricter set of rules 
 * on the code to help identify potential bugs, improve performance, and make the code easier to debug. It was 
 * introduced in ECMAScript 5 (ES5) and is applied by adding "use strict"; at the beginning of a script or a function
 */
//Eliminates Silent Errors
"use strict";
x = 10; // ReferenceError: x is not defined

//Prevents Use of Undeclared Variables
"use strict";
someVariable = 10; // ReferenceError: someVariable is not defined

//Disallows Duplicate Parameter Names
"use strict";
function sum(a, a) { // SyntaxError: Duplicate parameter name not allowed
    return a + a;
}
//Restricts this in Functions
//In strict mode, the value of this in a function is undefined instead of defaulting to the global object (window or global).

javascript

"use strict";
function test() {
    console.log(this); // undefined
}
test();

//Disallows Deleting Variables or Properties
"use strict";
var obj = {};
delete obj; // SyntaxError: Delete of an unqualified identifier in strict mode

//Prohibits Octal Literals
"use strict";
var num = 0123; // SyntaxError: Octal literals are not allowed in strict mode

//Enhances Security
"use strict";
Object.preventExtensions(obj);
obj.newProp = "value"; // TypeError: Cannot add property to non-extensible object

//if "use strict" is applied at top it will applied for the whole script but if used inside function it will only applied for function
//in ES6 "use strict " id by default enabled

//how we can fix the starvation issue of callback queue when microtask queue having so many functions
/**
 * 
Starvation of the callback queue occurs when the microtask queue continuously receives tasks, preventing the event loop from reaching the 
callback queue. This happens because microtasks (like Promise callbacks and MutationObserver tasks) have higher priority in the event loop and 
are processed before the callback queue (e.g., setTimeout or setInterval callbacks).

Use setTimeout or setImmediate in Microtasks

 */
function processMicrotasks() {
    for (let i = 0; i < 1000; i++) {
        Promise.resolve().then(() => {
            console.log("Microtask", i);
        });
    }

    // Yield to the callback queue
    setTimeout(() => {
        console.log("Allowing callback queue tasks to run...");
    }, 0);
}

processMicrotasks();


/**
 * What are the main differences between functional components and class components in React?
Explain the purpose of React hooks. How do useState and useEffect work?
How would you optimize a React application for performance?
What is React Context, and when would you use it over Redux or other state management tools?
Can you explain how reconciliation works in React?
What are React error boundaries, and how would you use them?
 */


React Diffing Algorithm
React uses two main strategies for reconciliation:

Tree Diffing:

React compares two trees (old virtual DOM vs. new virtual DOM).
If the root nodes of two trees differ, React replaces the entire tree.
Component Diffing:

For components of the same type, React updates the props and state while keeping the existing DOM structure.
For different component types, React unmounts the old component and mounts the new one.
Element Diffing:

React compares child nodes within the same parent.
If keys are used, React matches elements more efficiently, avoiding unnecessary removals or insertions.