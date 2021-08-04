/*
I. SPREAD OPERATOR
    A. Used when working with arrays
    B. spread operator is ...
    C. can be used to copy an array, and change it, while keeping the original copy
    D. If you are not doing anything with the Spread Operator, you cannot use it.
    E. console.log(nameTwo) gives [ 'Adam', 'Hustin' ]
    F. console.log(...nameTwo) gives Adam Hustin
II. ...numbers
    A. Math.min() will give the lowest number
    B. Math.min() expects a number
    C. Use (... prices) gives the value of ever number in the array.
III. ...objects
    A. Example is not saying my house looks like your house, it is saying my address is your address
    B. If we have a primitive variable = primitive value
        1. variables/values  x=10, y='abc', z= null
        let x=10 let y='abc', let z=null
    C. If we make another variable using these variables, it retains the current value
        1. let a = x, let b = y,
        the value of a is x(10) from the previous variable, the value of b is 'abc' from the value of the previous variable.
        console.log(x, y, a, b) -> 10, 'abc', 10, 'abc'
        2. If I change the value of a and b, it will not change the value of x and y
        a=5, b='xyz'
        console.log(x,y,a,b) -> 10, 'abc', 5, 'xyz'
    D. 3 Data types that are passed by reference:
        1. arrays
        2. functions
        3. objects
        *notice all 3 are technically objects*
        4. These non-primitive variables are given a reference to the value they 'contain' - this reference 'points' to a location in memory.
    E. Objects created in a space of computers memory.
    F. Spread operator ... & avoiding changing both the original and copied array
        1. You have to copy the array and each individual object
*/


// Spread Operator
const nameOne = ['Summer', 'Jerome'];
const nameTwo = ['Adam', 'Hustin'];
const copiedNames = ['Levi', nameOne, nameTwo];
// console.log(copiedNames);

const copiedNamesSpread= ['Levi', ...nameOne, ...nameTwo];
nameOne.unshift('Justin');
console.log('Altered:', nameOne, 'Spread:', copiedNamesSpread);

console.log(nameTwo);
console.log(...nameTwo);


// ...numbers
console.log(Math.min(1, 5, -3));
const prices = [10.99, 5.99, 3.50, 2.49, 5.49];
console.log(Math.min(...prices));

console.log(Math.random() * 100) > 50 ? 'Heads' : 'Tails');


// ...objects
const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo (from The Matrix)',
        enemies: true
    }
];

const copiedPersons = persons;
persons.push({name: 'Bill and or Ted', enemies: false});
console.log('original:', persons, 'copy:', copiedPersons);

/* Objects D. example
let arr = [];
arr.push(1);

VARIABLES       VALUES      ADDRESS     OBJECT
arr             <#001>      #001        []
arr             <#001>      #001        [1]
**value doesn't change
**
____________________________________________________________

let reference =[1]
let refcopy = reference

VARIABLES       VALUES      ADDRESS     OBJECT
reference       <#001>      #001        [1]
refcopy         <#001>

reference.push(2);
console.log(reference, refcopy)
reference.push(2)
refCopy.push(3)
console.log(reference, refcopy)

person(s)       house       addess      
VARIABLES       VALUES      ADDRESS     OBJECT
reference       <#001>      #001        [1,2] - a person
refcopy         <#001>                        - his roommate, they have the same address
*/


//copiedPersons its own array with all the values of persons

const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo (from The Matrix)',
        enemies: true
    }
];

const copiedPersons = [...persons]; //make it an array with spread operator 
persons.push({name: 'Bill and or Ted', enemies: false});
copiedPersons[0].name='Birdperson';
console.log('original:', persons, 'copy:', copiedPersons);

// now the copy has a new address, it is the neighbor
// out of persons array and into a new array

/*
F. example
*/

const comics = [
    {
    title: 'Spider-Man',
    year: 1962,
    },
    {
    title: 'Detective Comics',
    year: 1939,    
    }
]
// current item, 1st param; index, 2nd param,;         ,third param? 
const copiedComics= comics.map(comic=> ({
    title: comic.title,
    year: comic.year
}))
comics.push({title: 'Calvin and Hobbes', year: 1985})
copiedComics[1].title='Detective Comics #27';
console.log('OR:',comics,'CP:',copiedComics);

