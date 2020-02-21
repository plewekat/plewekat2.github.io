const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
threshold: 1,
rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

if ('IntersectionObserver; in window) {
const imgObserver = new IntersectionObserver((items, observer) => {
  items.forEach((item) => {
  });
  if(!items.isIntersecting) {
    return;
  } else {
  preLoadImage(items.target);
  imgObserver.unobserve(items.target);
  }
})
}, imgOptions);

images.forEach(image => {
imgObserver.observe(image);
}

const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
img.src = src;

}
