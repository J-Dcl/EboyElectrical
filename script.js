// 1. Sticky Navbar Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Scroll Reveal Animations (The "Sleek" effect)
const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: "0px 0px -25px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Select all elements with hidden classes
const hiddenElements = document.querySelectorAll('.hidden, .hidden-left, .hidden-right, .hidden-up');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Simple Mobile Menu Toggle (Bonus)
// Note: To make this fully functional, add a click event listener
// if you implement the mobile menu list in CSS.

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // This toggles the 'active' class on the menu
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (Optional but good UX)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});