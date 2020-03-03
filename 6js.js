
const t = parseFloat(document.getElementById('t').textContent);
const s = parseFloat(document.getElementById('s').textContent);
document.getElementById('f').textContent = (35.74+0.6215*t-35.75*Math.pow(s, 0.16)+0.4275*t*Math.pow(s, 0.16)).toFixed(1);

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
