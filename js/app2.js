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
  // RIMUOVE CLASSE DISPLAY DALL' ELEMENTO CORRENTE
  currentSlide.classList.remove('display');
  currentThumb.classList.remove('display');
  // SE INDICE MINORE DI 4
  if (currentIndex < 4) {
    // AGGIUNGE CLASSI ALL'ELEMENTO SUCCESSIVO
    slides[currentIndex + 1].classList.add('display');
    thumbs[currentIndex + 1].classList.add('display');
    // AUMENTA IL VALORE DELL'INDICE DI 1
    currentSlide = slides[(currentIndex += 1)];
    currentThumb = thumbs[currentIndex];
  } else {
    // SI RIPARTE DALL'INDICE 0
    slides[(currentIndex = 0)].classList.add('display');
    thumbs[(currentIndex = 0)].classList.add('display');
    currentSlide = slides[(currentIndex = 0)];
    currentThumb = thumbs[currentIndex];
  }
});

backwardBtnDOMElement.addEventListener('click', function () {
  // RIMUOVE CLASSE DISPLAY DALL' ELEMENTO CORRENTE
  currentSlide.classList.remove('display');
  currentThumb.classList.remove('display');
  // SE INDICE MAGGIORE DI 0
  if (currentIndex > 0) {
    // AGGIUNGE CLASSI ALL'ELEMENTO PRECEDENTE
    slides[currentIndex - 1].classList.add('display');
    thumbs[currentIndex - 1].classList.add('display');
    // RIDUCE IL VALORE DELL'INDICE DI 1
    currentSlide = slides[(currentIndex -= 1)];
    currentThumb = thumbs[currentIndex];
  } else {
    // SI RIPARTE DALL'ULTIMO INDICE
    slides[(currentIndex = slides.length - 1)].classList.add('display');
    thumbs[(currentIndex = slides.length - 1)].classList.add('display');
    currentSlide = slides[(currentIndex = slides.length - 1)];
    currentThumb = thumbs[currentIndex];
  }
});
