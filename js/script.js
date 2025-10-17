const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    // Add visible class when entering viewport, remove when leaving
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    } else {
        entry.target.classList.remove('visible');
    }
    });
}, {
    threshold: 0.05
});

// Observe all elements with fade-in class
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));