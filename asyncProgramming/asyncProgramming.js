/*
ASYNCHRONOUS PROGRAMMING

Generally, JS is read from top to bottom, performing each line of code one after anotherr - this is known as sychronous programming.
 - ex. line 1 is run and completed befroe line 2 begins, which is then run and completed before line 3, etc.
    - This can become an issue when we fetch, or gahter, information from an outside source, from something such as an API.  If JS did not have the ability to run code asynchronously, we would be forced to wait for our line of code to finish as it tried to gather mountains of data from a database.  Asynchronous code will allow us to somewhat ignore the one line at a time rule.

    - Asynchronous programming allows a program to do more than one thing at a time.
    - Makes it possible to run long-running actions without stopping the program to wait for a response.

*/

// Synchronous code
const secondSync = ()=> {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}
firstSync();

// Asynchronous Code
// setTimeout() has 2 variables, a callback function(A function we pass into a parameter) then how many milliseconds it will wait to call the callback function
//  setTimeout is a method that will work in the browser and node.  JS - we are using it to simulate a network request
const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code');
    }, 2000)
}

console.log('Hello World');
networkRequest();
console.log('The End');

/*
API

-Application Program Interface
 - Allows us to communicate with other programs, a database or the server.  API is not a database or server itself.  It is the code with acceess to the server.

ENDPOINTS
 - access to a server will come in the form of ENDPOINTS
 - ENDPOINTS direct us to sets of data

 REST API
  - we will interact with a REST API - REST stands for REpresentational State Transfer
  - creates an object of requested data from the client, and sends values back as a response.

  METHODS:
  CRUD
   - Create
    - (POST request to the API)
   -Read 
    - (GET requesst to the API)
   -Update
    - (PUT request to the API)
   -Delete
    - (Delete request to the API)
    // We will talke more about these in detail during blue badge/

FETCH()
- The fetch method is an asynchronous method, and is part of the browser window, NOT JS.  
- This method will start the process of 'FETCH'ing or grabbing a resource from the network, and will return a promise which is fulfilled when the response is available.

PROMISE is an unknown value that will eventually be filled with either a value or a rejection (error)
PROMISE HAS THREE STATES:
- PENDING: initial state, neither fulfilled or rejected
- FULFILLED: meaning the operation completed sucessfully
- Rejected: meaning the operation failed.
*/
