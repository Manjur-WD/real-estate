// HEADER STICKY BACKGROUND
const header = document.getElementById("header");
document.onscroll = function () {
    if (window.scrollY > header.offsetHeight) {
        header.classList.add("animate__animated");
        header.classList.add("animate__slideInDown");
        header.classList.add("active");
    }
    else {
        header.classList.remove("animate__animated");
        header.classList.remove("animate__slideInDown");
        header.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,         // Infinite loop
        autoplay: {
            delay: 3000,    // Auto-slide every 3s
            disableOnInteraction: false
        },
        navigation: { 
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
});