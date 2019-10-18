//prototype delegation
//object search its entir protype chain for a given property.

//factory objects

//use factory functions to create objects of similar type

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

//Constructor Pattern



