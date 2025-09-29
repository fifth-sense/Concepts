# What is Redux
A. Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application. Redux helps you manage "global" state
# Fux Architecture
Flux is an architectural pattern proposed by Facebook for building SPAs. It suggests to split the application into the following parts:
Stores
Dispatcher
Views
Action / Action Creators

Stores manage state. They change state only by listening for actions. Stores notify views to update.
Views render the user interface and handle user interaction. Container views listen for store changes.
The dispatcher broadcasts actions to all registered stores.
Actions are plain objects.

# Redux is most useful in cases when:
You have large amounts of application state that are needed in many places in the app
The app state is updated frequently
The logic to update that state may be complex
The app has a medium or large-sized codebase, and might be worked on by many people
You need to see how that state is being updated over time


# Redux
Redux is a library for managing global application state
Redux is typically used with the React-Redux library for integrating Redux and React together
Redux Toolkit is the recommended way to write Redux logic
Redux uses a "one-way data flow" app structure
State describes the condition of the app at a point in time, and UI renders based on that state
When something happens in the app:
The UI dispatches an action
The store runs the reducers, and the state is updated based on what occurred
The store notifies the UI that the state has changed
The UI re-renders based on the new state
Redux uses several types of code
Actions are plain objects with a type field, and describe "what happened" in the app
Reducers are functions that calculate a new state value based on previous state + an action
A Redux store runs the root reducer whenever an action is dispatched

pros
predictable state change
centralize store
Easy debugging
Preserve page state
undo/redo

cons
complexity



In Redux, our reducers are never allowed to mutate the original / current state values!

// ❌ Illegal - by default, this will mutate the state!
state.value = 123
Reducers can only make copies of the original values, and then they can mutate the copies.
// ✅ This is safe, because we made a copy
return {
  ...state,
  value: 123
}

# combineReducers
combineReducers accepts an object where the key names will become the keys in your root state object, and the values are the slice reducer functions that know how to update those slices of the Redux state.

# SUMMARY
Redux apps use plain JS objects, arrays, and primitives as the state values
The root state value should be a plain JS object
The state should contain the smallest amount of data needed to make the app work
Classes, Promises, functions, and other non-plain values should not go in the Redux state
Reducers must not create random values like Math.random() or Date.now()
It's okay to have other state values that are not in the Redux store (like local component state) side-by side with Redux
Actions are plain objects with a type field that describe what happened
The type field should be a readable string, and is usually written as 'feature/eventName'
Actions may contain other values, which are typically stored in the action.payload field
Actions should have the smallest amount of data needed to describe what happened
Reducers are functions that look like (state, action) => newState
Reducers must always follow special rules:
Only calculate the new state based on the state and action arguments
Never mutate the existing state - always return a copy
No "side effects" like AJAX calls or async logic
Reducers should be split up to make them easier to read
Reducers are usually split based on top-level state keys or "slices" of state
Reducers are usually written in "slice" files, organized into "feature" folders
Reducers can be combined together with the Redux combineReducers function
The key names given to combineReducers define the top-level state object keys

# Middleware
Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. used in logging, talking to asynchronous API, routing, crash reporting
Unlike a reducer, middleware can have side effects inside, including timeouts and other async logic.

Use Cases
A middleware can do anything it wants when it sees a dispatched action:
Log something to the console
Set timeouts
Make asynchronous API calls
Modify the action
Pause the action or even stop it entirely

 middleware are intended to contain logic with side effects. In addition, middleware can modify dispatch to accept things that are not plain action objects.

 Actions are plain JavaScript objects that have a type

 Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.

 # Flow of Redux
 -> in initial setup redux create a store with root reducer, the store calls the reducer with initial state and action, after any update like user click on something, 
    The  app code dispatches an action to the Redux store, like dispatch({type: 'counter/incremented'}). then the store run the reducer function with previous state and current action and return the new state, the stores notify all part of the ui that state has updated, the component got the updated state and re-renders with the updated states
 # Can we have multiple reducers in app - yes how and explain wha happens in background
 A. yes, we can have multiple reducers but while creating the action we can only pass one reducer which is root reducers so we can have multiple reducers and then we can combine all the reducers with utility function provided by redux which is CombineReducers({todos: todoReducer}) have them inside our rootreducer and then that root reducer we can pass to store.
 import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer
why we have multiple reducers because its improve the redability and code can be seprated on the basis of features
combineReducers accepts an object where the key names will become the keys in your root state object, and the values are the slice reducer functions that know how to update those slices of the Redux state.

Remember, the key names you give to combineReducers decides what the key names of your state object will be!

 # can we have multiple store? - 
 yes we can because in flux architecture we can have multiple stores for different data domain. but it can inroduce some issue like waiting for one store to update then updating the other one and this is not necessary because we are receiving that while splitting single reducer in multiple one.
 As with several other questions, it is possible to create multiple distinct Redux stores in a page, but the intended pattern is to have only a single store. Having a single store enables using the Redux DevTools, makes persisting and rehydrating data simpler, and simplifies the subscription logic.
 *its reliable, *its fast, *its debugging friendly
 https://stackoverflow.com/questions/33619775/redux-multiple-stores-why-not
 # what is reducer in redux, store and action - see above

 # why reducer is a pure function
 Deterministic behavior: Pure functions always produce the same output for the same input. This property ensures that given a specific state and action, a reducer will always return the same new state. Deterministic behavior is crucial for predictability and debugging, as it eliminates unexpected side effects.

Immutability: Reducers are expected to return a new state object rather than modifying the existing state in place. This immutability is essential for tracking changes and enables time-travel debugging, where you can easily inspect the state at any point in time by storing each state change.

Testability: Pure functions are easier to test because they don't rely on external factors or produce side effects. You can test a reducer by providing it with specific inputs (initial state and action) and verifying that it returns the expected output (new state).

Time-travel debugging: The predictability and immutability of pure reducers make it possible to implement time-travel debugging, a powerful debugging technique that allows developers to step back and forth through the application's state changes, making it easier to identify and fix issues.

Parallelization and memoization: Because pure functions have no side effects, they can be safely parallelized and memoized for performance optimization. This is particularly useful when dealing with complex state updates in large applications.

To summarize, reducers are required to be pure functions to ensure predictable and reliable state management in libraries like Redux. This purity enables better testability, debugging capabilities, and helps maintain the integrity of the application's state.

 # why state in immutable
 In Redux, state is typically treated as immutable for several important reasons:

1. Predictable Updates: When the state is immutable, it becomes predictable. Given a specific state and an action, you can reliably determine the new state. This predictability is crucial for debugging and understanding how changes to the state occur in response to actions.

2. Easy Tracking of Changes: Immutable state makes it easier to track changes over time. Instead of modifying the existing state object, Redux creates a new state object with the updated values whenever an action is dispatched. This allows for a historical record of state changes, which is essential for features like time-travel debugging.

3. Reference Comparison: Immutability simplifies change detection. With immutable data, you can compare references (memory addresses) to determine if two objects are the same. If the references are different, you know the objects have changed, which can be much more efficient than deep comparisons of object properties.

4. Avoiding Side Effects: Immutability helps avoid unintentional side effects in your application. When you modify an object in place, other parts of your code that hold references to that object may unexpectedly see those changes, leading to bugs that are difficult to track down. Immutable state ensures that changes to the state do not affect other parts of your code.

5. Performance Optimization: Some state management libraries, like Redux, take advantage of immutability for performance optimizations. For example, Redux can optimize state updates by reusing unchanged parts of the state tree, which can improve performance in large applications.

6. Easier Testing: Immutable state is easier to test. When your state is immutable, you can test reducers and other state-related functions more easily because you know that the function's behavior won't depend on hidden state mutations or side effects.

Overall, immutability is a fundamental concept in Redux because it simplifies state management, enhances predictability, and enables powerful debugging and optimization techniques. While it might require a different mindset compared to mutable state, the benefits it provides in terms of reliability and maintainability are significant, especially in complex applications.
 # what is middleware  what and why we are using it
 Middleware in Redux is a piece of software that sits between the action creators and the reducers in the Redux data flow. It intercepts actions before they reach the reducers and can perform various tasks like logging, making asynchronous API requests, modifying actions, or dispatching additional actions. Middleware is a crucial part of Redux because it allows you to add custom behavior and side effects to your application's state management process.

Here are some common reasons for using middleware in Redux:

1. **Logging**: Middleware can log actions and state changes, making it easier to debug and understand how your application's state evolves over time.

2. **Async Operations**: Middleware is often used to handle asynchronous operations, such as making API requests. Instead of dispatching a plain action, you can dispatch an action that triggers middleware to perform the async operation and dispatch another action when it's completed.

3. **Authentication**: Middleware can handle authentication-related tasks, like checking if a user is authenticated before allowing them to access certain parts of your application.

4. **Routing**: Middleware can integrate with routing libraries to update the application's route based on state changes.

5. **Caching**: You can use middleware to implement caching strategies, improving the performance of your application by storing previously fetched data.

6. **Batching Actions**: Middleware can be used to batch multiple actions into a single action, which can be useful for optimizing performance and reducing unnecessary re-renders in React applications.

7. **Error Handling**: Middleware can catch errors thrown during action processing and handle them in a consistent way.

8. **Analytics**: Middleware can send analytics data or telemetry about actions and state changes to external services.

Middleware in Redux is typically created as a series of functions that are composed together. Each middleware function can intercept actions, perform some logic, and optionally pass the action to the next middleware in the chain or stop the action from propagating further. Redux provides a built-in `applyMiddleware` function to apply middleware to your store.

For example, the `redux-thunk` middleware is commonly used for handling asynchronous actions. It allows action creators to return functions instead of plain action objects, enabling the dispatch of multiple actions during the async operation's lifecycle.

Middleware in Redux provides a flexible and extensible way to extend the behavior of your application's state management without cluttering your reducers or action creators with complex side effects, making your code more maintainable and testable.
 # Diff in thunk and saga
 `redux-thunk` and `redux-saga` are both middleware libraries for handling asynchronous actions in Redux, but they have different approaches and capabilities. Here are the key differences between them:

1. **Approach**:

   - **redux-thunk**: Redux Thunk is a simpler middleware that allows you to dispatch functions as actions. These functions can perform asynchronous operations and dispatch additional actions when the async operations are complete. Thunks are typically written as functions that return functions.

   - **redux-saga**: Redux Saga is a more powerful middleware that uses generator functions to manage asynchronous flow control. It provides a set of helper functions and abstractions to handle complex async scenarios, such as making API calls, handling race conditions, and managing long-running tasks.

2. **Complexity**:

   - **redux-thunk**: Thunks are relatively simple to use and understand, making them a good choice for simple async operations. They are especially suitable for cases where you want to encapsulate async logic within action creators.

   - **redux-saga**: Redux Saga is more complex but provides greater control and flexibility for handling complex async workflows. It can handle a wide range of async scenarios, including cancellation and retrying of requests, with ease.

3. **Testing**:

   - **redux-thunk**: Testing thunks is straightforward since they are simple functions. You can test them by mocking the store and checking if the expected actions are dispatched when the thunk is invoked.

   - **redux-saga**: Testing sagas can be more complex due to their generator nature. You typically need a testing library like `redux-saga-test-plan` to effectively test sagas. Testing sagas often involves simulating the saga's behavior step by step.

4. **Error Handling**:

   - **redux-thunk**: Error handling in thunks is typically done within the thunk function itself. You can catch errors and dispatch error-related actions from within the thunk.

   - **redux-saga**: Redux Saga provides built-in error handling mechanisms using try-catch blocks within sagas. This makes it easier to manage errors in complex async scenarios.

5. **Concurrency**:

   - **redux-thunk**: Thunks don't inherently provide sophisticated concurrency control. If you need to handle race conditions or complex concurrency scenarios, you might need to implement additional logic.

   - **redux-saga**: Redux Saga excels at handling complex concurrency scenarios. It offers features like `takeLatest`, `takeEvery`, and `race` to manage concurrent actions with ease.

6. **Learning Curve**:

   - **redux-thunk**: Thunks have a lower learning curve and are easier for developers new to Redux to grasp.

   - **redux-saga**: Redux Saga has a steeper learning curve due to its use of generators and the need to understand the concept of sagas, effects, and channels.

In summary, the choice between `redux-thunk` and `redux-saga` depends on the complexity of your application's async requirements. For simple async tasks, `redux-thunk` is often sufficient and easier to work with. However, if your application involves complex async workflows, race conditions, or long-running tasks, `redux-saga` offers more advanced capabilities and control over async operations.
 # How to connect react with redux
 see redux->counter.js
 # how to access store outside a react component
 // Outside a React component, e.g., in a separate module

import store from './store'; // Import your Redux store

// Access the current state
const currentState = store.getState();
console.log('Current State:', currentState);

// Dispatch an action
store.dispatch({ type: 'INCREMENT' });

// Check the updated state
const updatedState = store.getState();
console.log('Updated State:', updatedState);

 # how can we add multiple middleware in redux
 To add multiple middleware in Redux, you can use the `applyMiddleware` function provided by Redux. This function allows you to compose and apply multiple middleware functions to your Redux store. Here's how you can do it:

1. **Create Your Middleware Functions**:
   First, create the middleware functions that you want to use in your Redux application. Middleware functions are typically written as plain JavaScript functions and follow a specific pattern where they take the `store` and `next` function as arguments, returning a function that takes the `action` as an argument. They can perform tasks before and after the action is dispatched.

   ```javascript
   const middleware1 = (store) => (next) => (action) => {
     // Middleware logic for middleware1 before the action
     next(action); // Pass the action to the next middleware or reducer
     // Middleware logic for middleware1 after the action
   };

   const middleware2 = (store) => (next) => (action) => {
     // Middleware logic for middleware2 before the action
     next(action); // Pass the action to the next middleware or reducer
     // Middleware logic for middleware2 after the action
   };
   ```

2. **Apply Middleware in Your Redux Store**:
   In your Redux store configuration, use the `applyMiddleware` function to apply the middleware functions you've created. Import the `applyMiddleware` function from Redux and pass your middleware functions as arguments to it. You can also pass as many middleware functions as needed.

   ```javascript
   import { createStore, applyMiddleware } from 'redux';
   import rootReducer from './reducers'; // Your root reducer
   import middleware1 from './middleware/middleware1'; // Import your middleware functions
   import middleware2 from './middleware/middleware2';

   const store = createStore(
     rootReducer,
     applyMiddleware(middleware1, middleware2)
   );
   ```

   The `applyMiddleware` function returns an enhanced version of the `createStore` function that includes your middleware. This enhanced store will apply your middleware logic when actions are dispatched.

3. **Dispatch Actions**:
   You can now dispatch actions in your application as usual, and the actions will pass through the middleware functions you've applied in the order they were passed to `applyMiddleware`.

   ```javascript
   store.dispatch({ type: 'SOME_ACTION' });
   ```

   As the action passes through each middleware, they can perform tasks before and after the action is dispatched, allowing you to implement various functionalities like logging, asynchronous operations, and more.

By using `applyMiddleware`, you can easily compose and add multiple middleware functions to your Redux store, allowing you to customize the behavior of your application's state management. Just ensure that you order the middleware functions appropriately, as they will be executed in the order in which you pass them to `applyMiddleware`.
 # alternative of redux
 context api, mobx, recoil, zustznd

Feature	            Redux	            MobX
Setup Complexity	  More boilerplate	            Less code
State Management	  Immutable, actions            modify state	Mutable, directly modifying state
Performance	        Efficient but re-renders more	
             Optimized with fine-grained reactivity
Best For	     Large apps with strict control	           Small to medium apps, real-time updates
Final Thoughts
Use Redux if you need strict control over state and predictable behavior.
Use MobX if you want less boilerplate and an easier approach.

