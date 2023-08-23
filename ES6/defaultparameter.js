//
function say(msg="hi") {// default parameter
    console.log(msg)
}
say() // hi  / the value it is getting from default parameter
say("hello") // hello

//Argument Vs parameter - parameter are those when we declaring a function, arguments are those when we are passing the value to function

function add(x, y){ // x and y are parameters
    return x+y

}
add(3,4) // arguments

//ES6 provides you with an easier way to set the default values for the function parameters like this:

function fn(param1=default1, param2=default2) {
}

//In the syntax above, you use the assignment operator (=) and the default value after the parameter name to set a default value for that parameter. For example:

function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'


