/*
What is a variable?

Variables are named containers sorting data.
We can think of these containers as resources we can call upon later.  Each 
variable  allows us to store data, which could be a value or a function, that we
will want to reference back to.



*/

let a = 2;

/*

"let" is our KEYWORD
"a" is the name of our VARIABLE
"="" is an ASSIGNMENT OPERATOR
"2" is our variable's VALUE

*/

let b = 1;

console.log(a +b); //What should we get?

/*
Restrictions with Variables

- a variable must begin with a letter, underscore or dollar sign.
- numbers may follow those characters, but cannot come first in the name.
- javascript is also case sensitive - 'hello' and 'Hello' are different variables.
- no spaces are allowed in variable names
- camelCase is best practice for naming variables in js.  This will help keep names 
of variables readable.
    ex:
        let myName = 'Rhianna'; 
        is easier to read than
        let myname = 'Rhianna';


*/

let startingWithLetter = 'works';
let _startingWithUnderscore = 'works';
let $startingWithDollarSign = 'works';
// let 5startingWithNumber = 'breaks'; //CANNOT start a variable with a number
// let -startingWithDash = 'breaks'; // cannot start with a -

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign)

// crtl + alt + n will run code runner (windows)

/* 
KEYWORDS

var, let, const

- var: the 'old' keyword for variables.  We will not use this much, but it is still
used depending on the project and when it was made.  We will focus on let and const.

- let: the 'new' keyword for variables which was introduced in ES6 *newest version of ECMAScript, which is 
standardization of JS

- const: also 'new' and declares an unchangeable, or constant, variable
The only limit to const variables is that once they are declared/assigned their value wll NEVER change.
*/

var variable = 'var variable';
let letVariable = 'let variable';
const constVariable = 'const variable';

console.log(variable, letVariable, constVariable);

/*

Declarations are the LEFT SIDE of the assignment operator (=) within a variable

    -let x

Initializations are the RIGHT SIDE of the assignment operator (=) and sets the value of the variable.
    - let x = 10
        10 would be the initialization

*/

let x;
console.log('Declaration:' ,x);

x = 10;
console.log('Initialization1:', x);

x = 33;
console.log('Initialization2:', x);

let y = 'Hello';
console.log('Both', x,y);

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa); //Great! Wonderful!

today = 'Awesome!';
console.log(today, efa); //Awesome! Wonderful!

//efa = 'Super!';
//console.log(today, efa); //Awesome! Wondeful! /error

//const example; //Error
//example = 'Testing';
// console.log(example);//