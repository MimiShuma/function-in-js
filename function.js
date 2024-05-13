// standard function definition

function sayHello1() {
    return "Hello1";
}

// anonymous function

let sayHello2 = function () {
    return "Hello2";
}


// arrow function
let sayHello3 = () => {
    return "Hello3";
}

let sayHello4 = () => { return "Hello4"; }

let greet = (aGreeting) => aGreeting


console.log(greet("assalamu alaikum"));
console.log(sayHello1());
console.log(sayHello2());
console.log(sayHello3());
console.log(sayHello4());