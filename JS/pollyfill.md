Here’s the clean, interview-ready breakdown of **call / apply / bind** plus robust **polyfills**.

---

## What they do (in one line each)

* **`fn.call(thisArg, ...args)`** → invokes `fn` **immediately**, setting `this = thisArg`, passing args **individually**.
* **`fn.apply(thisArg, argsArray)`** → invokes `fn` **immediately**, setting `this = thisArg`, passing args as a **single array**.
* **`fn.bind(thisArg, ...args)`** → **doesn’t call now**; returns a **new function** with `this` fixed to `thisArg` and optionally **pre-applied** leading args (partial application).

### Quick examples

```js
function greet(g, p) { return `${g}, ${this.name}${p}`; }
const person = { name: "Ruby" };

greet.call(person, "Hi", "!");          // "Hi, Ruby!"
greet.apply(person, ["Hello", "!!"]);   // "Hello, Ruby!!"

const heyRuby = greet.bind(person, "Hey");
heyRuby("?");                           // "Hey, Ruby?"
```

---

## When to use which

* Use **`call`** when you have discrete arguments already.
* Use **`apply`** when your arguments are in an array (e.g., coming from `Array.prototype.slice` or spread you don’t want to use).
* Use **`bind`** to create callbacks with a **fixed `this`** (e.g., event handlers, timers) or to **partially apply** arguments.

---

## Important notes

* If `thisArg` is `null`/`undefined`, non-strict mode sets `this` to the **global object**; strict mode keeps it as `undefined`.
* **Arrow functions** ignore `call/apply/bind` for `this` (they capture `this` lexically).
* `bind` has special behavior with `new`: the bound function can be used as a constructor; in that case the **newly created instance becomes `this`**, not the bound object.

---

## Polyfills (production-safe)

### `call` polyfill

```js
if (!Function.prototype.myCall) {
  Function.prototype.myCall = function (thisArg, ...args) {
    if (typeof this !== 'function') throw new TypeError('myCall target is not callable');
    const ctx = thisArg == null ? globalThis : Object(thisArg);
    const fnKey = Symbol('fn');
    ctx[fnKey] = this;                 // temporarily attach
    const result = ctx[fnKey](...args);
    delete ctx[fnKey];
    return result;
  };
}
```

### `apply` polyfill

```js
if (!Function.prototype.myApply) {
  Function.prototype.myApply = function (thisArg, argsArray) {
    if (typeof this !== 'function') throw new TypeError('myApply target is not callable');
    const ctx = thisArg == null ? globalThis : Object(thisArg);
    const fnKey = Symbol('fn');
    ctx[fnKey] = this;
    let result;
    if (argsArray == null) {
      result = ctx[fnKey]();
    } else {
      if (!Array.isArray(argsArray) && typeof argsArray !== 'object' && typeof argsArray[Symbol.iterator] !== 'function') {
        throw new TypeError('CreateListFromArrayLike called on non-object');
      }
      result = ctx[fnKey](...argsArray);
    }
    delete ctx[fnKey];
    return result;
  };
}
```

### `bind` polyfill (handles `new`, preserves prototype)

```js
if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (thisArg, ...boundArgs) {
    if (typeof this !== 'function') throw new TypeError('myBind target is not callable');
    const targetFn = this;

    function boundFunction(...callArgs) {
      // If called with 'new', ignore bound thisArg and use the new instance
      const isNew = this instanceof boundFunction;
      return targetFn.apply(isNew ? this : thisArg, [...boundArgs, ...callArgs]);
    }

    // Maintain prototype chain so `new (fn.bind(...))` works like native bind
    if (targetFn.prototype) {
      boundFunction.prototype = Object.create(targetFn.prototype, {
        constructor: { value: boundFunction, writable: true, configurable: true }
      });
    }

    return boundFunction;
  };
}
```

### Quick sanity check

```js
function sum(a,b){ return this.base + a + b; }
const obj = { base: 10 };

sum.myCall(obj, 2, 3);            // 15
sum.myApply(obj, [2, 3]);         // 15
const addFrom10 = sum.myBind(obj, 2);
addFrom10(3);                     // 15

// `new` with bind
function Person(name){ this.name = name; }
const Bound = Person.myBind({ notUsed: true });
const p = new Bound('Ruby');
p instanceof Person;              // true
p.name;                           // "Ruby"
```

//Use these snippets in interviews to (a) explain, (b) show code, and (c) demonstrate nuance (`new` + arrow-function caveat).


//browser fallback what if, our browser don't support bind method!
//create your own bind method

let name={
    firstname: "Ruby",
    lastName: "Kumari"
}

function printname(city, state, country ){
    console.log(this.firstname+ " "+ this.lastName+" "+city+","+state+","+country)
}
let printMyName = printname.bind(name, "Patna")
printMyName("Bihar", "India")

Function.prototype.myBind = function(...args){
    let context = this;
    let param = args.slice(1);
    return function(...args2){
        context.apply(args[0], [...param, ...args2])
    }

}

let printMyName2 = printname.myBind(name, "Banglore")
printMyName2("Karnatak", "India")