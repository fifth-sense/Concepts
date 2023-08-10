
// let a = 10
// console.log("before promise")
// let promise = new Promise((resolve, reject)=>{
//     if (a === 10){
//         setTimeout(()=>{
//             resolve(a)
//         },2000)
        
//     }else{
//         reject("err!")
//     }
// })

// promise.then((value)=>{
//     console.log(value)
// })

// promise.catch((value)=>{
//     console.log(value)
// })
// console.log("after promise")


// console.log("before")

// setTimeout(()=>{
//     console.log("IIIIIIII")
const promise = new Promise(function(resolve, reject){
    console.log("inside promise");
    resolve();
}).then(function(){
    console.log("in then statement");
});

setTimeout(()=>{
    console.log(" from sehellottimeout ", promise)
}, 0);

console.log("here after promise and setTimeout");