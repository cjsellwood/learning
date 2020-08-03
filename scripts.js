// console.log("OBJECTS")
// const myObject = {
//     property: 'Value',
//     otherProperty: 77,
//     "another property": function(value) {
//         // do stuff
//         console.log("returns " + value);
//     }
// }

// console.log(myObject.property)             // Returns 'Value'
// console.log(myObject["otherProperty"])     // Returns 77
// myObject["another property"](44);          // Returns 44
// myObject.newProperty = "new property"      // Sets object property

// console.log("OBJECT CONSTRUCTORS")
// function Player(name, marker) {
//     this.name = name
//     this.marker = marker
//     this.sayName = function() {
//         console.log(name)
//     }
// }

// const player1 = new Player('steve', 'X')     // Create object player1
// const player2 = new Player('bob', 'O')       // Create object player2
// player1.sayName()                            // Returns 'steve'

// console.log("THE PROTOTYPE")

// function Student(name, grade) {
//     this.name = name
//     this.grade = grade
// }
// // Add function on prototype so that all Student objects will have function
// // It is shared between all Student objects, therefore avoiding duplicates
// Student.prototype.sayName = function () {
//     console.log(this.name)
// }

// const student1 = new Student("Jack", "4");  // New student object
// student1.sayName();                         // Returns 'Jack'

// console.log("PROTOTYPAL INHERITANCE");

// function Student() {
// }
// // Set a function on student prototype
// Student.prototype.sayName = function() {
//     console.log(this.name);
// }

// function EighthGrader(name) {
//     this.name = name
//     this.grade = 8
// }
// // Inherit prototype of student including any functions added
// EighthGrader.prototype = Object.create(Student.prototype)

// const jeff = new EighthGrader("Jeff");
// jeff.sayName()                               // Returns 'Jeff'

// console.log("FACTORY FUNCTIONS")
// // Creates a function that can create objects
// const personFactory = (name, age) => {
//     const sayHello = () => console.log('hello ' + name);
//     return { name, age, sayHello };
// };

// const bill = personFactory('bill', 27);
// console.log(bill.name)                      // Returns 'bill'
// console.log(bill.sayHello())                // Returns 'hello bill'

// const Person = (name) => {
//     const sayName = () => console.log(`my name is ${name}`)
//     return {sayName}
// }
// // Inherit from person
// const Nerd = (name) => {
//     // Create a person and pull out the sayName function
//     const {sayName} = Person(name)
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return {sayName, doSomethingNerdy}
// }
// const jeff = Nerd('jeff')

// jeff.sayName()                         // Returns 'my name is jeff'
// jeff.doSomethingNerdy()                // Returns 'nerd stuff'

// // Inherit all Properties of another object
// const Nerd = (name) => {
//     const prototype = Person(name)
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return Object.assign({}, prototype, {doSomethingNerdy})
// }

// console.log("MODULE PATTERN");

// // Wrap factory in Immediately Invoked Function Expression
// const calculator = (() => {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     // Return functions that can be used globally
//     return {
//         add, sub, mul, div,
//     }
// })();

// calculator.add(3, 5)        // Returns 8
// calculator.mul(14, 5534)    // Returns 77476

console.log("CLASSES")

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

let user = new User("John");
user.sayHi();