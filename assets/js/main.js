// HEADER STICKY BACKGROUND
const header = document.getElementById("header");
document.onscroll = function () {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add("animate__animated");
    header.classList.add("animate__slideInDown");
    header.classList.add("active");
  } else {
    header.classList.remove("animate__animated");
    header.classList.remove("animate__slideInDown");
    header.classList.remove("active");
  }
};

const navToggler = document.getElementById("navtoggler");
const navClose = document.getElementById("close-nav");
const navList = document.getElementById("nav-list");

navToggler?.addEventListener("click", () => {
  navList?.classList.add("active-nav");
});

navClose?.addEventListener("click", () => {
  navList?.classList.remove("active-nav");
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper1 = new Swiper(".mySwiper", {
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto-slide every 3s
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
    },
  });

  var swiper2 = new Swiper(".project-slider", {
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto-slide every 3s
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-nav-right",
      prevEl: ".project-nav-left",
    },
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
  });
  var swiper3 = new Swiper(".testimonial-slider", {
    loop: true, // Infinite loop
    // autoplay: {
    //   delay: 3000, // Auto-slide every 3s
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".testimonial-right",
      prevEl: ".testimonial-left",
    },
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
    breakpoints: {
      320: {
        // Small screens (mobile)
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        // Medium screens (tablet)
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        // Large screens (desktop)
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

// JavaScript for Accordion (Only One Open at a Time)
const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    // Close all other accordions
    document.querySelectorAll(".accordion-content").forEach((content) => {
      if (content !== button.nextElementSibling) {
        content.classList.add("hidden");
        content.previousElementSibling.querySelector(
          ".icon"
        ).innerHTML = `<i class="ri-arrow-down-s-line"></i>`;
      }
    });

    // Toggle the clicked accordion
    const content = button.nextElementSibling;
    const icon = button.querySelector(".icon");
    const isHidden = content.classList.contains("hidden");

    if (isHidden) {
      content.classList.remove("hidden");
      icon.innerHTML = `<i class="ri-arrow-up-s-line"></i>`;
    } else {
      content.classList.add("hidden");
      icon.innerHTML = `<i class="ri-arrow-down-s-line"></i>`;
    }
  });
});

// Project details nav

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    let scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      if (scrollPosition >= section.offsetTop - 100 &&
        scrollPosition < section.offsetTop + section.offsetHeight - 100) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNav);
  highlightNav(); // Call once to set the active link on page load
});
