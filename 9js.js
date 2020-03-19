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
     if (prophet.name == "Joseph" || prophet.name == "John") {
     
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
     }
     });
}); 

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");
  };
};

const imgOptions = {
threshold: 1,
rootMargin: "0px 0px 50px 0px"
};

if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver((items, observer) => {
  items.forEach((item) => {
  if(item.isIntersecting) {
    loadImages(item.target);
    observer.unobserve(item.target);
  }
  });
});

imagesToLoad.forEach((img) => {
observer.observe(img)
});                     
} else {
  imagesToLoad.forEach((img) => {
  loadImages(img);
});
}

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
       'Montserrat'
    ]
  }
});

