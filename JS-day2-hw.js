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
};

let favFood = (dict) => {
    for (let [type,food] of Object.entries(dict)){
        if (type == 'shakes'){
            for ([place] of Object.entries(dict[type])){
                for ([place2,shake] of Object.entries(dict[type][place]))
                console.log(`Favorite ${type} form ${place2}: ${shake}`)
            }
        }else {
            console.log(`Favorite ${type}: ${food}`)
        }
    }
}
favFood(person3)
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
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    };

// Use an arrow to create the printInfo method
    printInfo = () => {
        console.log(`This is ${this.name} and they are ${this.age} years old.`);
    };
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    addAge = () => {
        this.age += 1;
        console.log(`Happy Birthday ${this.name}! They are ${this.age} years old now!`);
    };
};
let person1 = new Person('Chet', 23)
let person2 = new Person('Nicole', 26)
person1.printInfo()
person2.printInfo()
person1.addAge()
person2.addAge()
person1.addAge()
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let isBig = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length >10) {
            resolve(str);
        }else {
            reject(str);
        }
    })
    .then(() => {
        console.log('Big word');
    }).catch(() => {
        console.log('Small word');
    })
};

isBig('massachusetts')
isBig('hi')