/**
 * 10/10/19
 * There are four equality agrorithms in Javascript:
 * 1. Abstract Equality Comparison (==)
 * 2. Strict Equality Comparison (===)
 * 3. SameValueZero
 * 4. SameValue
 * 
 * == provides Abstract eqality comparison
 * === provides Strict equality comparison
 * .is provides SameValue
 * 
 * == will perform a type conversion
 * === will not perform a type conversion and returns
 * false if types are not the same.
 * 
 * more about == conversion:
 * 
 */

// All types are a subclass of the Object class:

// Number
// Boolean
// String
// Array
// Object

// V8 translates JavaScript code into more efficient machine code instead of using an interpreter


// In Google's V8 Javascript Engine:

// Javascript in C++ for 
// let x = 10

// would look like:

// class JSNumber : Object {...}
// JSNumber* aJSNumber = new JSNumber()
// xJSNumber->setNumber(10)

// That is because x is a subclass of the Object class Number.

// x is allocated in the heap and has a memory address.

// let a = [90] would be represented as:
// JSArray aJSArray = new JSArray();
// JSArray aJSArray.setElementAt(90, 0);


// if you do
// let a = [10]
// let c = a
// a.push(400)

// console.log( c === a );
// is true

// this is because c holds a reference to a

// but if 
// let a = [90]
// let c = a
// c = a.concat([100])

// console.log( c === a );
// is false

// Since concat is a non-mutating method in array,
// setting c = a.concat([100]) causes 
// a new object to be created for a and assigned to c.

// The new object has a different memory address
// because a new object is generated for a and the value is
// appended.









console.log("test");