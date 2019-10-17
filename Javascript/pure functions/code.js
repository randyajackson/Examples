// Pure functions produce deterministic, determinable code.

// Function is only pure if given the same input, it produces the same output and it produces no side effects.
// A side effect is a change to the state of the application

// If a function is pure, it operates outside of outside state

// They are good for parallel Processing 

// in math, given x = 1 + ( 2 * 4 )
// 2 * 4 can be replaced with 8 and it has no effect on x or 1

// A referentially transparent method operates like multiply(2,4), 2*4 is replaced with the return value

// Pure function does not change the state of its arguments
// Pure function returns the same output given the same input
// Pure function does not depend on external dependencies

// Using built in js functions like .splice() .reverse() are not pure as they change the array that was sent in as an argument.
// if the argument is changed, it becomes impure
// Would be better to clone the array THEN pass to splice as this does not change the state of the data.

// Math,random() would not be pure, depends on system variable
// Date.now() would not be pure, depends on system time

let arr = [];

let addToArray = (arr,element) => {
    arr.push(element);
};

addToArray(arr, 5);

// This is not pure as arr {} is mutated to arr{5}

console.log(arr);

// pure functions limits the complexity of where the error is hiding
// concrete idea about where the error can occur since pure functions are known to produce predictable results

//global variables

//impure use case
//refers to the global variable from inside the function
let x = 5;

let firstStep = () =>
{

    let secondStep = () =>
    {
        return x;
    };

    secondStep();
    return x;
};

console.log("x = " + firstStep() );

//pure use case
//refers to the global variable from the argument passed
let firstStep2 = (variableToGet) =>
{

    let secondStep2 = () =>
    {
        return variableToGet;
    };

    secondStep2();
    return variableToGet;
};

console.log("variableToGet = " + firstStep2(x) );


//pure function example

function doubleAndAddTen(input) {
    return (doubled => doubled + 10)(input * 2);
}

//return (doubled => doubled + 10)(input * 2);
//equivalent to
// const doubled = x * 2;
// return doubled + 10;

//because doubled is an argument and doubled = input

// arrow function expression
// equivalent to: => { return expression; }
//anonymous functions with their own special syntax 
//that accept a fixed number of arguments, and operate 
//in the context of their enclosing scope - ie the function or other code where they are defined

//const add2 = num => num + 2
//add2(2);
// 4
console.log("doublePlusTen = " + doubleAndAddTen(9));

function myArrowTest(a, b, c){
    return(answer => answer + 1)( (a + 1)*(b + 1)*(c + 1) );
}

console.log("myArrowTest = " + myArrowTest(1, 1, 1));

//pure error handling

function divide(dividend, divisor) {
    if (divisor === 0) {
        return {
            ok: false,
            value: new Error("Can't divide by 0")
        }
    }
    return {
        ok: true,
        value: dividend / divisor
    }
}

function safeDivide(dividend, divisor) {
    const result = divide(dividend, divisor);
    if (result.ok) {
        return result.value;
    }
    return 0;
}

//this way does not rely on system variables for catching the errors
//internally, constructs are used to explicitly be tested for the function

