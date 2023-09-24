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