// Configure our app to use an env file - couldn't reference variables in this file, without this.
require('dotenv').config();

// Import the express framework
const Express = require('express');
// const db = require("./db");
const dbConnection = require("./db");

// make a local instance of the express framework
const app = Express();


app.use(require("./middleware/headers"));

app.use(Express.static(__dirname + "/public"));
console.log(__dirname);

app.use(Express.json());
app.get("/", (req, res)=> res.render("index"));
const controllers = require('./controllers')

app.use("/user", controllers.userController);
app.use('/joke', controllers.jokeController)
// below the const Express = require("express")

// Serving a static file
// app.use(Express.static(__dirname + '/public'));
// console.log(__dirname);

// http://localhost:4000/ - line below is a route for our server
// app.get('/', (request, response)=> response.render('index'));


// import the controllers


// http://localhost:4000/joke
// app.get('/joke', (req, res)=> res.send('I\'m so punny'))


dbConnection.authenticate()
.then(() => dbConnection.sync())  //=>{force:true}
.then(()=>{
    // have our app "listen",or run on a specific port 
    app.listen(process.env.PORT, ()=>{
        console.log(`[Server]: App is listening on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("[Server: ] Server Crashed");
    console.log(err);
})
