# What is React?
  React is a JavaScript library for building interactive user interfaces.
  By user interfaces, we mean the elements that users see and interact with on-screen.

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

   React.memo() is a higher-order component that takes a React component as its first argument and returns a pure React component.
   React component type returned using React.memo() allows the renderer to render the component while memoizing the output.
   React.memo() also works with components w using ReactDOMServer.

# HOC
   higher-order component is a function that takes a component and returns a new component.
   Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
   A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
A. when to use 
   Authentication:  writting authentication logic in every component we can have a login hoc which checks user is looged in or not
   Logging: instead of writting logging logic in each component we can have withLogger HOC so that every component will use and provide a consistent logging through out the app
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

# React.lazy() https://react.dev/reference/react/lazy
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

# Memo
A. 

# What is the use of key atrribute?
A. A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. Keys are used to give an identity to the elements in the lists

# How to prevent re-rendering in react?
A. memo, useMemo, useCallback, useRef, Pure Component(class)

# JWT
A. JWT is a token based stateless authentication mechanism.  Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.

# Synthetic Event
A. Synthetic evenets are React way of handling dom events consistentely across the browsers and platforms
 React Event system wraps native browsers event with a cross browser compatible interface and provide a unified way of handling events in react
 synthetic events in React offer a performance-oriented and consistent way to handle events while abstracting away browser differences, resulting in a 
 smoother and more predictable development experience.
 * benefits of sythentic events
   Performance: React uses a single event listener at the root of the document (event delegation), which means fewer event listeners are attached to 
   individual elements. This optimizes performance by reducing memory usage and improving event handling efficiency.
   Cross-Browser Compatibility: Synthetic events abstract away browser-specific event handling differences, ensuring consistent behavior across various 
   browsers. Developers don't need to worry about writing browser-specific code for event handling.
   Event Pooling: React uses an event pooling mechanism where event objects are reused to reduce memory consumption. This minimizes the overhead of  creating and garbage collecting numerous event objects during high-frequency events.
   Normalized Properties: Synthetic events provide normalized properties across different browsers. This ensures that you have a consistent set of 
   properties and methods available regardless of the browser being used.
   Automatic Cleanup: React automatically handles event listeners' cleanup and unbinding when a component is unmounted. This prevents memory leaks and 
   ensures proper resource management.
   Ease of Use: Developers can work with event handling in React using familiar HTML event attributes (e.g., onClick, onChange) instead of dealing with
   various browser-specific event registration methods.

   Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers. The application is consistent regardless of the browser it is running in.

   const Component = () => {
    const handleClick = (e) => {
    e.preventDefault(); // synthetic event
    console.log("link clicked");
    };
    return <a onClick={(e) => handleClick}>Click me</a>;
   };

Why use Flux architecture?
 Flux is a powerful architecture for managing state in ReactJS applications. By using a unidirectional data flow, centralized control, and immutable data, Flux helps keep your application's state management organized and maintainable.

 # What is Next.js
 Next.js is a popular open-source framework for building server-side rendered React applications. It was created by a software engineer at Zeit named Guillermo Rauch. He started working on the framework in 2016 and released the initial version later that year. Since then, Next.js has gained significant adoption and has been widely used by developers for building fast and scalable web applications. It provides features like automatic code splitting, server-side rendering, and static site generation, making it an excellent choice for building modern web applications.  

 SEE this to understand DOM  https://nextjs.org/learn/foundations/from-javascript-to-react

 # Ways to secure a React application
 A. Implement secure authentication
    *storing the user info in local storage or session storage is not recommended
    use Firebase, OAuth, JWT tokens
   * When implementing authentication, make sure to:
      Use HTTPS for all communication between your app and your server
      Store sensitive data like passwords, tokens, or keys securely using encryption or hashing
      Validate user input and sanitize output to prevent XSS (cross-site scripting) attacks
      Implement CSRF (cross-site request forgery) protection using tokens or headers
      Use secure cookies with HTTP-only and secure flags
      Use session timeouts and logout functionality
    *Make sure that the HTML code is resilient
      Any React application will need HTML to render it, so it's imperative to make sure that your HTML code is not vulnerable to injection attacks or malicious scripts. To do this, you should:
      Use JSX syntax instead of raw HTML strings, as JSX automatically escapes any potentially dangerous characters
      Avoid using dangerouslySetInnerHTML prop unless absolutely necessary, as it bypasses JSX escaping and renders raw HTML
      If you need to use dangerouslySetInnerHTML, sanitize the HTML content using libraries like DOMPurify or sanitize-html
      Use CSP (content security policy) headers to restrict what sources can load scripts, stylesheets, images, etc.

   *Use Non-vulnerable versions of react and other library use safe library
   * use linter plugin and code analysis tool in your app like
     ESLint, a JavaScript linter that can enforce coding standards and best practices
     eslint-plugin-security, an ESLint plugin that can identify security risks in your code
     SonarQube is a code quality tool that can perform static analysis and detect vulnerabilities, bugs, code smells, etc.

# JWT (JSON web tokens)
A. https://stackoverflow.com/questions/31687442/where-do-i-need-to-use-jwt
  JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object

  When to use JSON token
  Authorizatiom
  Information exchange

  JSON web Token Structure
  Header
  Payload
  Signature
  Ex. xxxxx.yyyyy.zzzzz

  Header
  contains two part
  type (wich is JWT) of the token and the signing algorithms which is used (HS256)

  {
    typ: "JWT",
    alg: "HS256"
  }
  Then, this JSON is Base64Url encoded to form the first part of the JWT. ex (base64EncodeUrl({ typ: "JWT", alg: "HS256"}))

  Payload
  typically the user data and additional data
  {
   "sub": "1234567890",
   "name": "John Doe",
   "admin": true
  }
  Then, this JSON is Base64Url encoded to form the first part of the JWT.

  Signature
  To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.
  Ex. HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret) // here we are using HMACSHA256 algo

  How JWT tokens works
  in authentication, whenevr a user logged in suucessfully and jwt token return from Auth server
  Authorization: Bearer <token> // we can send our token header in this way adding Bearer+token
  If the token is sent in the Authorization header, Cross-Origin Resource Sharing (CORS) won't be an issue as it doesn't use cookies.

   Application Client => Authorization server => Resorce server

  The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow.
  When the authorization is granted, the authorization server returns an access token to the application.
  The application uses the access token to access a protected resource (like an API).

  Why to use JWT - it is secure, small in size

# Static and dynamic routing React
A. 1. Static Routing:
Static routing, also known as client-side routing, involves defining and configuring routes in a static or declarative manner. This means that you specify your application's routes in advance, typically in a configuration file or a dedicated routing component. Static routes are determined at build time and do not depend on data fetched from an API or other external sources.

Advantages of Static Routing:

Predictable and easy to set up.
Fast navigation between routes, as all route information is available upfront.
Suitable for small to medium-sized applications with known routes.

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

2. Dynamic Routing:
Dynamic routing, also known as server-side routing or data-driven routing, involves defining routes based on data obtained from an external source, such as an API or a database. Routes are determined at runtime based on the fetched data, which can change over time.

Advantages of Dynamic Routing:

Ideal for applications with a large number of dynamic routes.
Routes can be created or modified dynamically based on data.
Well-suited for content-heavy websites, e-commerce platforms, and applications with user-generated content.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const routes = getRoutesFromAPI(); // Fetch routes from an API

  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
while passing route the below : explaining that this is dynamic route
  {
        path: "/restaurants/:resId",
        element: <RestraurantMenu/>
  }

# Dynamic Content:

Dynamic content in React refers to elements or data in your application that can change or update in response to user interactions, server responses, or other events.
It typically includes components that render data from a database, API, or user input.
Dynamic content is often managed through React state or props, and it can be updated based on user actions, network requests, or timers.

function DynamicCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

# Static Content:

Static content in React refers to elements or data that remain constant and do not change during the application's runtime.
It includes components and elements that provide consistent information, layout, or structure.
Static content is often used for headings, labels, images, and other parts of the UI that don't need to be updated based on user interactions or external data.
function StaticHeader() {
  return (
    <header>
      <h1>Welcome to My Website</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

Promise.all([api(), api2(), api3()]).then(function(result) {
    //do work. result is an array contains the values of the three fulfilled promises.
}).catch(function(error) {
    //handle the error. At least one of the promises rejected.
});


# Optimizing the performance of a React app is crucial for delivering a fast and responsive user experience. Here are several ways to optimize the performance of your React application:

Use the Production Build: When deploying your React app, make sure to use the production build. This build includes optimizations like minification, dead code elimination, and smaller bundle sizes. You can create a production build using the npm run build or yarn build command.

Code Splitting: Implement code splitting to split your application into smaller bundles, loading only the necessary code for each route or component. Tools like React Router and Webpack's dynamic imports can help with this.

Lazy Loading: Lazy load components or resources that are not needed immediately, such as images below the fold or secondary routes. React's React.lazy() and Suspense features can help with lazy loading components.

Bundle Analysis: Use tools like Webpack Bundle Analyzer to analyze your bundle size and identify large dependencies or unnecessary code. This can help you make informed decisions about what to include or exclude from your bundle.

Optimize Images: Compress and optimize images to reduce their size. You can use tools like ImageOptim or ImageMagick for image optimization. Consider using responsive images with the srcset attribute.

Minimize Render Cycles: Reduce the number of renders by using PureComponent, React.memo(), or implementing your own shouldComponentUpdate for class components. Avoid unnecessary re-renders by managing component state efficiently.

Memoization: Use the useMemo() and useCallback() hooks to memoize expensive calculations and prevent unnecessary re-computation.

Virtualization: Implement virtualization for long lists or tables using libraries like react-virtualized or react-window. This renders only the items that are currently visible on the screen, improving rendering performance.

Server-Side Rendering (SSR): Consider server-side rendering using Next.js or other frameworks. SSR can improve initial load times and SEO by rendering the initial HTML on the server.

Service Workers and Caching: Implement service workers to enable caching of assets and enable offline functionality. Tools like Workbox simplify service worker implementation.

Debounce and Throttle: Use debounce and throttle techniques to limit the frequency of expensive operations like event handlers or API requests.

Tree Shaking: Ensure that your bundler is configured to perform tree shaking, removing dead code and unused dependencies from the final bundle.

Reduce DOM Manipulations: Minimize direct DOM manipulation. Instead, use React to manage updates and changes to the DOM. Avoid excessive or unnecessary setState calls.

Use PureComponent: If you're using class components, consider using PureComponent for components that don't have their own state or side effects. This helps prevent unnecessary re-renders.

Avoid Inline Functions: Minimize the use of inline functions in render methods, especially in the render() function. Inline functions can cause unnecessary re-renders.

Profiling: Use the built-in React DevTools Profiler to identify performance bottlenecks and problematic components. Optimize the components that consume the most resources.

SSG (Static Site Generation): For content-heavy websites, consider using Static Site Generation (SSG) to pre-render pages at build time. Frameworks like Next.js provide SSG capabilities.

Use Memoization Libraries: Utilize memoization libraries like Reselect or re-reselect to optimize the calculation of derived data in your application.

Optimize API Requests: Minimize the number of API requests by batching requests, caching responses, and using efficient data fetching strategies such as GraphQL.

Testing and Profiling: Regularly test your application's performance and use profiling tools to identify and address bottlenecks.






