import { initCountdown } from './countdown.js';
import { initEvents } from './events.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initEvents();

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all viewport sections
    document.querySelectorAll('.viewport').forEach(section => {
        observer.observe(section);
    });
});