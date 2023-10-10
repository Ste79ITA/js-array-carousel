const carouselDOMElement = document.querySelector('.carousel');

// Inserire immagini carosello in un array
const imageArray = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
];

//   Utilizzare un ciclo FOR per popolare il carosello con le immagini, solo l'immagine con la classe display verrà mostrata.

for (let i = 0; i < imageArray.length; i++) {
  let imgClass = 'hide';
  let imgDisplay = 0;

  carouselDOMElement.innerHTML += `<img class=${imgClass} src=${imageArray[i]} >`;

  if (imageArray[i] === imgDisplay) {
    imgClass = 'display';
  }
}
