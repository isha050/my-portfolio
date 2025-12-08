document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const aboutSection = document.querySelector('.about');
    scrollIndicator.addEventListener('click', () => aboutSection.scrollIntoView({ behavior: 'smooth' }));
});