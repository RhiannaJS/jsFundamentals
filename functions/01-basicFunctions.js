/*
FUNCTIONS

Functions are processes that we call upon to run an action.  *A variable that does something*
    They can do the following:
     - Take in an input to process, modify, or respond to (not required)
     - Return a value (not required)+
     - Can be invoked (or called) as often as needed
*/

// (1)    (2)
function hi() {
    //(3)
    console.log('Hi!');
    //1: fuction keyword - we use this to define function
    //2: name of the function - this is how we will call the function
    //3: code goes here - this will be the "brains" of the function   
}
//CALLING THE FUNCTION
//aka putting the 'fun' in function
//in order to invoke (call) a function, we will simply write it's name and put () after it.
hi();

//console.log((hi));
/*When we console.log a function, JS will first evaluate the function, meaning it will run all
of the code and look for a value from it.  IF we do not have a return statement within the 
function, we will get back undefined
*/
//ABOVE ALL TOGETHER AS IT SHOULD BE
function hi(){
    console.log('Hi!');
}
hi();

//let myName ='Rhianna'

//function myNameCap(){
    //myName = myName.toUpperCase();
    //AVOID THIS IF YOU CAN (until much later)
    //THIS IS CALLED RECURSION
    //(calling a function within itself)
    //myNameCap()
//}
//myNameCap();

//console.log(myName);

let myName = 'Rhianna';

function myNameCap() {
    myName = myName.toUpperCase();
    hi();
    myNameCap();
}

function hi() {
    console.log('Hi!');
}
hi();


function myNameCap(){
    myName = myName.toUpperCase();
    hi();
}
console.log(`This is working ${myName}`);
myNameCap();

/*
FUNCTION DECLARATION

a chunk of code that performs a set chunck of code when it is invoked (or called.)
*/

function funcOne() {
    console.log(`This is the code that we run in function`);
}
//console.log(funcOne); funcOne will still refer to the function, but without () it will not invoke
funcOne();//we invoke (or call) a function by writing it's declared name followed by ()

/*
FUNCTION EXPRESSIONS

assigning a function to a variable is what we call an expression!
*/

let first = function funcTwo() {
    console.log(`Code being run in the function expression`);
}

first();

let example = function () {
    console.log(`What is my name?`);
}
example();

console.log(typeof example);//function
console.log(typeof example());//undefined

/*
ANONYMOUS FUNCTIONS

 - anonymous functions are stored in memory but the runtime does not automatically create a       reference to it.
 - the main use wdould be to pass these fuctions through another functions.  Maybe have aternary where if something is true we run on  functions, else we run a different function.
*/

// Common use would be to assign these to a variable
let anon = function(){
    console.log(`Anonymous Function`);
}
anon();

//EXAMPLE OF WRITING ANONYMOUS FUNCTIONS
//fetch('something')
//      .then(function(response)) { response.json() })

/*
PARAMETERS

We will be using fuctions to pass in information and return a result

Parameters will allow our function to take in outside information
*/



//return will essentially set the function = to something

// parameterFunc(7);
// parameterFunc('bruce');
// parameterFunc('another test');
// parameterFunc([1,2,3,4,5])
function parameterFunc(num) {
    console.log(num + 1);
    return num + 5; //return sends back a value for the function when it is run
}
let returnTest =15
parameterFunc(returnTest); 
console.log(parameterFunc(returnTest));

let myReturn = parameterFunc(returnTest)
console.log('RETURN:', myReturn);

let firstName = 'Jane';
let lastName = 'Doe';

function greeting(first, last){
    console.log(`Hi, ${first}! Welcome back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`);
}
greeting(firstName);
greeting(lastName);
greeting();
greeting(firstName, lastName);
greeting(firstName, null);
greeting('', lastName);