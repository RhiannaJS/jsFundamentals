/*
ARROW FUNCTIONS

 - arrow functions are expressional functions that can be simplified into one of two forms: concise body and Block body.  The main goal is to generate shorter syntax for writing a function.
*/

//Regular Function

function regFunc(){
    console.log('just a regular function');
}
regFunc();

//ARROW FUNCTION
//    (1)       (2)          (4)
let arrowFunc = () => console.log('function in one line');
arrowFunc();

/*
    1: A variable created to hold the value of our anonymous arrow.
     - arrow functions are always anonymous
    2: Parameters are still capable of being added 
     - Parameters go in the () as they would with a normal function, but if we only have 1 parameter, then we do not need ().  If we have no parameters we are still required to put empty ().
    3: 'How we see an arrow'. This is JS syntax that says we are about to process a function
    4: The code the arrow function will run, or execute i.e. 'Do this'
*/

let arrow = (x) => console.log(x);
arrow(10);

//! CONCISE vs BLOCK BODY
// CONCISE BODY
/*
When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise, simplified way.  When we use a concise body arrow function, the 'return' statement is implied (meaning we do not have to write it)
*/

                        //implied return
let conciseBody = (x,y) => x + y;
let result = conciseBody(1,2);//return sets conciseBody(1,2) = 3
console.log(result);
console.log(conciseBody(1, 2));
//in line 37, conciseBody becomes a variable that holds the value of 3

let slightlyComplexConcise = (x, y) => x > 2 && y < 2 ? 
console.log(`${x} is greater than 2 and ${y} is less than 2`) : 
console.log(`${x} and ${y} are where we want them`);

slightlyComplexConcise(3, 1);

//BLOCK BODY
/*
In a block body, the return keyword is required.  We will also include curly braces.  Sometimes it will make sense to use block body if we need to do multiple lines of code.
*/
//ANY code below the return statement in a function will be ignored.  If we write code below it, it will not run

let blockArrow = (x, y) => {
     return `${x} and ${y} are in a block body arrow function`
}
blockArrow(1, 2);
console.log(blockArrow(1, 2));



letblockArrow = (x,y) => {
    return `${x} and ${y} are in the block body arrow function`
}
let blockResponse = blockArrow(1, 2);
console.log('RESPONSE:', blockArrow(1,2));

//! CHALLENGE
//Re-write function below as a CONCISE BODY function
let hero = 'Robin Hood';
let knock = 1;

function shot(x,y) {
    y < 3 ? console.log(`${x} only shot ${y} arrow ...`) : 
    console.log(`${x} shot ${y} arrow at the target`);
}


let hero = 'Robin Hood';
let knock = 1;

let shot = (x, y) => y < 3 ? console.log(`${x} shot ${y} arrows at the target`) :
console.log(`${x} shot ${y} arrow at the target`);

shot(hero, knock);

/*
Using a block body, pass the same varibales but increase the number of shots until the second console.log is printed
*/

let hero = 'Robin';
let knock = 1;

let shoot = (x, y) => {
    for(y; y < 4; y++){
    if(y < 3) {
        console.log(`${x} shot ${y} arrow ...`)
    }  else {
    console.log(`${x} shot ${y} arrows at the target!`)
    }
}
}
shoot(hero, knock)
