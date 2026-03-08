/**
 * main.js - LexTraining Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Mobile Menu Toggle ----
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            // Change icon to 'X'
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            mobileMenu.classList.add('hidden');
            // Change icon back to hamburger
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link inside it
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 30) {
            navbar.classList.add('shadow-md', 'py-1');
            navbar.classList.remove('py-2');
        } else {
            navbar.classList.remove('shadow-md', 'py-1');
            navbar.classList.add('py-2');
        }
    };

    // Run once on load just in case we are refreshed halfway down the page
    handleScroll();
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
});
