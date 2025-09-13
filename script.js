// Drop Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll-triggered animations
    initializeScrollAnimations();
    initializeScrollEffects();
});

function initializeScrollAnimations() {
    // Create intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe screenshots and support sections
    const screenshotsSection = document.querySelector('.screenshots');
    const supportSection = document.querySelector('.support');
    
    if (screenshotsSection) {
        observer.observe(screenshotsSection);
    }
    
    if (supportSection) {
        observer.observe(supportSection);
    }
}

function initializeScrollEffects() {
    // Add subtle parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add click effect to email link
document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            // Add a small animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
});

// Add smooth scrolling for any future anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
