// In JavaScript, functions are first - class objects, because they can 
// be passed to other functions, returned from functions, and assigned to 
// variables and properties.They can also have properties and methods just 
// like any other object.What distinguishes them from other objects is that 
// functions can be called.


function sayHi(window) {
    return window;
}

function greet(aGreeting) {

    return aGreeting;
}

// let greeting = sayHello();
// console.log(greeting)

greeting = sayHi();
console.log(greeting)


greeting = greet("assalamu alaikum");
console.log(greeting)

greeting = greet("good morning");
console.log(greeting)


// function definition
function add() {

    let number1 = 10;
    let result = 0;
    result = result + number1;

    return result;
}

//function call
// add(5)


console.log(add());
/* console.log( add(5) );
console.log( add(7) );
console.log( add(50) ); */