/**
 * main.js - Amarta Artha Institute Redesign Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (!navbar) return;
        if (window.scrollY > 30) {
            navbar.classList.add('shadow-sm');
            // Apply the scrolled design system token
            navbar.style.backdropFilter = 'blur(12px)';
            navbar.style.webkitBackdropFilter = 'blur(12px)';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.92)';
        } else {
            navbar.classList.remove('shadow-sm');
            // Transparent/default state
            navbar.style.backdropFilter = 'blur(12px)';
            navbar.style.webkitBackdropFilter = 'blur(12px)';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.92)';
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // ---- Mobile Menu Toggle ----
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-xmark');
                }
            } else {
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile menu when clicking a link inside it
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // ---- Scroll Reveal Animation (IntersectionObserver) ----
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -40px 0px',
            threshold: 0.1
        });

        document.querySelectorAll('[data-reveal]').forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Accessibility fallback
        document.querySelectorAll('[data-reveal]').forEach(el => {
            el.classList.add('visible');
        });
    }

    // ---- about.html Drawer Controller ----
    window.openPractitionerDrawer = function(practitionerId) {
        const drawerBackdrop = document.getElementById('drawer-backdrop');
        const drawerPanel = document.getElementById('drawer-panel');
        if (!drawerBackdrop || !drawerPanel) return;

        // Retrieve practitioner details from hidden elements or datasets
        const name = document.getElementById(`pract-name-${practitionerId}`)?.innerText || '';
        const subtitle = document.getElementById(`pract-subtitle-${practitionerId}`)?.innerText || '';
        const bio = document.getElementById(`pract-bio-${practitionerId}`)?.innerHTML || '';
        const achievements = document.getElementById(`pract-achieve-${practitionerId}`)?.innerHTML || '';
        const skills = document.getElementById(`pract-skills-${practitionerId}`)?.innerHTML || '';
        const quote = document.getElementById(`pract-quote-${practitionerId}`)?.innerHTML || '';

        // Populate drawer contents
        document.getElementById('drawer-name').innerText = name;
        document.getElementById('drawer-subtitle').innerText = subtitle;
        document.getElementById('drawer-bio').innerHTML = bio;
        document.getElementById('drawer-achievements').innerHTML = achievements;
        document.getElementById('drawer-skills').innerHTML = skills;
        
        const drawerQuoteContainer = document.getElementById('drawer-quote-container');
        if (quote && quote.trim() !== '') {
            document.getElementById('drawer-quote').innerHTML = quote;
            drawerQuoteContainer.classList.remove('hidden');
        } else {
            drawerQuoteContainer.classList.add('hidden');
        }

        // Open the drawer
        drawerBackdrop.classList.add('active');
        drawerPanel.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll on body
    };

    window.closePractitionerDrawer = function() {
        const drawerBackdrop = document.getElementById('drawer-backdrop');
        const drawerPanel = document.getElementById('drawer-panel');
        if (!drawerBackdrop || !drawerPanel) return;

        drawerBackdrop.classList.remove('active');
        drawerPanel.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scroll
    };

    // Close drawer when clicking backdrop
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', window.closePractitionerDrawer);
    }

    // ---- solutions.html Accordion Controller ----
    window.toggleAccordion = function(id) {
        const content = document.getElementById(`content-${id}`);
        const icon = document.getElementById(`icon-${id}`);
        if (!content || !icon) return;

        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

        if (isOpen) {
            content.style.maxHeight = '0px';
            icon.innerHTML = '&#43;'; // + sign
        } else {
            // Close other accordions to maintain clean layout
            document.querySelectorAll('.accordion-content').forEach(el => {
                el.style.maxHeight = '0px';
            });
            document.querySelectorAll('[id^="icon-service-"]').forEach(el => {
                el.innerHTML = '&#43;';
            });

            content.style.maxHeight = content.scrollHeight + 'px';
            icon.innerHTML = '&minus;'; // − sign
        }
    };
});
