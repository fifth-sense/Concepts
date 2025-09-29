let tcnt=0;
let ncnt=0;
//throttling is a technique that limits the number of times a function can be called over a given period of time. 
```javascript
function throttle(fn, d){
    let context = this;
    let arg = arguments;

    let flag = true;
    if(flag){
        fn.apply(context, arg);
        flag = false;
        setTimeout(()=>{
            flag=true;

        }, d)
    }
}

function logger(){
    console.log("throttle function---", tcnt++);
}
let betterFun = throttle(logger, 2000);
window.addEventListener("resize", betterFun);

const normalFun = () =>{
    console.log("normal function--", ncnt++)
}
window.addEventListener("resize", normalFun)


### **Debounce and Throttling**

Both **debounce** and **throttling** are techniques used to control how frequently a function is executed, especially in cases where it is triggered repeatedly (e.g., scrolling, resizing, keypress events). Here's a breakdown:

---

### **1. Debounce**
- **Definition:** Ensures that a function is only executed after a specified delay **once** the event stops firing.
- **Use Case:** Useful for scenarios where you want to wait until the user has finished an action.
  - Example: Search input auto-completion (only call the API when the user stops typing).

#### **Implementation:**
```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // Clear previous timer
    timer = setTimeout(() => {
      func.apply(this, args); // Call the function after the delay
    }, delay);
  };
}
```

#### **Usage Example:**
```javascript
const handleInput = debounce((value) => {
  console.log("Search query:", value);
}, 500);

document.getElementById("search").addEventListener("input", (e) => {
  handleInput(e.target.value);
});
```

- **How it works:**
  - If the user keeps typing within 500ms, the previous timer is cleared, and the function is never called.
  - The function executes only after the user stops typing for 500ms.

---

### **2. Throttling**
- **Definition:** Ensures that a function is executed at most once in a specified interval, no matter how many times the event fires during that interval.
- **Use Case:** Useful for limiting the rate of function execution in performance-heavy tasks.
  - Example: Handling scroll events, resizing the window, or button clicks.

#### **Implementation:**
```javascript
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now; // Update the last called time
      func.apply(this, args);
    }
  };
}
```

#### **Usage Example:**
```javascript
const handleScroll = throttle(() => {
  console.log("Scroll event triggered");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

- **How it works:**
  - The function can execute only once every 1000ms (1 second) regardless of how many times the scroll event is triggered.

---

### **Key Differences**

| **Feature**            
| **Debounce**                                         | **Throttle**                                         |
|-------------------------|-----------------------------------------------------|-----------------------------------------------------|
| **Execution Timing**    
| Executes **after the event stops** firing.           | Executes **at regular intervals** while the event fires. |
| **Use Case**            
| Actions that happen after user inactivity (e.g., search input). | Actions that need periodic updates (e.g., scrolling). |
| **Control**             
| Delays the execution until the event stops.          | Limits the execution to once per interval.           |
| **Example Use Cases**   
| Search bar, form validation, resizing windows.       | Scrolling, resizing, button clicks, API polling.     |

---

### **Practical Example: Combining Debounce and Throttle**
Sometimes you may need both techniques in a single application. For example:
- **Debounce** a search input to limit API calls.
- **Throttle** scroll events to optimize performance.

Here's how you might use both:
```javascript
// Debounced API search
const fetchSearchResults = debounce((query) => {
  console.log("Fetching results for:", query);
}, 500);

// Throttled scroll handler
const logScrollPosition = throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 1000);

// Event Listeners
document.getElementById("search").addEventListener("input", (e) => {
  fetchSearchResults(e.target.value);
});
window.addEventListener("scroll", logScrollPosition);
```

---

### **Conclusion**
- Use **debounce** to delay execution until the user stops interacting.
- Use **throttle** to ensure execution at regular intervals during continuous activity.

Both techniques improve the performance and user experience of applications by reducing unnecessary function calls. Let me know if you'd like more examples or explanations! 😊