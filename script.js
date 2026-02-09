document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
        });
    });

    // --- Sticky Header Scroll Effect ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    // --- Appointment Form Handling ---
    const form = document.getElementById('bookingForm');
    const message = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop actual submission for demo
        
        // Simulate data processing
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Processing...';
        btn.disabled = true;

        setTimeout(() => {
            // Success State
            message.textContent = "Thank you! Your appointment request has been sent. We will confirm via phone shortly.";
            form.reset();
            btn.innerText = originalText;
            btn.disabled = false;

            // Optional: Connect to a real backend like Formspree here
            // fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(form) })
        }, 1500);
    });
});