// Toggle Menu Bar Effect for Navbar
const toggleMenu = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
};

document.querySelector('.navbar-toggle').addEventListener('click', toggleMenu);

// Loading Animation with Fadeout Effect
window.addEventListener('load', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 1000); // Adjust the delay time as needed
});

// Scroll to Top Button
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const scrollToTopBtn = document.querySelector('.scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', scrollToTop);