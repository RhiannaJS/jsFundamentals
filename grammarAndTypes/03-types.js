/*
DATA and STRUCTURE TYPES

- Primitive Data Types:
    - boolean
    -undefined
    -string
    -number
    -bigInt*
    -symbol*
-null
-Object
-Function
*/

/*
    BOOLEAN

    A boolean has two possible values: true and false
*/

let on = true;
let off = false;

console.log(on);
console.log(off);

/*

NULL

A null value is an empty value.  Think of it as an empty container that has space to fill.
NOTE: null and undefined are two different things.

**can be used to reset a value - i.e. resetting/wiping data (bank, wiping a phone)**

*/
let empty = null;
console.log(empty);

/*
UNDEFINED

No value has been assigned to a container and doesn't even act a an empty container.
*/
let unknown;
let undef = undefined;

//What's the difference between null and undefined? 
/*
- Null is like a container with nothing in it 
    -this is empty but I told it to be.
- Undefined is a variable that has never been set, or it hasn't been created yet.
    -Something went wrong with what you've written
*/

/*
NUMBERS

Literally just numbers
**JavaScript is very bad at large numbers - beyond 15  it #9's it gets yucky- after 15 #9's, js rounds up**
**9007199254740992 is the largest number that js can handle.**
**js not good with decimals either**
*/

let degrees = 82;
console.log(degrees);

let precise = 999999999999999;// 15 9's in the console
console.log(precise);

let rounded = 9999999999999999;// 16 9's becomes 1 with 16 0's
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let whatIf = (0.2 * 10 + 0.1 * 10) / 10;
console.log(whatIf)

/*
STRINGS

Strings represent text and are wrapped in either single or double quotes.  
*/

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that?"';
let bothQuotesAlt = "I said, 'It is pretty cool right?'";
console.log(bothQuotes);
console.log(bothQuotesAlt);

/*const contrations1 = "now you can't run into any issues";
const contractions2 = 'now you can\'t run into any issues'//escape character
console.log(contractions1);
console.log(contractions2);
*/

//Numbers and Strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);

//We can use an operation called 'typeof' to return a string of the variable's type.

console.log(typeof addThese);
console.log(typeof addTheseAlso);

//let addTest = '1050' + 100;
// console.log(addTest);

/*
OBJECTS

Objects are used to store many values instead of just one.
Consider them as a collection of different variables in one container
denoted by curly brackets: {}

*/

let frodo = {
    // an object has many properties inside of it
    race: 'Hobbit',  // string
    // name: value
    // we must seperate properties in an object with a comma
    rings: 1, // number 
    sting: true // boolean
}

console.log(frodo);
console.log(typeof frodo);
console.log(frodo.rings); //Dot notation example

/*
ARRAYS - an object that functions differently than an object

Containers that hold a list of items
denoted by square brackets: []
all items are within the square brackets
regardless of the data type, all items are seperated by commas
** they will be a list of things**
*/

let arrayList = ['position 1', 'position 2', 'position 3'];
console.log(arrayList);

let anotherExample = ['muffins', 'pizza toppings', true, 17, 9007199254740992, false, null, undefined]
//Could also add another array and an object - it will hold anything we give it.
console.log(anotherExample);
console.log(anotherExample[0]); //square bracket notation

console.log(typeof anotherExample);

/*
ADDITION vs CONCATENATION

JS sees the + symbol in two different ways
 -When we use it in numbers, it will use the built-in math fnctionality
 -When we use it in strings, it will ignore the math functionality and concat, or combines, the two strings
 into one
*/

let strings = 'one' + ' ' + 'is a number';
console.log(strings);


let concatDiff = 1050 + '100';
console.log(concatDiff);
console.log(typeof concatDiff);

// ! CHALLENGE

let firstname = 'Rhianna';
let lastname = 'Latshaw';
let housenumber = 55;
let street = 'Brendon Way';
let city = 'Zionsville';
let state = 'Indiana';
let zipcode = 46052

console.log(firstname + ' ' + lastname + ', ' + housenumber + ' ' + street + ', ' + city + ', ' + state + ' ' + zipcode)
/*
STRING: PROPERTIES

Properties are qualities associated with a data type.
Strings have properties, or qualities associated with them.
The length of a string is a property.
*/

let myName = 'Rhianna';
console.log(myName.length);

/*
STRING: METHODS

Methods are tools that can help us manipulate data.
.property .method()
no parens   parens
*/

let myNameIs = 'Rhianna';
//Nothing in the ()
console.log(myNameIs.toUpperCase());

let home = 'My home is in Lebanon';
console.log('Included Method:', home.includes('Lebanon'))


//! Challenge

/* Use google, find MDN documentation for Strings, research  and use the split 
method to get an array back from this string. */

const str = 'This sentence will be split into individual parts.';
const strCopy = str.split(' ', 8);
console.log(strCopy)