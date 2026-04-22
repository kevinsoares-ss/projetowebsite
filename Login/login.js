const slides = [
  {
    image: "../fotos/roupas/Capa.png",
    title: "Nova Coleção",
    text: "Estilo que define você"
  },
  {
    image: "../fotos/roupas/roupa.png",
    title: "Street Style",
    text: "Conforto e atitude no seu dia a dia"
  },
  {
    image: "../fotos/roupas/Capa.png",
    title: "Elegância",
    text: "Moda premium para todas as ocasiões"
  }
];

let index = 0;

// elementos do HTML
const slideImg = document.getElementById("slide");
const slideTitle = document.getElementById("slideTitle");
const slideText = document.getElementById("slideText");

function showSlide() {
  const current = slides[index];

  slideImg.src = current.image;
  slideTitle.innerText = current.title;
  slideText.innerText = current.text;
}

function next() {
  index = (index + 1) % slides.length;
  showSlide();
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
}

// inicia
showSlide();