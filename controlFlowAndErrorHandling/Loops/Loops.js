//LOOPS

/*
Loops allow us to go over a block of information or code in the determined 
amount of cycles.  It's important to note that it is possible for us to write
code without declaring an endpoint.

Loops help us repeat a process without writing a lot of code.
*/

/*
STRUCTURE

We have to set-up our loops in a way that we can 
1) See where we are in a loop 
2) Consider what sort of condition we want to run it against.  
3) Note when we are done with that condition and move on with the next iteration.

We need to:
    1) Create an index
    2) Run a condition
    3) Change the indexing variable when we execute the condition
*/

//? Let's count to 10

for(let i = 0; i <= 10; i++){
    console.log(i);
}

/*
We state our loop with a 'for'. Within this function, we are injecting some parameters
that JavaScript will run against. index; conditon, change index -> to the result.

Within parameters, we are stating an index declaration to 0.  This is our baseline.  
We move on to asking if that variable is <= 10, take that set number and add 1 to it.  
Once that is processed, return that value (in this case 'console.log' of that number).
Once our condition is met, we return a false, which ends our loop.  

THIS is important to note: 
for(<create and index variable>);<run a conditon>; <change the index>){
    <return results>
    <continue until the condition is met>
}
*/

/*? If we don't indicate what our condition is, the loop will not have a finish line and 
thus run until we have to force close it. 
*/

//INFINITE LOOP!

/*
for( let 1 = 0; i++){
    console.log(i);
}
*/

//No condition means that JS doesn't know when to stop and will never assume that information.

//! CHALLENGE

/* Using a for loop, set an index to 2.  Make a condition where if that number is greater than -10,
change that index by subtracting 4 and console.log each iteration.
*/

for(i = 2; i > -10; i-= 4){
    console.log(i);
}

/*We aren't limited by positive or negative numbers.  We can even cycle thru variables
assigned with strings.
*/

let word = 'supercalifragilisticexpialidocious'

for(let b = 0; b < word.length; b++){
    // .length is a method we can use in JS that helps us determine a value we may not know
    console.log(b, word [b]);

    /*
    1) We set a value of each index and we are displaying that.
    2) We set to display the value within the 'object' of word.  Each character that is 
        assigned to the variable of 'word' is provided an index value and this is how we 
        are cycling thru it.
    */
   console.log(`The letter ${word[b]} is in the position ${b}`);

}

/*
FOR IN LOOPS

With FOR LOOPS, we are seeking an index value and running it against a condition.
FOR IN LOOPS, do not require an index number. 
*/

let city ={
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
}

//FOR IN LOOP
//let info - just naming the variable can be whatever
for(info in city){
    console.log(info);
   // console.log(city.name);
    //console.log(city.info); //city.info looks for city = {info:'value'}
    console.log(city[info]);
}

/*
for (variable in object){
    run code
}
*/

//FOR IN LOOP WITH AN ARRAY
//            0        1        2           3           4
let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];
/*
 let list ={
     0: 'milk';
     1: 'eggs';
     2: 'lunch meat';
     3: 'bread';
     4: 'bananas';
 }
*/

//Change 'items' to any other word to jog your memory on how this works.  "items"could be anything
for(items in list){
console.log(items);
console.log(list[items]);
}

//! CHALLENGE

/*
Write a for loop that loops over a name, and will capitalize the first letter, and make all other
letters lowercase
*/

let myName ='dwiGht';
let propCase;

for(let index = 0; index <= myName.length -1; index++){
    if(index === 0){
       propCase = myName[index].toUpperCase(); //propCase ='D'
    } else {
       propCase += myName[index].toLowerCase(); // 'D' + 'w' = 'Dw'
    }
}
console.log(propCase);

//FOR IN VERSION
let myName = 'dwIght';

let propCase;

for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() :
    propCase += myName[index].toLowerCase();
}
console.log(propCase);

/*
FOR OF LOOP

In order to run a FOR OF LOOP the 'thing' must be numbered like an array.
*/

//ERROR - because objects don't have numbers assigned to them like an [array] or 'string'
// let myObject = {
    // string: 'Peter',
    // boolean: true,
    // number: 1
// };

// for(item of myObject){
    // console.log(item);
// }
// Key: Value Pairs
let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray){
    console.log(pos, 'was run through a "for of" loop');
}

/*
for (variable of iterable){
    code goes here
}

*an interable is something that has numbers assigned to it like an array, where the first item
is assigned a 0, the second a 1, and so on... [eg. Arrays, Strings]
*/

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters){
    if(worker === 'Dwight' || worker ==='Michael'){
    console.log(worker, 'works in the office.');
}
if(worker === 'Jim' && worker !== 'Dwight'){
    console.log('Bear. Beets. Battlestar Galactica.');
}
}/*
 CHALLENGE:

 Write a for loop that counts from 1 to 100
  - for numbers that are evenly divisable by 3, print: 'FIZZ'
  - for numbers that are evenly divisable by 5, print: 'BUZZ'
  - for numbers that are evenly divisible by BOTH 3 and 5, print: 'FIZZ BUZZ'

 reminder: a number is evenly divisible by another nubmer when the remainder is 0;

*/

let output = "" 
for(let i = 1; i <= 100; i++) { 
   if(i % 3 == 0 && i % 5 == 0) { 
      output += i + " Fizz Buzz, " 
   } else if(i % 3 == 0) {  
      output += i + " Fizz, " 
   } else if(i % 5 == 0) { 
      output += i + " Buzz, " 
   } 
} 
console.log(output) 
