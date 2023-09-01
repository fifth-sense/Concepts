function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    return y; //or return y if you return y you have to call it later to rexecute
}

 let tmp = x();
 console.log(tmp) // function(){}
 tmp() //10