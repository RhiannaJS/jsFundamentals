const baseUrl ='https://api.spacexdata.com/v2/rockets';

const searchForm = document.getElementsByTagName('form')[0];
const spaceShips = document.querySelector('ul'); //gets the first ul tag (tag/class/id combo we give it in the string)

searchForm.addEventListener('submit', fetchSpace) 

function fetchSpace(e){
    e.preventDefault(); // this will stop the page from reloading when we submit our form.  It prevents a default action by the browser.
    
    console.log('Clicked!');
    fetch(baseUrl) //starts the processing of fetching information from our resource
                    // .then(/* function goes here*/)
    .then(result =>{// when we have a promise, we can call a method called 'then()'.  This will be given a callback fuctin to send the result into
        console.log(result);
        return result.json(); //this will translate our result into json, which will be more easily readable and accessible within our app
    })//.then()also returns a promise, meaning if we want to continue to run code after one is done, we can just add another .then().
    .then(json =>{
        // console.log(json);
        displayRockets(json);

        function displayRockets(data){
            console.log('Inside displayRockets:', data) 
    data.forEach(rocket => {
        console.log(rocket.name);
        let listItem = document.createElement('li');//creates an empty <li></li> tag in the HTML
        listItem.innerText = rocket.name; //change the text of the item  The tag now looks like this: <li>rocket name</i>
        spaceShips.appendChild(listItem) //will add one of our tags into another tag. In this case we are adding list item into the <ul>
        /* container.appendChild(itemInContainer)*/
    })          
    }
})
}

// *optional challenge
// Add a table to the HTML page, and comment out the ul 
// comment out the above forEach loop and make a new one
// inside of each new row, add the name and cost of each rocket





/* HOISTING MINI LESSON 
// JS will compile code reading from top to bottom, BUT it actually reads code twice.  THe first time it reads code, it will store anything in memory such as: variable names, functions (when using the keyword)

    console.log(fetchSpace(1)) //hoisting function
    console.log(mayVar1);// error: cannot access before intialization
    console.log(myVar2);// undefined
myFunc();// error:  cannot access before initialization

let myVar1 = 'Awesome';
let myVar2 = 'Not Awesome?'

let myFunc = () => {console.log ('Arrow test')};

function fetchSpace(1){
    return e;
}*/

