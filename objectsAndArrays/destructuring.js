/*
I. Array destructuring
    A. lets us unpack values from arrays into distinct variables (or properties from objects)
    B. similar syntax to an array literal
        1. but will be on the left side of the assignment operator
        2. this will define what values to unpack
    C. great for pulling information out of an array/object, assigning that data to its own variable
II. Rest Operator
    A. Using the rest operator will look almost exactly like using the spread operator.
      1. The differences being, spread, expands an array into it's elements
      2. Rest collects multiple elements and condenses them into one element.
      3. Rest MUST be the last elemet deifned using array destructuring
III. Object Destructuring
    A. First we need an OBJECT
*/

const boardGames = ['Catan', 'Monopoly', 'Clue']
console.log(boardGames[0])

let recs = [
    {
        ID: 1,
        NAME: "John",
        EMAIL: "john@example.com",
        SSN: "123",
    },
    {
        ID: 2,
        NAME: "Sally",
        EMAIL: "sally@example.com",
        SSN: "456"
    },
    {
        ID: 3,
        NAME: "Angie",
        EMAIL: "angie@example.com",
        SSN: "789"
    }
];

// console.log(recs.user1.ID, recs.user1.NAME, recs.user1.EMAIL)

recsMap = () => {
    return recs.map(() => {
        return(
        recs[0].ID, recs[0].NAME, recs[0].EMAIL, recs[1].ID, recs[1].NAME, recs[1].EMAIL, recs[2].ID, recs[2].NAME, recs[2].EMAIL
        )}
        )    
}

console.log (recsMap())

console.log(recs[0].ID, recs[0].NAME, recs[0].EMAIL, recs[1].ID, recs[1].NAME, recs[1].EMAIL, recs[2].ID, recs[2].NAME, recs[2].EMAIL)



// array destructuring syntax (can also use let)
const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne);
console.log(gameTwo);
// if gameThree is not defined in the const array(destructuring), it will ignore the value - works based on position/index of the array
console.log(gameThree);

// REST OPERATOR
const hitchhikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {
    day: 'Thursday', answer: 42
}]

let [charOne, charTwo, ...otherInfo] = hitchhikersGuide;
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);

const harryPotter = ['Snape', 'Moaning Myrtle', 'Harry', 'Ron', 'Hermione', 'Dumbledore']
let [firstName, secondName, thirdName] = harryPotter;
console.log(firstName, secondName, thirdName)

let [first, second, ...mainCharacters] = harryPotter;
console.log(first, second, mainCharacters);

let [, , ...mainCharacters] = harrypotter;
console.log(mainCharacters)

// OBJECT DESTRUCTURING

const game = {
    title: 'Legend of Zelda: Breath of the Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii U']
}

const { title, developer, platform } = game; //must be specific keys we want from the object//
console.log(title);
console.log(developer);
console.log(platforms);

const games = [
    {
        title: 'Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: ['Nintendo Switch', 'Wii U']
    },
    {
        title: 'Bloodborne',
        developer: 'From Software',
        platforms: ['PS4']
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: ['PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintendo', 'Switch', 'PSVita', 'iOS', 'Android']
    }
];

const [{ title: gameOne, developer: devOne }, gameTwo, { title: gameThree }] = games
console.log(gameOne, devOne)
console.log(gameTwo)
console.log(gameThree)

for (let { title, developer } of games) {
    console.log(`${title} is developed by ${developer}.`);
}
