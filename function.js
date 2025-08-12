// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// let result = myFunction(4, 3);


// function toCelcius(f) {
//     return (5/9) * (f-32);
// }

// let value = toCelcius(90);


// function myFunction() {
//     let carName = "Volvo";
//     // let text = "Inside: " + typeof carName + " " + carName;
//     carName;
// }

// let myFunction = function(a, b) {return a * b};

// let result = myFunction(5, 3);



// myFunction = (a, b) => a * b;

// let result = myFunction(30, 2);

// const car = {type: "Fiat", model: "500", color: "white"};


// const person = {};

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// const person = new Object({firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"});

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};


console.clear();
console.log(person.fullName());