# Pure Component in React
A. Pure component are those component which will not render itself if props or state are updated with same value. they play major role in app
   overall performance. because its reduces unneccessary re-render.
   benefits of pure comp
   remove unnecessary re-rendering
   handle shouldComponentUpdate() implicitly
   increase performnace
   shallow comparision of state and props
   Functional components do not enjoy the benefits of pure components which extends PureComponent class. b/c its not a class we can achieve similar functionality using memo in functional component
   Pure component in React are like pure functions and they return the same JSX for the same input given to them.

# HOC
   higher-order component is a function that takes a component and returns a new component.
   Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
   A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
A. when to use 
   Authentication:  writting authentication logic in every component we can have a login hoc which checks user is looged in or not
   Logging: instead of writting logging logic in each cmponent we can have withLogger HOC so that every component will use and provide a consistent logging through out the app
   Styling and theme: You might have a design system with reusable styles and themes. You can create an HOC named withTheme that provides the necessary theme-related props to a component.
   https://www.freecodecamp.org/news/higher-order-components-in-react/

   Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.
   Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.
   Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.
   Composition: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.
   Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.

# What is Vurtual DOM
A. A virtual dom is the lightweight copy of the original dom. Real Dom is the tree based representation of Html element. In React JS, every DOM element has a corresponding Virtual DOM Object.- the only difference is  that in DOM object where we can directly change what is on the screen, we cannot do that for the virtual DOM.
React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document
A. https://www.geeksforgeeks.org/reactjs-virtual-dom/

Q. Controlled and uncontrolled component
A. controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
In React, an <input type="file" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically.


# Bundling
A. Bundling is the process of following imported files and merging them into a single file: a bundle.
   this bundle  can then be included on a webpage to load an entire app at once
   Webpack, browserify, Rollup are some bundles that can be used in react

   // app.js
   import { add } from './math.js';
   console.log(add(16, 26)); // 42
   // math.js
   export function add(a, b) {
    return a + b;
   }  
  Bundle: 
  function add(a, b) {
  return a + b;
  }
  console.log(add(16, 26)); // 42

# Code Splitting
A. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can 
   be dynamically loaded at runtime.
   Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. 
   The best way to include code splitting into your app is using dynamic import

   Static import ** 
   import {add } from 'math.js'
   console.log(add(16,23)) // 39

   Dynamic import***
   import ("./math.js").then(math => {
    console.log(math.add(2,4)) //6
   })  

   when webpack come across this dynamic syntax it will automatically start code splitting 

   * when using Babel you need to make sure that it is able to parse this dynamic import syntax if not then we add plugin @babel/plugin-syntax-dynamic-import

# React.lazy()
A. The React.lazy function lets you render a dynamic import as a regular component.
   Before:
   import {otherComp} from './OtherComp'
   after
   const otherComp = React.lazy(()=>(import ('./OtherComp)))
   React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.

   The lazy component should be then rendered inside Suspense Component which allow us to show some fallback content(such as loading container) while we are waiting for the lazy load of the component
    Example
    import React, {Suspense } from 'react';

    const OtherComponent = React.lazy(()=> import ('./OtherComponent'))

    const MyComponent = () =>{
        return(
            <Suspense fallback={<div>Loading...</div>}>
              <OtherComponent/>
            </Suspense>
        )
    }

    The fallback prop accepts any React elements that you want to render while waiting for the component to load.
    You can place the Suspense component anywhere above the lazy component. 
    You can even wrap multiple lazy components with a single Suspense component.

    import React, { Suspense } from 'react';

    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

    function MyComponent() {
    return (
     <div>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <OtherComponent />
            <AnotherComponent />
          </section>
        </Suspense>
      </div>
    );
   }

# Error Boundaries
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI
instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
Error boundaries do not catch errors for:

Event handlers (learn more)
Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
Server side rendering
Errors thrown in the error boundary itself (rather than its children)

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or 
componentDidCatch(). Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.
As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.
Adding error boundaries lets you provide better user experience when something goes wrong.
A.  import React, { Suspense } from 'react';

   const OtherComponent = React.lazy(() => import('./OtherComponent'));
   const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

   const ErrorBoundary = ({children} ) => {
    const [hasError, setHasError] = useState(false);
    useEffect(()=>{
        //this handle method get called whenever there is an error in children
        const handleError = (error) =>{
            console.log("Error caught by ErrorBoundary", error)
            setHasError(true);
        }
        window.addEventListener('error', handleError);
        //we are unmounting or cleaniup the event listner here
        return() =>{window.removeEventListener('error', handleError)}
    }, [])
    if(hasError){
        return <div>Something went wrong! please try after sometime</div>
    }
    return children;

}

<!-- const MyComponent = () => {
    const throwError = () => {
        throw new Error("An error occurred!")
    }
    return(
        <ErrorBoundary>
            <div>My Component</div>
            <button onClick={throwError}>Trigger error</button>
        </ErrorBoundary>
    )
} -->

   const MyComponent = () => (
    <div>
        <ErrorBoundary>
           <Suspense fallback={ <div> Loading...</div>}>
             <section>
              <OtherComponent />
              <AnotherComponent />
             </section>
           </Suspense>
        </ErrorBoundary>
     </div>
    );

# Route Based Code splitting
A. where to use code splitting is a tricky to find where to apply in app. best place to that in our Route
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);

React.lazy currently only supports default exports. for named import we can create a intermediate file which will import the named import as defualt

# Context API
A. Using context, we can avoid passing props through intermediate elements:

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');
Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.

# Forward Ref
A. Ref forwarding is a technique for automatically passing a ref through a component to one of its children.

   const FancyButton = React.forwardRef((props, ref) => (
     <button ref={ref} className="FancyButton">
       {props.children}
     </button>
    ));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

# React Fragments
A. A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
   render() {
    return (
     <React.Fragment> //<> sort syntax
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>//</> sort syntax
  );
}

Tree shaking is a term used to describe the process of removing unused exports from a module. This is typically done during the bundling process, using a tool such as Webpack or Rollup.

Minification, also known as minimization, is the process of removing all unnecessary characters from JavaScript source code without altering its functionality. This includes the removal of whitespace, comments, and semicolons, along with the use of shorter variable names and functions.

 # Prop drilling
 A. Its a situation in react where passing data to last children we have to pass data to all children. even they don't reqire it. Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.

   Parent->childA->ChildB->ChildC
The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last.
To remove this we can use Redux, context, and other state management library
A better alternative to this is using useContext hook. The useContext hook is based on Context API and works on the mechanism of Provider and Consumer. Provider needs to wrap components inside Provider Components in which data have to be consumed. Then in those components, using the useContext hook that data needs to be consumed.

# How to Pass Data from child component to Parent component
A. In the parent component, create a callback function. This callback function will retrieve the data from the child component.
   Pass the callback function to the child as a props from the parent component.
   The child component calls the parent callback function using props and passes the data to the parent component.

   

