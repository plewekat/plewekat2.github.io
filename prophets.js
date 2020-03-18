const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  const prophets = jsonObject['prophets'];
   propehts.forEach(prophet => {
   let card = document.createElement("section");
   let h2 = document.createElement("h2");
   }
                    
h2.textContent = `${prophets.name} {prophets.lastname}`;

)}
)}

card.appendChild(h2);

document.querySelector('div.cards').appendChild(card);

image.setAttribute('src', prophets[i].imageurl);
