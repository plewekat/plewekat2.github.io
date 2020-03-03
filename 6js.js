const radius = parseFloat(document.getElementById('r').textContent);
const PI = Math.PI;
document.getElementById('pi').textContent = PI;
document.getElementById('area').textContent = PI * Math.pow(radius, 2);

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

let message = "hello world"

let paragraphs = document.getElementsByTagName("p")
let paragraph = document.querySelector(".output p:nth-child(2)");

paragraph.innerHTML = message + "Number of paragraphs in document is" + paragraphs.length;

const buttonElement = document.querySelector('#btn');
buttonElement.addEventListener('click', function (event) {

});
