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


document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            Downscroll
            header.classList.remove('visible');
        } else {
            Upscroll
            header.classList.add('visible');
        }

        lastScrollTop = scrollTop;
    });
});
