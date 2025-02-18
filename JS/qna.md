

In React, the `useLayoutEffect` hook is used when you need to perform side effects that must **synchronously** occur before the browser repaints the screen. It is similar to `useEffect`, but it runs **synchronously after all DOM mutations** and before the browser paints the screen, ensuring that any DOM updates made in the effect are visible to the user immediately.

---

### **Key Reasons to Use `useLayoutEffect`**

1. **DOM Measurement:**
   - When you need to measure the DOM (e.g., element size, position) before the browser repaints.
   - Ensures you get accurate values because it runs before the browser updates the layout.
   - Example:
     ```javascript
     import { useLayoutEffect, useRef, useState } from 'react';

     function Component() {
         const ref = useRef();
         const [width, setWidth] = useState(0);

         useLayoutEffect(() => {
             setWidth(ref.current.offsetWidth);
         }, []);

         return <div ref={ref}>Width: {width}px</div>;
     }
     ```

2. **Avoiding Visual Glitches:**
   - When updating the DOM or performing a calculation that must happen immediately to prevent flickers or layout shifts.
   - Example: Adjusting scroll position or applying styles based on measurements.

3. **Synchronizing with DOM Changes:**
   - When you need to manipulate the DOM directly after React has made its updates but before the user sees it.
   - Example: Updating a scrollbar position or animating an element after its dimensions change.

---

### **Difference Between `useEffect` and `useLayoutEffect`**

| Feature                  | `useEffect`                        | `useLayoutEffect`                  |
|--------------------------|------------------------------------|-------------------------------------|
| **Timing**               | Runs after the browser repaints.   | Runs before the browser repaints.  |
| **Use Case**             | Non-urgent side effects, like data fetching or logging. | DOM-related updates that need to happen before the screen updates. |
| **Performance Impact**   | Non-blocking, allows browser to repaint first. | Blocking, delays browser repaint until it completes. |

---

### **When Should You Avoid `useLayoutEffect`?**

- **Performance Considerations:** Since it blocks the browser from painting, overusing it can lead to performance bottlenecks.
- **Non-DOM-Related Logic:** For tasks like fetching data or updating state that don’t involve the DOM, prefer `useEffect`.

---

### **When to Use `useLayoutEffect`:**
- Measuring DOM dimensions or layout.
- Fixing visual glitches caused by asynchronous updates.
- Synchronizing animations with DOM changes.

Use `useLayoutEffect` sparingly and only when necessary, as it can impact rendering performance if misused.

/**
 * How do promises differ from async/await? Which would you use in a given scenario?
 * Promises and async/await are both used to handle asynchronous operations in JavaScript.
Syntax	
Uses 
.then() and .catch() for chaining callbacks. promises	
Syntactic sugar over promises; 
uses async functions and await keyword for cleaner code. async/await

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
Starvation of the callback queue occurs when the microtask queue continuously receives tasks, preventing the event loop from reaching the callback queue. This happens because microtasks (like Promise callbacks and MutationObserver tasks) have higher priority in the event loop and 
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


## React Diffing Algorithm
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


## What are the advantages of using TypeScript in a frontend application?
## Explain the difference between interfaces and types in TypeScript.
## How would you handle errors in a Node.js application?
## What are streams in Node.js, and how do they work?
## Describe how to set up a REST API using Node.js. How would you integrate it with a React frontend?

## How do you ensure your application is responsive and accessible?
## What is the difference between inline, internal, and external CSS? Which one would you use and why?
## Can you explain CSS specificity? How does it affect how styles are applied?
## What are CSS-in-JS solutions, and what are their benefits in a React application?

## How would you design a SaaS-based event management platform from a frontend perspective?
## How do you handle scaling a frontend application when new features are continuously added?
## What strategies would you use to manage global state in a complex application?
## How would you design a feature for real-time updates, such as notifications or chat?

## Have you worked with Next.js? If yes, what challenges have you faced, and how did you overcome them?
## What is server-side rendering (SSR), and how does it differ from client-side rendering (CSR)? How does Next.js implement SSR?
## How would you deploy a React application on AWS? Walk through the process.
## Have you used AWS services like Lambda, S3, or DynamoDB? If yes, how did you integrate them into a frontend or full-stack application?


## What is your approach to debugging a production issue in a React application?
## How would you write unit tests for a React component? Which tools would you use?
## Explain the difference between unit, integration, and end-to-end testing. How do you prioritize these?

## How do you encourage collaboration and communication within your team?
## What strategies do you use to break down complex tasks and distribute them across the team?
## How do you ensure code quality and consistency in a team environment?

## ways to create a object in js
Object Literal	Quick and simple object creation.
Object Constructor	Rarely used, but useful for dynamic property addition.
Object.create()	For creating objects with a specific prototype.
Constructor Function	For object templates in older codebases.
Class Syntax	For reusable and modern templates.
Object.assign()	Merging or cloning objects.
Factory Function	For creating objects without new.
JSON.parse()	For creating objects from JSON.
Spread Syntax	For cloning or merging objects in ES6+.
Object.fromEntries()	Converting key-value pairs to objects.
Prototype-Based Approach	Custom inheritance patterns.

## Class Lifecycle Method	React Hook Equivalent
componentDidMount	useEffect(() => {}, [])
componentDidUpdate	useEffect(() => {}, [dependencies])
componentWillUnmount	Cleanup function in useEffect with an empty dependency array and a return function
shouldComponentUpdate	React.memo or custom logic for selective rendering
getDerivedStateFromProps	useEffect to sync state with props
componentDidCatch	Still requires a class component or error-handling library



Core JavaScript

Closures: Implement a createCounter function using closures.

Memoization: Write a memoize function to cache expensive function results.

Polyfills: Implement polyfills for:

Array.prototype.map

Array.prototype.reduce

Function.prototype.bind


Asynchronous Programming: Write a fetchWithRetry function to retry failed API calls.

PromiseAll: Implement a promiseAll function like Promise.all.

Debounce: Create a debounce function to optimize input-heavy UI elements.

Event Loop: Simulate the output of a scenario involving JavaScript’s event loop.





Objects

Deep Cloning: Write a function to deeply clone a nested object.

Flattening Objects: Convert a deeply nested object into a single-level object.

Frequency Count: Count the frequency of elements in an array or characters in a string.





Arrays

Array Rotation: Rotate an array by k positions.

Max Subarray Sum: Use Kadane’s Algorithm to find the maximum sum of a subarray.

Two-Pointer Technique: Find pairs in an array that sum to a target value.

Sort 0s, 1s, 2s: Sort an array of 0s, 1s, and 2s in place without extra space.

Sliding Window: Find the longest substring without repeating characters.

Max Subarray Sum (k): Find the maximum sum of a subarray of size k.





Strings

Anagram Check: Verify if two strings are anagrams of each other.

First Non-Repeating Character: Find the first non-repeating character in a string.

Longest Palindromic Substring: Identify the longest palindromic substring.

Rearranged Palindrome: Determine if a string can be rearranged into a palindrome.





Practical Applications

Pagination: Write a function to paginate an array based on page number and size.

Debouncing: Implement a debounce function for search inputs.

Throttling: Implement a throttle function to limit API calls.




Miscellaneous

DOM Serialization: Serialize and deserialize a DOM tree structure.

Event Delegation: Manage clicks on dynamically added elements using event delegation.

LRU Cache: Implement an LRU Cache using a Map in JavaScript.

Custom Promise: Build a custom Promise class with then, catch, and resolve methods.

Module Bundler: Write a dependency graph resolver for JavaScript modules.