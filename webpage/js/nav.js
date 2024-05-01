// Nav items
const navLinks = document.querySelectorAll(".nav-link");
const navMenu = document.querySelector(".nav-menu");
// Mobile menu hamburger element
const mobileMenuHamburger = document.querySelector(".mobile-menu-hamburger");

// Opens mobile menu
function openMenu() {
    navMenu.classList.toggle("active");
    mobileMenuHamburger.classList.toggle("active");
}

// Exits mobile menu
function exitMenu() {
    navMenu.classList.remove("active");
    mobileMenuHamburger.classList.remove("active");
}

// Add click listeners for open/exit functions
navLinks.forEach(nav => nav.addEventListener("click", exitMenu));
mobileMenuHamburger.addEventListener("click", openMenu);
