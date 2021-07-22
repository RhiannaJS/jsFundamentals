/*
CONDTIONALS

FALSY VALUES:
    A falsy value is a value that is considered false when 
    encountered in a boolean context.  There are 6 falsy values in JS:
    - false
    - 0
    - "", '', ``
    - null
    -undefined
    -NaN (not a number)

    What does this mean?  Whenever JS is expecting a boolean value
    and is given one of these 6, it is evalutated as false.

    side note: there are also Truthy values in JS, which tend to be
    much less limited. 
        Examples include: 
            -true 
            -{} 
            -[] 
            -3.14 (any decimals)
            -42 (any number)
            -"false" (a string, it has value, any non-empty string)
    if something has value, it is true.  If it does not have value, it is false.
*/

//test if fractions are truthy.

/*
IF STATEMENTS

When we use camparison operators, we typically are asking if we can 
move on to the next section of code.  "If" something is true, do "this thing"
*/

// keyword      expression
if         (true) {
    //code to run if the expression evaluates to true
    
}
// condition
if (false) {
    console.log('Falsy Test');
    
}



let light = 'on';

if(light == 'on'){
    console.log('The light is on');
}

let weather = 65;
let rain = true;

if (weather < 70 && rain == true){
    console.log('Maybe wear a jacket');
}

//! Challenge

let batman = 'is the night';
let bruce = 'false';
// / !bruce will check that bruce is not equal to true
if(!bruce == true && batman == 'is the night');{
console.log('Batman');
}

/*
IF ELSE

We can think of this as not only providing an answer if our condition 
evaluates to be true, but also if it ends up being false.
*/

let today = 68;

if(today < 70) {
    //                  string interpolation
    console.log(`It's ${today}, wear a jacket!`);
} else {
    console.log(`It's ${today}. No jacket needed!`)
}

/*
ELSE IF

this is a condition that will be checked if the above condition was not met

*/

let cooktime = 60;
if(cooktime === 45){
    console.log('Let us feast!');
} else if(cooktime > 45){
    console.log(`It has been ${cooktime} minutes??? Might need a glass of water with 
    this one!`)   
} else if(cooktime >= 30){
    console.log(`It has only been ${cooktime} minutes.  Wait another 5-15 minutes.`);
} else if(cooktime >= 20) {
    console.log(`It has only been ${cooktime} minutes.  Wait another 10 - 25 minutes.`);
} else {
    console.log(`It has only been ${cooktime} minutes.  Perhaps we could at 
    least try cooking it...`);
}

//! CHALLENGE

let age = -19;
if(age <= 17) {
    console.log("Sorry you're too young to do anything.'");
} else if(age >= 18 && age < 21) {
    console.log('You can vote!');
} else if(age >= 21 && age < 25){
    console.log('You can drink!');
} else if(age >= 25) {
    console.log('You can rent a car!')
}

// or you can do this

let age = -19;

if(age >= 18) {
    console.log('You can vote!');
} else if(age >= 21){
    console.log('You can drink!');
} else if(age >= 25) {
    console.log('You can rent a car!')
} else {
    console.log("Sorry, you're too young to do anything!")
}

/*
TERNARIES

They are if/else statements but they look weird!
*/
//IF ELSE
//condition
let myName = 'Rhianna';
    //if true run this
if(myName === 'Rhianna') {
    console.log(`Hi, ${myName}!`);
} else { 
    //else run this
    console.log(`Not sure I know ${myName}`);
}
//TERNARY
// condition ? if true : else result
//condition                  If true run this           else run this
myName === 'Rhianna' ? console.log(`Hi, ${myName}!`) : console.log
(`Not sure I know ${myName}`);

let hero = 'Batman';
let villain = 'Mr. Freeze';

hero == 'Batman' && villain == 'Riddler' ? 
console.log('What has a head and a tail but no body?') : 
hero == 'Batman' && villain == 'Joker' ? 
console.log('Why so serious?') : 
hero == 'Batman' && villain == 'Mr. Freeze' ? 
console.log('Ice to meet you!') : 
console.log(`${hero} is the night!`);

//! Challenge

let lampOn = false;
let dayTime = true;

lampOn == true && dayTime != true ? console.log('The lamp is on during the night') : 
lampOn != true && dayTime != true ? console.log('The lamp is off during the night') : 
lampOn == true && dayTime == true ? console.log('The lamp is on durig the day') :
lampOn != true && dayTime == true ? console.log('The lamp is off during the day') :
console.log('What lamp?');

/*
SWITCH STATEMENTS

    The switch statement executes a block of code depending on different cases
*/
let instructor = 'Summer';

switch(instructor){
    //if instructor === 'Jerome'
    case 'Jerome': 
        console.log(`${instructor} is a part of the Web Development Team`);
        // same as } to an if statement
        break;
    case 'Summer':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Josh':
        console.log(`${instructor} is a part of the Software Development Team`);
        break;
    // else {
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
    }  

let staff = 'Amanda';

switch(staff) {
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case 'Hustin':
        console.log(`${staff} is a part of the Web Development Team.`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
        console.log(`${staff} is a part of the Software Development Team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${staff} teaches.`);
}

let switchConditional = 'example';

switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean'){
    case true:
        console.log(`${switchConditional} is a string or boolean!`);
        break;
    default: 
        console.log(`${switchConditional} is NOT a string or boolean`);
}

// When we use || (or) only one side of the || needs to be true for the expression to be true

// When we use && (and) BOTH sides of the && need to be true for the expression to be true.

//! CHALLENGE

/* 
Create a switch statement that takes in a value (number) that represents a grade.
If it is True, console log that they are passing with the correct letter grade.

*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59

*/

let grade = 0;

switch (true) {
    case grade >= 89:
        console.log(`They are passing with ${grade}, you have an A`);
        break;
    case grade >= 79:
    console.log(`They are passing with ${grade}, you have a B`);
    break;
    case grade >= 66:
    console.log(`They are passing with ${grade}, you have a C`);
    break;
    case grade >= 59:
    console.log(`They are passing with ${grade}, you have a D`);
    break;
    case grade >= 0:
    console.log(`They are failing with ${grade}, you have an F.`);
    break;
    default:
    break;
}

//! Challenge

//! Switch

let character = '';

switch(true) {
    case character === 'Michael':
        console.log(`That's what she said!`);
        break;
    case character === 'Dwight':
        console.log(`It's not weed! It's hemp!`);
        break;
    case character === 'Jim':
        console.log(`Bears. Beets. Battlestar Galactica.`);
        break;
    default:
        console.log(`*slow camera zoom*`);
            
}

// Alternative Switch

let character = 'Dwight';

switch(character) {
    case 'Michael':
        console.log(`That's what she said!`);
        break;
    case  'Dwight':
        console.log(`It's not weed! It's hemp!`);
        break;
    case 'Jim':
        console.log(`Bears. Beets. Battlestar Galactica.`);
        break;
    default:
        console.log(`*slow camera zoom*`);
            
}







// ! Ternary

let character = 'Jim';

character === 'Michael' ? console.log(`That's what she said!`) : 
character === 'Dwight' ? console.log(`It's not weed! It's hemp!`) :
character === 'Jim' ? console.log(`Bears. Beets. Battlestar Galactica.`) :
console.log(`*slow camera zoom*`);



