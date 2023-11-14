let tcnt=0;
let ncnt=0;
//throttling is a technique that limits the number of times a function can be called over a given period of time. 
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