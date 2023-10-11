// DICHIARAZIONE SELETTORI DOM
const carouselDOMElement = document.querySelector('.images');

const thumbnailsDOMElement = document.querySelector('.thumbnails');

// DICHIARAZIONE ARRAY
const imageArray = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
];

// CICLO FOR PER POPOLARE GLI ELEMENTI CON LA STRINGA
for (let i = 0; i < imageArray.length; i++) {
  carouselDOMElement.innerHTML += `<img class='image' src=${imageArray[i]} >`;
  thumbnailsDOMElement.innerHTML += `<img class='thumb' src=${imageArray[i]} >`;
}
// CREAZIONE DI UN INDICE CON VALORE 0 E ASSEGNAZIONE DELLA CLASSE DISPLAY AL PRIMO ELEMENTO
let currentIndex = 0;

let slides = document.querySelectorAll('.image');
let thumbs = document.querySelectorAll('.thumb');

let currentSlide = slides[currentIndex];

let currentThumb = thumbs[currentIndex];

currentSlide.classList.add('display');
currentThumb.classList.add('display');

// DICHIARAZIONE ELEMENTI DOM
const forwardBtnDOMElement = document.querySelector('.forward');

const backwardBtnDOMElement = document.querySelector('.backward');

forwardBtnDOMElement.addEventListener('click', function () {
  slides[currentIndex].classList.remove('display');
  thumbs[currentIndex].classList.remove('display');
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  slides[currentIndex].classList.add('display');
  thumbs[currentIndex].classList.add('display');
});

backwardBtnDOMElement.addEventListener('click', function () {
  slides[currentIndex].classList.remove('display');
  thumbs[currentIndex].classList.remove('display');
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  slides[currentIndex].classList.add('display');
  thumbs[currentIndex].classList.add('display');
});
