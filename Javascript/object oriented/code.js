//prototype delegation
//object search its entire protype chain for a given property.

//factory objects

let header = (headline) => { 
    console.log(".....................");
    console.log(headline);
    console.log(".....................");
};

//use factory functions to create objects of similar type

header("factory function");

function makeDog(name, age, breed)
{
    return( 
        {
            name: name, 
            age: age, 
            breed: breed, 
            isCute: "yes",
            intro: function() { console.log(this.name + " is a "+ this.breed + " and is " + this.age + " years old."); }
        }
    );
}

let Lili = makeDog("Lili", 9, "Wiener");
let Baby = makeDog("Baby", 3, "Labrador");

Lili.intro();
Baby.intro();

Lili.breed = "Little baby";

Lili.intro();

Lili.name = "Liliana";

Lili.intro();

if(Lili.isCute == Baby.isCute)
{
    console.log("All the dogs are cute.");
}

//Drawbacks to factory objects:
//No way to check where object was generated from
//No shared behaviors between the objects
//---------------------------------------------------------
header("Constructor pattern");
//Constructor Pattern

//a regular function that is called using the "new" keyword
//using new keyword causes 4 key things to happen:
//-creates a new object
//-context(this) is set as the new object
//(create prototypes by using this.attibute = ...)
//-function code is executed within the new object's context
//-function returns the new object

function Dog(name, age, breed)
{
    this.name = name;
    this.age = age;
    this.breed = breed;

    this.intro = function() { console.log(this.name + " is a "+ this.breed + " and is " + this.age + " years old."); } ;
}

let LiliConstructor = new Dog("Lili", 9, "Weenie");

LiliConstructor.intro();

console.log('LiliConstructor is an instanceOf dog? ');
console.log(LiliConstructor instanceof Dog);

LiliConstructor.breed = "Labrodor";
LiliConstructor.intro();

LiliConstructor.name = "Little Baby";
LiliConstructor.breed = "Weenie";
LiliConstructor.intro();

console.log('LiliConstructor is an instanceOf dog? ');
console.log(LiliConstructor instanceof Dog);

//here we are not creating a Dog class
//there is an exploitation of prototype delegation happening
//intro is still being created on every new object
//-----------------------------------------------------------
header("Pseudo Classical Pattern");
//prototypal delegation
//LiliConstructor.intro()
//-it first looks for the prototype on itself
//-if that doesn't exist, it looks at available properties of its prototype to see if intro exitst
//-it does this until top level Object.prototype
//"Prototype chain"

function Doggy(name, age, breed)
{
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.isCute = "Yes, cute by default.";
}

Doggy.prototype.intro = function() { console.log(this.name + " is a "+ this.breed + " and is " + this.age + " years old."); } ;

let bb = new Doggy("Lili", 9, "Weenie");
let qt = new Doggy("Bacon Boy", 9, "Labrodor");

bb.intro();
qt.intro();

bb.isCute = "Yes, very.";
//qt.isCute = "No, nuh-uh.";

Doggy.prototype.intro = function() { console.log(this.name + " is a "+ this.breed + " and is " + this.age + " years old. Is the dog cute? " + this.isCute); } ;

bb.intro();
qt.intro();

console.log( Object.getPrototypeOf(bb) );

//new creates a new object, assigns some state, and returns the object
//now we use intro as a shared prototype between the objects
//intro becomes a prototype of all new objects made from Doggy
//bb.intro() is called and sees that bb does not have this method
//it then goes up the prototype chain which it finds intro() on Doggy.prototype
//.prototype keyword is required

header("Object Linked to Other Object Pattern");

//no use of a function to create objects at all

var cuteBaby = {

    init: function(name, age, breed)
          {
                this.name = name;
                this.age = age;
                this.breed = breed;
                this.isCute = "Yes by default."
          },
    
    intro: function() { console.log(this.name + " is a "+ this.breed + " and is " + this.age + " years old. Is the dog cute? " + this.isCute); } 

};

let superCuteBaby = Object.create(cuteBaby);
superCuteBaby.init("Lili", 9, "Weenie");
superCuteBaby.isCute = "Very cute.";

let reallyCuteBaby = Object.create(cuteBaby);
reallyCuteBaby.init("Lil' Baby", 9, "Labrodor");


superCuteBaby.intro();
reallyCuteBaby.intro();

//these object oriented patterns are what the class keyword is doing under the hood

//.................................................................................









