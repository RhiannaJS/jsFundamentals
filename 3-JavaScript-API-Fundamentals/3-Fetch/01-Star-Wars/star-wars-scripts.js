let starWarsPeopleList = document.querySelector('ul');

fetch("https://swapi.dev/api/people")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let people = json.results;
    
    for(p of people){
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }
});

let starWarsPlanetList = document.querySelector('ul');

fetch("https://swapi.dev/api/planets")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let planets = json.results;

    for(pl of planets) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + pl.name + '</p>';
        starWarsPlanetList.appendChild(listItem);
    }
});

let starWarsStarShipsList = document.querySelector('ul');

fetch("https://swapi.dev/api/starships")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let ships = json.results;

    for(s of ships) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + s.name + '</p>';
        starWarsPlanetList.appendChild(listItem);
    }
});
