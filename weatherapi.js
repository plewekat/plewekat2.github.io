const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=85fb19e526a5e243af3089d71937a29a';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;

document.getElementById('imagesrc').textContent = imagesrc;
document.getElementById('icon').setAttribute('src', imagesrc);
document.getElementById('icon').setAttribute('alt', desc);

    
    
  });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  console.table(jsonObject);
  
  const towns = jsonObject['towns'];
  
   for (let i = 0; i < towns.length; i++) {
     if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs" ){ 
   let card = document.createElement('section');
   let h2 = document.createElement('h2');
   let h3 = document.createElement('h3');
   let yearFounded = document.createElement('p');
   let population = document.createElement('p');   
   let rainfall = document.createElement('p');
   let image = document.createElement('img')
     
     h2.textContent = towns[i].name;
     h3.textContent = towns[i].motto;
     yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
     population.textContent = "Population: " + towns[i].currentPopulation;
     rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
     image.setAttribute('src', "images/" + towns[i].photo);
     image.setAttribute('alt', towns[i].name)
     
     card.appendChild(h2);
     card.appendChild(h3);
     card.appendChild(yearFounded);
     card.appendChild(population);
     card.appendChild(rainfall);
     card.appendChild(image);
   
   document.querySelector('div.cards').appendChild(card);
}
}    
}); 

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

function myFunction(elmnt,clr) {
  elmnt.style.color = clr;
}

WebFont.load({
  google: {
    families: [
       'Montserrat', 'Raleway'
    ]
  }
});
