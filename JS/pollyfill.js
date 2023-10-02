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
printMyName("Karnatak", "India")