const paneles = document.querySelectorAll('.panel');
const prevButtons = document.querySelectorAll(".prevButton");
const nextButtons = document.querySelectorAll(".nextButton");

// Función para abrir un panel
function toggleOpen() {
  if (!this.classList.contains('open')) {
    paneles.forEach(panel => {
      if (panel !== this && panel.classList.contains('open')) {
        panel.classList.remove('open');
      }
    });
    this.classList.add('open');
  }
}

// Función para cambiar la clase 'open-active' durante la transición
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Agrega eventos de click y transición a los paneles
paneles.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});


const imagesPanel0 = [
  "https://wallpapercave.com/wp/wp5593534.jpg",
  "https://www.gratistodo.com/wp-content/uploads/2017/09/Fondo-playa-paradisiaca-bora-bora-21.jpg",
  "https://wallpapercave.com/wp/wp4196743.jpg"
];
const imagesPanel1 = [
  "https://images7.alphacoders.com/550/550963.jpg",
  "https://images8.alphacoders.com/640/640655.jpg",
  "https://wallpapercave.com/wp/wp4651156.jpg"
];

const imagesPanel2 = [
 "http://www.pixelstalk.net/wp-content/uploads/2016/07/Free-4k-Backgrounds-Screen-Download.jpg",
  "https://www.xtrafondos.com/wallpapers/montana-alberta-banff-en-invierno-2346.jpg",
  "https://images2.alphacoders.com/858/thumb-1920-858152.jpg"
];

const imagesPanel3 = [
 "https://wallpapercave.com/wp/wp3338476.jpg",
  "https://wallpapercave.com/wp/wp5826732.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/237/429/144/spring-in-the-mountains-assorted-flowers-in-garden-wallpaper-preview.jpg"
];

const imagesPanel4 = [
 "https://images.wallpapersden.com/image/download/aurora-4k_a2pnamqUmZqaraWkpJRobWllrWdma2U.jpg",
  "https://fondosmil.com/fondo/2257.jpg",
  "https://images3.alphacoders.com/110/thumb-1920-1107857.jpg"
];

let currentImageIndexPanel0 = 0;
let currentImageIndexPanel1 = 0;
let currentImageIndexPanel2 = 0;
let currentImageIndexPanel3 = 0;
let currentImageIndexPanel4 = 0;

function changeToPreviousImage(panel, images, currentIndex) {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  panel.style.backgroundImage = `url(${images[currentIndex]})`;
  return currentIndex;
}

function changeToNextImage(panel, images, currentIndex) {
  currentIndex = (currentIndex + 1) % images.length;
  panel.style.backgroundImage = `url(${images[currentIndex]})`;
  return currentIndex;
}

prevButtons.forEach((prevButton, index) => {
  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    switch (index) {
      case 0:
        currentImageIndexPanel0 = changeToPreviousImage(paneles[0], imagesPanel0, currentImageIndexPanel0);
        break;
      case 1:
        currentImageIndexPanel1 = changeToPreviousImage(paneles[1], imagesPanel1, currentImageIndexPanel1);
        break;
      case 2:
        currentImageIndexPanel2 = changeToPreviousImage(paneles[2], imagesPanel2, currentImageIndexPanel2);
        break;
      case 3:
        currentImageIndexPanel3 = changeToPreviousImage(paneles[3], imagesPanel3, currentImageIndexPanel3);
        break;
      case 4:
        currentImageIndexPanel4 = changeToPreviousImage(paneles[4], imagesPanel4, currentImageIndexPanel4);
        break;
      default:
        break;
    }
  });
});

nextButtons.forEach((nextButton, index) => {
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    switch (index) {
      case 0:
        currentImageIndexPanel0 = changeToNextImage(paneles[0], imagesPanel0, currentImageIndexPanel0);
        break;
      case 1:
        currentImageIndexPanel1 = changeToNextImage(paneles[1], imagesPanel1, currentImageIndexPanel1);
        break;
      case 2:
        currentImageIndexPanel2 = changeToNextImage(paneles[2], imagesPanel2, currentImageIndexPanel2);
        break;
      case 3:
        currentImageIndexPanel3 = changeToNextImage(paneles[3], imagesPanel3, currentImageIndexPanel3);
        break;
      case 4:
        currentImageIndexPanel4 = changeToNextImage(paneles[4], imagesPanel4, currentImageIndexPanel4);
        break;
      default:
        break;
    }
  });
});