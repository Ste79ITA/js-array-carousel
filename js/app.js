// DOM SElectors
const carouselDOMElement = document.querySelector('.carousel');
const forwardBtnDOMElement = document.querySelector('.forward');
const backwardBtnDOMElement = document.querySelector('.backward');

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
  if (i === imgDisplay) {
    carouselDOMElement.innerHTML += `<img class=${'display'} src=${
      imageArray[i]
    } >`;
  } else {
    carouselDOMElement.innerHTML += `<img class=${'hide'} src=${
      imageArray[i]
    } >`;
  }
}
