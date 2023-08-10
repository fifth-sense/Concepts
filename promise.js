/**
 * To understand the Promise first we need to understand callback
 * 
 * A callback is function which is pass inside as an argument 
 * callback function is used to achieve async task in JS
 */

// const cart = ["kurti", "trosers", "kurta", "saree"]

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId, function(paymentInfo){
//         showOrderSummary(paymentInfo, function(){
//             updateWallet();
//         } )
//     })

// })

//the above heirarchy is known as pyramid of doom , inversion of control (we have pass the total control to a function ), app start growing horizontally which is not efficient
//To resole this we have Promis

let promise = fetch("https://jsonplaceholder.typicode.com/todos")

promise.then(d=> console.log("hhhh",d))

console.log(promise) // at this point promise is in pending state