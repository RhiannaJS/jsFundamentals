/*
ARRAYS
 - Populating and Referring
 - Methods
 - Length
 - Iterating
*/

// POPULATING AND REFERRING
// to refer to an item in an array, we have to use a (name of variable[the # in the array]) notation
//             0          1        2
let list = ['orange', 'banana', 'oreos'];
console.log(list[1])

/*
 - when we call an array, we can append, or add, square brckets onto the end of the array name with the index number of the value we want to reference.  This is known as SQUARE BRACKET NOTATION.

  - javascript starts counting at 0, so when we console.log(list[1]) we should see 'banana'
*/


/*
let students = {
    0: 'Evan'
    1: 'Ricky'
    2: 'Kali'
}
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 5];
console.log(students[10]);
console.log(typeof students);
console.log(students instanceof Array);// true but lowercase array = undefined
//the instanceof operator is used to check the type of an object at run time.  Remember arrays are technically objects
// you can use - Object, -Number, -Boolean, etc

/*
console.log from the students array 
 - the name Matthew (the first one)
 - the number 25
 - the phrase "Shake n Bake"
 - print out 'Hello Sophie'
*/

let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 5];
console.log(students[4]);
console.log(students[7]);
console.log(students[9][1]);
console.log(`Hello ${students[9][2]}`);//interpolate
console.log(`Hello `, students[9][2]);//console.log 2 things
console.log(`Hello ` + students[9][2]);//concatinate

// ARRAY METHODS
/*
We can call upon multiple different array methods that will allow us to manipulate arrays as we need to. 
*/

// Use an array method to add to our array(.push)

let food=['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.push('Pizza', 'Spring Onion'); //.push will add a value to the end of the array. These will be at the end of the array
console.log(food.push('Spring Onion'));//gives me length of the array
console.log('push:', food);


// Method to remove from an array

let food=['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
// food.push('Pizza', 'Spring Onion'); //.push will add a value to the end of the array
console.log(food.push('Spring Onion'));//gives me length of the array
console.log('push:', food);
food.pop();//should remove the last item from the array
console.log('pop:', food);

/*
Remove an item from the beginning of an array or add to the beginning of an array
*/

// Remove from the beginning of an array
let food=['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.push('Pizza', 'Spring Onion');
console.log(food.push('Spring Onion'));//gives me length of the array
console.log('push:', food);//adds item to the end of an array
food.pop();//removes last item in the array
console.log('pop:', food);
food.shift(); //takes first item out of the array
console.log('shift', food);
food.unshift('Chicken', 'Garlic');//add an item to the beginning of an array
console.log('unshift:', food);
food.splice(2, 2, 'Bananas');//remove and insert from an array
console.log('splice', food);
food.splice(1, 0, 'Ice Cream');//inserts ice cream into the position of 1
console.log('second splice:', food);
/*
Add to the middle of an array with .splice()
(position to remove, how many to remove, and what to add in that location)
*/

// LENGTH - need the last item of an array but don't know how long it is
// console.log(name of array.length);
// SUPER HELPFUL IN A FOR LOOP &  WHEN DEALING WITH API'S
let long = [0,1,2,3,4,5,6,7,8,9,10]
console.log(long.length);//(name of the array .length)

let colors =['blue', 'green', 'yellow', 'red', 'orange', 'purple']
console.log(colors.length);//6

/*
ITERATING

forEach-
    - the forEach() method executes a provided function once for each element in an array
    - the forEach() method does the same thing as a for loop or a for of loop - both iterate over the properties in an array
    - when using a forEach() we will provide a callback function that has up to 3 argument:
    1. The value.
    2. The index.
    3. The array object itself.
*/


// a CALLBACK function is a function that is either called or passed as a parameter to another function
let colorList = ['magenta', 'midnight blue', 'mahogany','pthalo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];
for(let i=0; i < colorList.length; i++){
    console.log(colorList[i]);
}


    //how do we make an arrow function
let something = (color) => { /*code goes here*/}
colorList.forEach(color => console.log(color);

let colorList = ['magenta', 'midnight blue', 'mahogany','pthalo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

colorList.forEach(color => console.log(color))


let colorList = ['magenta', 'midnight blue', 'mahogany','pthalo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

let logItem = item => console.log(item);
colorList.forEach(logItem);

// More than one parameter

let colorList = ['magenta', 'midnight blue', 'mahogany','pthalo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];
colorList.forEach((item, index) => {
    console.log(item);
    console.log(index);
})

// .splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// At position 2, remove 2 items: 
fruits.splice(2, 2);
console.log(fruits)

// .concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const children = arr1.concat(arr2); 
console.log(children)

// .copyWithin()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruits)

// .entries()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f)

// .indexOf()
const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", 3);
console.log(index)

// .pop()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop()
console.log(fruits)
// console.log(fruits.pop())
// let removed = fruits.pop();
// console.log(removed)

// .slice()
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)

// .every()
const ages = [32, 33, 16, 40];
ages.every(checkAge);

function checkAge(age){
    return age > 18;
}

console.log(ages.every(checkAge))

// .isArray()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);
console.log(result)

// .reverse()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits)

// .some()
const ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age > 18;
}
ages.some(checkAdult);
console.log(ages.some(checkAdult));

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return b-a
});
console.log(points)

