window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = document.querySelector('.scroll-top');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        scrollTop.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        scrollTop.classList.remove('visible');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll to top
document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Post cards animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.post-card').forEach(card => {
    observer.observe(card);
});