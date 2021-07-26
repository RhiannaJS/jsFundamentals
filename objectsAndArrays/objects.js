/*
OBJECTS
 - objects are used to store multiple sets of data in the key/value pair format
 - denoted by {}

 Start by creating a variable let=_blank {
     name: value,
 }

 To console.log this, if we know the key/value of the information we are looking for, we will use dot notation
*/

let netflix ={
    id: 1,
    name: 'The Office',
    genre: 'Comedy',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {
                    episode: 1,
                    episodeName: 'Pilot'
                },
                {
                    episode: 2,
                    episodeName: 'Diversity Day'
                },
                {
                    episode: 3,
                    episodeName: 'Health Care'
                },
                {
                    episdoe: 4,
                    episodeName: 'The Alliance'
                },
                {
                    episode: 5,
                    episodeName: 'Basketball'
                },
                {
                    episode: 6,
                    episodeName: 'Hot Girl'
                }
            ]
        }
    }
}
console.log('All data:', netflix);
console.log('Just season info:', netflix.season1.seasonInfo);
console.log(`Episode ${netflix.season1.seasonInfo.episodeInfo[4].episode}:`, netflix.season1.seasonInfo.episodeInfo[1].episodeName)

/*
CHALLENGE
console.log any single episode name from season 1
*/

/*
JSON OBJECTS
- JSON stands for JavaScript Object Notation
- The JSON syntax is derived from JavaScript Object syntax, but the JSON format is text    only.
-JSON exists as a string - useful when fetching data from a server.  Before we can use it, it needs to be translated into a JS object.
- JSON Objects keys/values are in ""

- JSON Formatter
*/

/*
We can use some Object methods to help us gather information we might not know.
Use an object method that will tell us all of the keys within an object
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
//This gives us the index numbers for the string 'Daffy Duck'
console.log(Object.keys(spaceJam.toonSquad.duck));
//This gives us an array with the values of each key in an object
console.log(Object.values(spaceJam.toonSquad));

/*
OBJECT BRACKET NOTATION

 - Object Bracket Notation can allow us to find a value in an objec we wouldn't be able to access using dot notation.
 - we can also use OBJECT BRACKET NOTATION to store a key in a variable and use that variable to access information in an object.
 -this works because all key names in an object are strings
*/

let garden = {
    vegetable: 'Zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

//Dot Notation - will typically use dot notation, only Square Bracket if we have to
console.log(garden.flower);

//Square Bracket Notation
console.log(garden['flower']);

//Makes Zucchini a key and assigns the value of 'better make some bread!'
let baking = {};
baking['Zucchini'] = 'better make some bread!';
baking.bakeTime = 60;
console.log(baking);

let garden = {
    vegetable: 'Zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10
}
console.log(baking[garden['vegetable']]);

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}
console.log(testObj.noSpaces);
console.log(testObj['Spaces Here']);

