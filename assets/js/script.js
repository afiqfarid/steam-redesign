// ========== SHOW MENU ==========
const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav_toggle');
const header = document.getElementById('header');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("show_menu");
    navToggle.classList.toggle("toggled_nav");
});

// ==========Navbar scroll effect ==========
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 1)";
    } else {
        header.style.boxShadow = "none";
    }
}

// ========== FEATURED SWIPER ==========
let featuredSwiper = new Swiper(".featured_swiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
});

// ========== GENRE SWIPER ==========
let genreSwiper = new Swiper(".genre_swiper", {

    loop: false,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
});