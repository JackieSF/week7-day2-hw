//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function favFoods(person3){
    for(let i = 0; i < Object.keys(person3).length; i++){
        console.log(Object.keys(person3)[i])
        console.log(Object.values(person3)[i])
    }
}

 favFoods(person3)
 console.log(favFoods())


// function favFoods1(){
//     console.log(" This person's favorite foods are: 
//     ${person3.pizza}
//     ${person3.tacos} 
//     ${person3.burgers} 
//     ${person3.ice_cream} 
//     ${person3.shakes[0].oberwise} 
//     ${person3.shakes[0].dunkin} 
//     ${person3.shakes[0].culvers} 
//     ${person3.shakes[0].mcDonalds} 
//     ${person3.shakes[0].cupids_candies}

//   "  )
// }

// favFoods1()

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () =>{
        return `Name: ${this.name} is \nAge: ${this.age} years old.`
    }

    addAge = ( () => {
        console.log('Test')
        return function () {return this.age++}
    }) 
}

let Gabriella = new Person('Gabriella', 23)
console.log(Gabriella.printInfo())
console.log(Gabriella.addAge.addAge())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const wordGirl = (str) => {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve(true)
        } else{
            reject (false)
        }
    })
}

wordGirl('supercalifragilisticexpialidocious')
.then( (result) => {
    console.log(`Big word ${result}` )
})

.catch( (error) => {
    console.log(`Small Number ${result}`)
})