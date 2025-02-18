// import "./styles.css";

// /////////Output based questions//////////
// /////////Event loop//////////////////////

// // setTimeout(() => console.log(1));
// // new Promise(res => {
// // console.log(2); 
// // res(false)
// // })
// // .then(() => console.log(3)) 
// // .catch(() => console.log(4));
// // console.log(5);

// // ///output -> 
// // 5 
// // 2 3
// // 1



// /////////Output based questions//////////
// ////////Promise Chaining////////////////

// Promise.resolve().then(() => 1)
// .catch(() => 2)
// .then(a => console.log(a)) 
// .then(b => console.log(b)) // undefined
// .then(() => { throw new Error() })
// .catch(() => 1)
// .then(c => console.log(c)); 

// ///output -> 1 1 1

// /////////Output based questions//////////
// //////////////////////Event Propogation////////////////////

// const outerDiv = document.getElementById('outer'); //red
// const innerDiv = document.getElementById('inner'); // blue

// outerDiv.addEventListener(
// 'click',
// () => console.log('outerDiv -> bubble') // bubbling
// );

// outerDiv.addEventListener(
// 'click',
// () => console.log('outerDiv -> capture'),
// {capture: true} // capturing
// );


// innerDiv.addEventListener(
// 'click',
// () => console.log('innerDiv -> bubble') 
// );


// innerDiv.addEventListener(
// 'click',
// () => console.log('innerDiv -> capture'),
// {capture: true}
// );

// // What will be the output on clicking the button ?
// // output:  innerDiv -> bubble -> innerDiv -> capture
// //          outerDiv -> bubble outerDiv -> capture


// //reconcilation - 
//promiseAll[promise1, promise2, promise3].then((result) =>  console.log())

const promise1 = new Promise(res => res('promise1 resolved'));
const promise3 = new Promise((res) => {setTimeout(function(){res('promise3 resolved')}, 1000)});
const promise2 = Promise.resolve('promise2 resolved')
//const promise2 = Promise.reject('promise2 rejected')
//promiseAll([promise1, promise3, promise2]).then(data => console.log(data)).catch(err => console.log(err))

//write custompromiseAll
//approach
// function take array of promises
// return a promise 
// keep a count 
// count === array of promises.length.
// if not resolved return reject with error

function customPromiseAll(iterable){
  return new Promise ((resolve, reject) => {
    let count = 0;
    let result = [];
  
    function resolvePromise(i, element){
       element
       .then((res)=> { 
        result[i] = res ;
        count++;
        if(count === iterable.length)
        resolve(result);
      })
      .catch((e) => reject(e));
      
    }
    for(let i=0;i<iterable.length;i++){
      let current = iterable[i];
      resolvePromise(i, current);
    
    }
  })
}
customPromiseAll([promise1, promise3, promise2]).then(data => console.log(data)).catch(err => console.log(err))





