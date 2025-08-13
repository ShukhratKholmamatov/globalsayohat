const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "0px",
  // duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// ScrollReveal().reveal(".destination__card", {
//   ...scrollRevealOption,
//   interval: 0,
// });

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 100,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

  const cityButtons = document.querySelectorAll('.filter-btn'); // same as before
const starButtons = document.querySelectorAll('.star-btn'); // new
const cards = document.querySelectorAll('.destination__card');

let selectedCity = 'all';
let selectedStars = 'all';

  // filterButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const selectedCity = button.getAttribute('data-city');

  //     // Remove 'active' class from all and add to current
  //     filterButtons.forEach(btn => btn.classList.remove('active'));
  //     button.classList.add('active');

  //     // Show/Hide cards based on filter
  //     cards.forEach(card => {
  //       const cardCity = card.getAttribute('data-city');
  //       if (selectedCity === 'all' || cardCity === selectedCity) {
  //         card.style.display = 'block';
  //       } else {
  //         card.style.display = 'none';
  //       }
  //     });
  //   });
  // });

  // City filter (your code extended)
cityButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedCity = button.getAttribute('data-city');

    cityButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    applyFilters();
  });
});

// Star filter (new)
starButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedStars = button.getAttribute('data-stars');

    starButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    applyFilters();
  });
});

// Apply both filters
function applyFilters() {
  cards.forEach(card => {
    const cardCity = card.getAttribute('data-city');
    const cardStars = card.getAttribute('data-stars');

    const matchCity = (selectedCity === 'all' || cardCity === selectedCity);
    const matchStars = (selectedStars === 'all' || cardStars === selectedStars);

    card.style.display = (matchCity && matchStars) ? 'block' : 'none';
  });
}



    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change every 5 seconds



    //for tour.html
   