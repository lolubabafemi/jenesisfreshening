// scripts.js

// document.addEventListener('DOMContentLoaded', function() {
//   const links = document.querySelectorAll('a[href^="#"]');

//   for (const link of links) {
//       link.addEventListener('click', function(event) {
//           event.preventDefault();

//           const targetId = this.getAttribute('href').substring(1);
//           const targetElement = document.getElementById(targetId);

//           if (targetElement) {
//               window.scroll({
//                   top: targetElement.offsetTop,
//                   behavior: 'smooth'
//               });
//           }
//       });
//   }
// });


const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

function updateCarousel() {
    const width = items[currentIndex].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Optional: Automatically advance the carousel
setInterval(() => {
    nextButton.click();
}, 3000);

