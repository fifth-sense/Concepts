
1. What is React?
2. What is useMemo ?
3. What are the features of React ?
4. What is JSX ?
5. What is DOM ?
6. What is Virtual Dom ?
7. What is component life cycle of React class component ?
8. What are fragments in react ?
9. What are props in react ?
10. What are synthetic events in react ?
11. What are the difference between Package.json and Package.lock.json ?
12. What are the differences between client side and server side rendering ?
13. What is state in Reactjs?
14. What are props ?
15. What are the differences between State and Props in react ?
16. What is props drilling ?
17. What are the disadvantages of props drilling and How we can avoid props drilling ?
18. What are Pure components in React ?
19. What are Ref’s in React?
20. What is meant by forward ref ?
21. What are Error boundaries ?
22. What are Higher order components in react ?
23. What are the differences between controlled and uncontrolled components ? 
24. What is useCallback ?
25. What are the differences between useMemo and useCallback ?
26. What are keys in React ?
27. What is Lazy loading in React ?
28. What is suspense in React ?
29. What are custom hooks ?
30. What is useReducer hook ?
31. What are Portals in react ?
32. What is context in react ?
33. Practical question: Give an example of context api usage ?
34. What is the purpose of callback function as an argument of setState()?
35. Practical question: create a custom hook for increment/decrement counter ?
36. Which lifecycle hooks in class component are replaced with useEffect in functional components ?
37. What is Strict mode in react ?
38. What are the different ways to pass data from child component to parent component in react ?
39. Practical question: How to send data from child to parent using callback functions ?
40. Practical question: How to send the data from child component to parent using useRef ?
41. How do you optimize your react application ?
42. How would you consume a RESTful JSON API in reactjs?
43. different design patterns used in react?
44. context api vs redux
45. prop types in react(How to apply validation on props in react)
46. What are React Mixins ?
47. what are the different hooks you have used ?
48. What are render props in react ?
49. What are the different types of exports and imports ?
50. What are the differences between create element vs clone element in react
51. When to use useState and useReducer
52. What is flushSync in react
53. What are protected routes in react
54. What is react-router

- let vs. const vs. var
- Currying, partial application
- How ‘this’ value is determined
- Callbacks, Promises, Async/Await
- Event Loop & Concurrency Model
- ES7, ES8, and beyond: JS’s new features
- JS Design Patterns: Writing efficient code
- Prototypes: Concept and relation to Objects
- DOM manipulation, event handling: Vanilla JS
- Array, string manipulation: Common techniques
- Arrow functions, Template literals, Destructuring
- Higher-order Functions in functional programming
- JS bundlers: Role in optimizing code for production
- Hoisting: Impact on variable and function declarations
- Throttling, Debouncing: Controlling function execution rate
- Unit testing: Popular frameworks like Jest or Mocha
- Web APIs: Importance and working with them in JS
- Data structures: Linked lists, stacks, queues in JS
- Caching, Memoization: Performance Techniques
- Security best practices: XSS, CSRF protection
- ES modules: Role in modern JS development
- Functional vs. Class Components in React
- == vs. ===: JavaScript value comparison
- Prototypal vs. Classical Inheritance
- Practical applications of Closures
- Error handling: try...catch blocks
- Scope chain, Lexical Scoping
- map, filter, reduce, forEach

Interviewer: How you optimize the performance of a Web Application ?

This question is asked in each and every frontend developer interview and many times we fail to answer this, Learn this to don't fail again for it.

1. Implement server-side rendering (SSR) – This can significantly improve the initial load time of your pages.
https://lnkd.in/dsZQqnQm

2. Lazy load non-critical resources – Only load what's needed initially, and defer the rest until required. Images can also be loaded on-demand.
https://lnkd.in/dzyK8CYh

3. Use a CDN – Serving static assets from geographically distributed servers can greatly reduce load times.
https://lnkd.in/dZ7hga2M

4. Compress and optimize images – Reducing image file sizes without compromising quality can help cut down on page load time.
https://lnkd.in/dkFd_cNi

5. Minimize HTTP requests – Bundling and minifying your CSS and JavaScript can help reduce the number of requests and improve loading speed.
https://lnkd.in/dk9kn2xK

6. Optimize database queries – Proper indexing and querying techniques are crucial when working with large datasets.
https://lnkd.in/dWfZSq_T.

7. Use caching techniques – Both browser caching and server-side caching can reduce server load and speed up response times.
https://lnkd.in/dSeagJgH

8. Paginate or use infinite scrolling for large datasets – Instead of loading everything at once, fetch data in smaller chunks.
https://lnkd.in/dRPn2DYh

9. Prioritize asynchronous operations – Minimize blocking JavaScript and keep operations asynchronous to prevent delays.
https://lnkd.in/dcjKnrn2

These are just a few strategies that I’m considering, and I would love to hear your thoughts! 

1. Hoisting
2. Closure
3. Promise
4. Function currying 
5. Execution context
6. Call, apply, Bind
7. Polyfills for most common array and string methods. 

React
1. Reconciliation 
2. Hooks 
3. Class v/s functional components
4. Memoization 
5. HOC
6. Performance
7. Reac Router
8. Caching
9. Security 
10. Improving perfomance 
11. Memory leaks



Top 20 Most Common React Frontend Interview Questions (2025 Edition)
1. How do you send data from a parent component to a child component?
2. How do you call a parent component method from a child component?
3. How do you access a DOM element in React?
4. How to conditionally render elements or text in React?
5 .How to change styles based on a condition?
6. How to show and hide data conditionally?
7. How to implement debouncing in React?
8. How to fetch data from an API and display it in a component?
9. How to re-render a component on value change?
10. How to call a method immediately after state updates or a component rerenders?
11. How to force a component to rerender without using useState?
12. Explain an example of optimization using useMemo.
13. Explain an example of optimization using useCallbac.
14. Which lifecycle methods in class components are replaced by useEffect in  functional components?
15. How to share data between components using Context API?
16. How do you create a custom hook in React?
17. How do you create a lazy-loaded component?
18. How do you build a pagination component?
19. How do you safeguard your React application?
20. What’s the difference between a controlled and uncontrolled component, and how do you implement them?
 My biggest takeaway: Most interviewers don’t just want textbook answers — they want to see how you’d apply these concepts in real-world scenarios.
 So don’t just read these — practice building small components around each.