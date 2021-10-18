/*
I. CLASSES 
    A. Can be defined by Declaration or Expression
    B. They are functions
    C. Classes act as blueprints for creating objects that share methods or properties.  Using this blueprint creates different "instances" of that class, and each object will have different values for the same properties they hold.
    D. the body of the class will be written between {}
    E. Constructor method is a special method for creating and initializing an object that was created with a class.
    F. Can use the "super" keyword
        A. super keyword is used to access and call functions from a parent class.
    G. Classes were introduced in Javascript in  ES5, currently using ES6
        A. They are a new way to write previous existing prototype-based inheritance
        B. These classes are the closest thing in vanilla JS to OOP (Object Oriented Programming)
            1. When a programming language will treat each individual object as containers that will interact throughout the program.
II. CLASS DECLARATIION
    A. no (), but must be capitolized
    B. start writing class inside {}
    C. inside class add a constructor
    D. then add (parameters); (make, model)-in example - then use keyword "this"
        1. set the current instanc of Automobile's make property to the parameter value of make
        2. this.make and this.model defines properties on the new instance of the Automobile object we are creating
        3. this. means the current copy of Automobile we are working with 
    E. {}
III.  Side note, HOISTING:
    A. Unlike function declarations, class declarations are not hoisted.  A class declaration must be declared before accessing it.
IV. CLASS EXPRESSION
    A.  can be named or not named
    B. the name given to an unnamed class expression is local to the classes body
        1. the name of a named class can be retrieved through the classes named property
    C. Unnamed
        1. Set it to a variable
        2. the name will be the variable we assign it to 
        3. will be named/called the variable name
    D. Named
        1. assing to a variable
        2. give it a class
        3. will be named the class
V. METHODS
    A. Functions passed into all instances of a class
    B. can be called and invoked just like any other function
    C. function that exists on an object 
    D. Definition, OLD SYNTAX
        1. const automobile ={
            start: function(){
            },
            stop: function(){

            }
        }
    E. PROTOTYPE METHOD: NEW SYNTAX
        1.const automobile ={
    start(){
        //do stuff here
    },
    stop(){
    }
}
VI. INSTANCES OF CLASSES
    A. NEW INSTANCES
        1. Using the "new" keword, we can create a new object/instance of a class
            a. make a variable
            b. set it equal to a new instance of Automobile class
            c. give it the name of the class I want a new instance of 
            d. then ()
                1. inside () put any properties constructor method needs.
VII. CONSTRUCTOR METHOD
    A. Helps create and initialize an object created from a class
    B. Works along with the 'new' keyword
    C. Needs to be included to create new objects and instances of our class
        1. sets properties
        2. passes vales for properties
    D. parameters will be the placeholders for values we want to be passed and stored in the object
    E. inside the constructor, create the keys that will hold the values
    F. names do not have to match
    G. Left side: declaring keys for the values we will pass on 
    H. Right side: assigning our passed values into the keys
    I. Left side: stores values for 'this' specific object being created
VIII.  EXTENDS
    A. EXTENDS is a key word used in class declarations or expressions to create a new child class.
        1. each new class created inherits the properties and methods from the parent class
        2. can also have its own methods and properties
        3. also known as a subclass
    B. 'super' has to be used before we can use 'this' - otherwise we get an error
    C. inside the (), we will pass in all properties that the parent class needs before assigning properties to the child class


*/

/*
CLASS DECLARATION EXAMPLE
*/
class Automobile{
    constructor (make, model){
        this.make=make
        this.model=model
    } 
}

/*
CLASS EXPRESSION EXAMPLE
*/
    // unnamed:
let Vehicle = class{
    constructor (make, model){
        this.make=make
        this.model=model
    }
}
console.log(Vehicle.name);
    
    // named:
let Auto = class Mobile{
    constructor(make, model){
    this.make=make
    this.model=model
    }
}
console.log(Auto.name)

/*
METHODS
*/
// new syntax - Prototype Method
const automobile ={
    start(){
        //do stuff here
    },
    stop(){
    }
}

class AutoMobile {
    constructor (make, model){
        this.make=make
        this.model=model
    }
    // Method 1
    start(){
        console.log(`This ${this.make} ${this.model}'s engine started.`);
    }

    // Method 2
    stop(){
        console.log(`This ${this.make} ${this.model}'s engine stopped.`);
    }
}

// NEW INSTANCE
const automobile ={
    start(){
        //do stuff here
    },
    stop(){
    }
}

class AutoMobile {
    constructor (make, model){
        this.make=make
        this.model=model
    }
    // Method 1
    start(){
        console.log(`This ${this.make} ${this.model}'s engine started.`);
    }

    // Method 2
    stop(){
        console.log(`This ${this.make} ${this.model}'s engine stopped.`);
    }
}

let hondaCivic = new AutoMobile('Honda', 'Civic');
// nameOfVariable.nameOfProperty
console.log(hondaCivic.make);
// name of variable.nameOfMethod()
hondaCivic.start()

let fordEscape = new AutoMobile('Ford', 'Escape')
fordEscape.start()
hondaCivic.stop()


/*
CONSTRUCTOR METHOD
*/

class Cookie{
    // parameters will be the placeholders for values we want to be passed and stored in the object
    constructor(type, icing, shape){
        this.t=type
        this.i=icing
        this.s=shape
        // names do not have to match
        // Left side: declaring keys for the values we will pass on 
            // Left side: stores values for 'this' specific object being created
        // Right side: assigning our passed values into the keys
    }
}

let chocolateChipCookie = new Cookie('chocolate chip', false, 'square');
console.log(chocolateChipCookie.t);
console.log(chocolateChipCookie.i);
console.log(chocolateChipCookie.s);
console.log(chocolateChipCookie);

/*
EXTENDS
*/

// PARENT
class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(`${this.name} eats their food.`)
    }
}
// SUBCLASS (CHILD)
class Dog extends Animal{
    constructor(name, breed){
        // 'super' has to be used before we can use 'this' - otherwise we get an error
        // inside the (), we will pass in all properties that the parent class needs before assigning properties to the child class
        super(name)
        this.type = breed
    }
    play(){
        console.log(`This ${this.type} named ${this.name} fetches the ball!`);
    }
}
const mastiff= new Dog('Maximus', 'Mastiff')
mastiff.play()
mastiff.eat()

/*
CHALLENGE: 
*/

class Cupcake{
    constructor(icing, batter, cost){
        this.i=icing
        this.b=batter
        this.c=cost
    }
    getPrice(amount){
        console.log(amount * this.c)
    }
}



const chocoCupcake = new Cupcake('carmel', 'chocolate', 3)
chocoCupcake.getPrice(3)