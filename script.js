// Typing animation script
var typed = new Typed(".typing-text", {
    strings: ["Web Developer.", "AI Enthusiast.", "PHP & Python Coder.", "MCA Graduate."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    // Animate Links
    navLinks.classList.toggle("nav-active");

    // Hamburger Animation toggle
    hamburger.classList.toggle("toggle");

    // Fade in links sequentially
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
        }
    });
});

// Close mobile menu when a link is clicked
links.forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove("nav-active");
    hamburger.classList.remove("toggle");
    links.forEach((link) => {
        link.style.animation = "";
    });
}));
