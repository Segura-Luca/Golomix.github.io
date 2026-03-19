'use strict';

const addEventOnElem = function (elem, type, callback) {
    if (Array.isArray(elem) || elem instanceof NodeList) {
        for (let i = 0; i < elem.length; i++) {
            elem[i]?.addEventListener(type, callback);
        }
    } else if (elem) {
        elem.addEventListener(type, callback);
    }
};

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  // Evita errores en páginas sin header/backTop
  if (!header || !backTopBtn) return;

  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  // Evita errores si no hay header
  if (!header) return;

  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }
  lastScrolledPos = window.scrollY;
};

addEventOnElem(window, "scroll", headerSticky);


const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);



const addToCartButtons = document.querySelectorAll('button[aria-label="add to cart"]');

const cartCountElem = document.querySelector('span[aria-label="cart count"]');


let cartCount = 0;


const handleAddToCart = function () {
  cartCount++;
  cartCountElem.textContent = cartCount;
}


addToCartButtons.forEach(button => {
  button.addEventListener("click", handleAddToCart);
});

const addToWishlistButtons = document.querySelectorAll('button[aria-label="add to wishlist"]');
const favoritesCountElem = document.querySelector('span[aria-label="favorites count"]');
let favoritesCount = 0;

const handleAddToWishlist = function () {
  favoritesCount++;
  favoritesCountElem.textContent = favoritesCount;
}

addToWishlistButtons.forEach(button => {
  button.addEventListener("click", handleAddToWishlist);
});








