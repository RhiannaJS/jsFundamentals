/*
I.  ASYNC/AWAIT
    A. Allows us to program in a synchronous manner while still allowing code to run in the background.
    B. Helps keep our sites responsive.

II. Async Function (syntax)
    A.  allows us to make a normal function asynchronous:  which means we can use await
    B.  must us the async keyword at the beginning of the function declaration.

III. AWAIT
    A. pauses an async function until a promise is settled (either resolved or rejected.)

*/

async function myFn(){
    await console.log('testing');
}

myFn();

const myAsyncFn = async() => {
    await console.log('testing');
}

myAsyncFn();

const newFn = ()=> {
    await console.log('testing');
}

newFn();//error not an async function - await is only valid in an async function

async function fn(){
    return 'hello';
}

fn().then(console.log)// Promise of 'hello' returned -> then console.log the value

fn().then(dataFromAsyncFunc => console.log(dataFromAsyncFunc))//arrow function that does the same thing as line 34

// USING FETCH AND .THEN CHAINING
fetch('https://random.dog/woof.json')
    .then(result => result.json())//takes in result, translates it into a json
    .then(json =>console.log(json))//print that json in the console
    .catch(error =>console.log(error))// print any errors that might happen

// USING ASYNC
/*
- starts with async function
- await - first stop is going to be waiting for the fetch to get a response
- await - second stop is waiting for the response to be translated into a json
*/

async function getWoof(){
    const response = await fetch('https://random.dog/woof.json')
    const json = await response.json();
    return json;
}
getWoof().then(console.log)

