// write your own implementation of Promise.all 
// promise.all takes array of promises
// its return a promise
// its return true if all the promise return true or got resolved 

function myPromiseAll(iterable){
    return new Promise((resolve, reject)=>{
         const result = [];
        let count =0;
        function processPromise (i, val){
            result[i] = val;
            count++;
            
            if(count === iterable.length){
             resolve(result);
          }
        }
        for(let i=0;i<iterable.length;i++){
            let current = iterable[i];
            if(current instanceof Promise){
                current.then(val=> processPromise(i, val)).catch(reject);
            }else{
                processPromise(i, current)
            }
        }
    })
}

const promise1 = Promise.resolve(3);
const promise2 = "Hello world";
const promise3 = new Promise((resolve)=> setTimeout(resolve, 900, "all done"))

myPromiseAll([promise1, promise2, promise3]).then(result=> console.log(result)).catch(e => console.log(e))

