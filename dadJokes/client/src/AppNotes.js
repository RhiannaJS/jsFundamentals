import logo from './logo.svg';
import './App.css';


/* 
Name Casings
-camelCasing javascript
-snake_casing python
-PascalCasing C#
-kebab-case or dash-case
-UPPER_CASE_SNAKE_CASING
 */



// FUNCTIONAL COMPONENT
// declare a function and give it the name of the component as the function[Name of the Component]
// Components are typically named with PascalCasing
// Component named App
function App() {
  // return statement to send back code to display on the webpage
  // returns JSX, which is JavaScript XL, which will run similar to HTML on our webpage once compiled.  
  return (
    // what is className?
    // class is a reserved keyword in javascript that will create a class constructor, which is why in JSX we will use className to assign css classes to our JSX tags.
    // a React component can only export one(1) JSX tag.  you can have miltiple tags INSIDE of that one tag, but only one tag may be inside of the return statement. 
    <div className="App">
      {/* in order to write javascript within a JSX tag pair, we will need to use {} around the javascript code */}
      {/* this is why a comment within JSX will have {} around the comment */}
      <header className="App-header">
        {/* we will use {} in order to reference the imported image from the logo file into the image source. */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// this line will export the App function to be available to other files, and App will be the default export, meaning you will not need to specify what you want from this file.
export default App;