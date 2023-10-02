

/**
 * A Promise is an object which represents the eventual completion or failure of an asynchronous operation in js
 * Or You can say
 * A promise is an object in js which tells about a value which is not currently available but its going to be available in future. 
 * it help JS to perform asynchronous  opertaion in synchronous way like API calls, waiting for user inputs, reading files without blocking the main thread
 * 
 * A promise can be in three state
 * Pending: the initial state when promise is created and its is not resolved or rejectef yet
 * Fullfilled: the state when the sync operation completes successfully. at this time we have a value as response
 * Rejected: when it encounter any error while performing the async task its result out as rejected promise
 * 
 */


//**********create a PROMISE */

let promise = new Promise((resolve, reject)=>{
    let err = "";
    let data = "200"
    if(err){
        console.log("promise rejected with", err)
        reject("server error")
    }else{
        console.log("promise fullfilled", data);
        resolve('200 ok')
    }
})

//**********Consuming a PROMISE - we can use .then() to resolve the value and .catch() to handle the error */

promise.then(res => console.log("response",res))
       .catch(err => console.log("error: ", err))
       .finally(()=>console.log("process completed")) // it will run in both the case rejected or fullfilled

//*****chaining PROMISES */
//promise.then(fetchdara).then(displaydata).then(handledata)

//******* promise methods*/ - it takes array of promises and promise is settled when all the promises return true
//******  Promise.all([promise1, promise2, promise3]).then(values => console.log(values )) 
//******  Promise.allSettled([promise1, promise2]).then(results => {resul.forEach((result)=> console.log(result))}) ; the returns promise fullfilled when all the promises is settled means they have success or rejected

//Promise.any() - array of promises me koi ek bhil fullfilled to resolve but if all promises is rejected then it is rejected
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
// Expected output: "quick"

//Promise.race()  - the faster resolved will be the result
const promise1_ = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2_ = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1_, promise2_]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"

//*******INTERVIEW QUESTIONS ****/

//implement a custom promise using callbacks only

function customPromise1 (callback){
    setTimeout(()=>{
        let data="data";
        let error = "rtt";
        if(error){
            callback(error, null)
        }else{
            callback(null, data)
        }
    }, 3000)
}

customPromise1((error, result) => {
    if(error){
        console.log("An error occured!", error)
    }else{
        console.log("promise result with", result)
    }
})

//above implement .then() functionality as well

function customPromise(executor) {
    let state = 'pending';
    let value = null;
    let handlers = [];
  
    function resolve(result) {
      if (state === 'pending') {
        state = 'fulfilled';
        value = result;
        handlers.forEach((handler) => {
          if (handler.onFulfilled) {
            handler.onFulfilled(value);
          }
        });
      }
    }
  
    function reject(reason) {
      if (state === 'pending') {
        state = 'rejected';
        value = reason;
        handlers.forEach((handler) => {
          if (handler.onRejected) {
            handler.onRejected(value);
          }
        });
      }
    }
  
    this.then = function (onFulfilled, onRejected) {
      return new customPromise((resolve, reject) => {
        if (state === 'fulfilled') {
          try {
            const result = onFulfilled ? onFulfilled(value) : value;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        } else if (state === 'rejected') {
          if (onRejected) {
            try {
              const result = onRejected(value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          } else {
            reject(value);
          }
        } else {
          handlers.push({ onFulfilled, onRejected });
        }
      });
    };
  
    this.catch = function (onRejected) {
      return this.then(null, onRejected);
    };
  
    executor(resolve, reject);
  }
  
  // Using the customPromise with .then and .catch
  customPromise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        resolve('Resolved successfully');
      } else {
        reject('Rejected with an error');
      }
    }, 1000);
  })
    .then((result) => {
      console.log('First .then resolved with:', result);
      return 'New result';
    })
    .then((result) => {
      console.log('Second .then resolved with:', result);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  

  