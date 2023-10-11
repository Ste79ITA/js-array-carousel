// DOM SElectors
const carouselDOMElement = document.querySelector('.images');
const forwardBtnDOMElement = document.querySelector('.forward');
const backwardBtnDOMElement = document.querySelector('.backward');
const thumbnailsDOMElement = document.querySelector('.thumbnails');

// Inserire immagini carosello in un array
const imageArray = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
];

//   Utilizzare un ciclo FOR per popolare il carosello con le immagini, solo l'immagine con la classe display verrà mostrata.
let imgDisplay = 0;

for (let i = 0; i < imageArray.length; i++) {
  if (imgDisplay === i) {
    carouselDOMElement.innerHTML += `<img class='image display' src=${imageArray[i]} >`;
  } else {
    carouselDOMElement.innerHTML += `<img class='image' src=${imageArray[i]} >`;
  }
}
// utilizzare un array contente le immagini pubblicate per gestire i pulsanti
const imageDOMElements = Array.from(document.querySelectorAll('.image'));

// Pulsante infinito per ciclare le immagini in avanti
forwardBtnDOMElement.addEventListener('click', function () {
  let currentImage = imageDOMElements.findIndex(
    (img) => img.className === 'image display'
  );

  if (currentImage < 4) {
    imageDOMElements[currentImage].classList.remove('display');
    imageDOMElements[currentImage + 1].classList.add('display');
  } else {
    imageDOMElements[currentImage].classList.remove('display');
    imageDOMElements[(currentImage = 0)].classList.add('display');
  }
});

// Pulsante infinito per ciclare le immagini indietro
backwardBtnDOMElement.addEventListener('click', function () {
  let currentImage = imageDOMElements.findIndex(
    (img) => img.className === 'image display'
  );

  if (currentImage > 0) {
    imageDOMElements[currentImage].classList.remove('display');
    imageDOMElements[currentImage - 1].classList.add('display');
  } else {
    imageDOMElements[currentImage].classList.remove('display');
    imageDOMElements[
      (currentImage = imageDOMElements.length - 1)
    ].classList.add('display');
  }
});

// preview immagini
