//prototype delegation
//object search its entir protype chain for a given property.

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


