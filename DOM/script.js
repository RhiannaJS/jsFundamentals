console.log('Hello from the script file!');

// ! 1 getElementbyId
console.log(document);
console.log(document.body);
// using console.dir() to see the properties of the object instead of the html tag
console.dir(document.getElementById('testParagraph'));
// document.getElementById('testParagraph').style.color = '#031BFE', ; //could spell out color, or whatever
let testPara = document.getElementById('testParagraph');
testPara.style.color = '#031BFE';
testPara.style.backgroundColor = '#FE03FA'

// This method will reach ou to the html page and grab the firt HTML element with the specific id passed into the method (in this case, testParagraph).  This is important to know because if you have 2 elements with the same id, you will ONLY get the first, though you usually will not have 2 elements with the same id.

// ! 2 querySelectorAll & innerText/innerHTML

document.querySelectorAll('sampleClass')//<sampleClass>: undefined
console.log(document.querySelectorAll('.sampleClass'))
// gives us an array of all the items with the class 'sampleClass' in a "NodeList"

// If we only wanted the paragraphs - this will give us an array with ONLY p tags that have the class 'sampleClass'
console.log(document.querySelectorAll('p.sampleClass'));

// use [] to select tex from the array, even if there is only one element.  innerText just references or changes the text inside of that element.
document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed!'

let changeAll = document.querySelectorAll('p.sampleClass');
changeAll.forEach(pTag => {
    // pTag.innerText= 'My text has been changed using a forEach() method!';
    // pTag.textContent= 'My text has been changed using a forEach() method!';
    pTag.innerHTML = 'My text has been changed using a forEach() method!';
}); 

/*
INNERTEXT VS INNERHTML VS TEXTCONTENT

INNERTEXT
    will reference or allow us to change the text of a specified element.  Will return visible text in a 'node'

TEXTCONTENT
    does the same thing that innerText does, but will return the FULL text of a 'node'

INNERHTML
    innerHTML allows us to set text as well as HTML elemets, which will be nested inside of the current HTML element we are referencing.
*/

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);
console.log(document.getElementById('spanTest').innerHTML);

// ! addEventListener() (event, callback function)

document.getElementById('clickThis').addEventListener('click', function(event){
    console.log(event);
    console.log(event.target.style.backgroundColor='#031BFE');
})

//  ! addEventListener - keyup

let input = document.getElementById('nameInput');
input.addEventListener('keyup', e =>{
    // console.log(e.target)
    console.log(e.target.value)
    // console.log(document.getElementsByTagName('p'));
    document.getElementsByTagName('p')[0].innerText = 'Something has Changed!'

if (e.target.value === ''){
    document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...';
}else {
    document.getElementsByTagName('p')[1].innerText =`Everyone say hello to ${e.target.value}`;
}
})