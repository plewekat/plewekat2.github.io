const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  const members = jsonObject['prophets'];
   members.forEach(prophet => {
   let card = document.createElement('section');
   let h2 = document.createElement('h2');
   let image = document.createElement('img');
   let fullname = `${prophet.name} "${prophet.lastname}`;
   let birthday = document.createElement('birthdate');
   let birthplace = document.createElement('birthplace');
     
     h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
     birthday.innerHTML = `Date of birth: ${prophet.birthdate} <br>`;
     birthplace.innerHTML = `Place of birth: ${prophet.birthplace}`;
     image.setAttribute('src', prophet.imageurl);
     image.setAttribute('alt', fullname);
     
     card.appendChild(h2);
     card.appendChild(birthday);
     card.appendChild(birthplace);
     card.appendChild(image);

   document.querySelector('.cards').appendChild(card);

});
}); 
