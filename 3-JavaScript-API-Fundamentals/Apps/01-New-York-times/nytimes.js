const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";//1
const key = "5ccwI0B8C4QBx8hS1dSoZ2VB58ksCVx9";//2
let url; //3

function nextPage(){
    console.log("Next button clicked");
}

function previousPage(){
    console.log("Previous button clicked");
}



//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
searchForm.addEventListener('submit', fetchResults);

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none'; //hides the nav bar
let pageNumber = 0; //loading page on page 0
let displayNav = false;

function nextPage(e){
    if(pageNumber > 0){
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page number:", pageNumber);
};




function fetchResults(e){
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);
    
    if(startDate.value !==''){
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };
    
    if(endDate.value !=='') {
        url += '&end_date=' + endDate.value;
    };
    
    fetch(url)
        .then(function(result){
            return result.json();
        }).then(function(json){
            displayResults(json);
        });
};

function displayResults(json){
    while(section.firstChild){
        section.removeChild(section.firstChild);
    };

     let articles = json.response.docs;
     if(articles.length ===10){
         nav.style.display = 'block';
     } else {
        nav.style.display = 'none';
     };
   
    
    if(articles.length ===0){
        console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++){
            let article = document.createElement ('article');
            let heading = document.createElement ('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
        
            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords:';
            
            for(let j = 0; j < current.keywords.length; j++){
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + '';
                para.appendChild(span);
            };

            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            };

            clearfix.setAttribute('class', 'clearfix');
            

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        };
    };
};
  
    
   


