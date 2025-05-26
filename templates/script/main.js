// Main function to load the content dynamically with page transitions
function loadPage(page, element = null) {
    const contentDiv = document.getElementById('dynamic-content');
    const transitionOverlay = document.querySelector('.page-transition-overlay');
    
    // Activate page transition overlay
    transitionOverlay.classList.add('active');
    
    // Wait for transition to complete before fetching new content
    setTimeout(() => {
        // Show loading indicator
        contentDiv.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';
        
        // Fetch and load the page content
        fetch(page)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(data => {
                // Transition out the overlay
                transitionOverlay.classList.add('fade-out');
                
                setTimeout(() => {
                    // Reset overlay classes after transition completes
                    transitionOverlay.classList.remove('active', 'fade-out');
                    
                    // Update content
                    contentDiv.innerHTML = data;
                    
                    // Add fade-in animation to content
                    contentDiv.style.opacity = '0';
                    contentDiv.style.transform = 'translateY(10px)';
                    
                    setTimeout(() => {
                        contentDiv.style.opacity = '1';
                        contentDiv.style.transform = 'translateY(0)';
                        contentDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        
                        // Reset transition after animation completes
                        setTimeout(() => {
                            contentDiv.style.transition = '';
                        }, 500);
                    }, 50);
                    
                    // Remove 'active' class from all nav links
                    const navLinks = document.querySelectorAll('.nav-link');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add 'active' class to the clicked link, or default to 'Home' if none clicked
                    if (element) {
                        element.classList.add('active');
                    } else {
                        // Default to 'Home' link on page load
                        document.querySelector('.nav-link-home').classList.add('active');
                    }
                    
                    // Scroll to top when loading a new page
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    
                    // Close the navbar if in mobile view
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const icon = navbarToggler.querySelector('i');
                    const navbarCollapse = document.getElementById('navbarNav');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                    
                    // Initialize any scripts that need to run after content is loaded
                    initDynamicPageScripts();
                }, 500);
            })
            .catch(error => {
                console.error('Error loading the page:', error);
                
                // Transition out the overlay even on error
                transitionOverlay.classList.add('fade-out');
                
                setTimeout(() => {
                    // Reset overlay classes after transition completes
                    transitionOverlay.classList.remove('active', 'fade-out');
                    
                    // Show error message
                    contentDiv.innerHTML = `
                        <div class="error-container">
                            <div class="error-icon"><i class="fas fa-exclamation-triangle"></i></div>
                            <h3>Error Loading Content</h3>
                            <p>We're sorry, but there was a problem loading the requested page. Please try again later.</p>
                            <button onclick="loadPage('templates/home.html')" class="error-button">Return to Home</button>
                        </div>
                    `;
                }, 500);
            });
    }, 300);
}

// Function to initialize scripts for dynamically loaded content
function initDynamicPageScripts() {
    // Re-initialize ScrollReveal for new content
    if (typeof sr !== 'undefined' && typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
    
    // Initialize portfolio filter if on portfolio page
    if (document.querySelector('.portfolio-filter-button') && 
        typeof initPortfolioFilter === 'function') {
        initPortfolioFilter();
    }
    
    // Initialize any form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
    
    // Initialize image lightbox for portfolio items
    const galleryImages = document.querySelectorAll('.portfolio-card-image img, .portfolio-item img');
    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                // Create lightbox overlay
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox-overlay';
                
                // Create lightbox content
                const lightboxContent = document.createElement('div');
                lightboxContent.className = 'lightbox-content';
                
                // Create close button
                const closeButton = document.createElement('button');
                closeButton.className = 'lightbox-close';
                closeButton.innerHTML = '<i class="fas fa-times"></i>';
                closeButton.addEventListener('click', () => {
                    document.body.removeChild(lightbox);
                    document.body.classList.remove('no-scroll');
                });
                
                // Create image element
                const lightboxImg = document.createElement('img');
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt;
                lightboxImg.className = 'lightbox-image';
                
                // Append elements to lightbox
                lightboxContent.appendChild(closeButton);
                lightboxContent.appendChild(lightboxImg);
                lightbox.appendChild(lightboxContent);
                
                // Add lightbox to body
                document.body.appendChild(lightbox);
                document.body.classList.add('no-scroll');
                
                // Add animation classes
                setTimeout(() => {
                    lightbox.classList.add('active');
                    lightboxContent.classList.add('active');
                }, 10);
                
                // Close lightbox when clicking outside the image
                lightbox.addEventListener('click', function(e) {
                    if (e.target === lightbox) {
                        lightbox.classList.remove('active');
                        lightboxContent.classList.remove('active');
                        
                        setTimeout(() => {
                            document.body.removeChild(lightbox);
                            document.body.classList.remove('no-scroll');
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Initialize counters for statistics
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length > 0) {
        const options = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000; // 2 seconds
                    const step = Math.ceil(target / (duration / 16)); // 60fps
                    
                    let current = 0;
                    const timer = setInterval(() => {
                        current += step;
                        counter.textContent = current;
                        
                        if (current >= target) {
                            counter.textContent = target;
                            clearInterval(timer);
                        }
                    }, 16);
                    
                    observer.unobserve(counter);
                }
            });
        }, options);
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }
    
    // Initialize accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            if (!header.hasAttribute('listener')) {
                header.setAttribute('listener', 'true');
                header.addEventListener('click', function() {
                    toggleAccordion(this);
                });
            }
        });
    }
}

// Load default content on page load
document.addEventListener('DOMContentLoaded', () => {
    // Handle preloader
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove preloader from DOM after animation completes
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 800); // Delay to show preloader for a minimum time
    });
    
    // Load the home page content
    loadPage('templates/home.html');
});

// Change navbar-toggler icon when navbar is opened/closed
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const icon = this.querySelector('i');

    if (this.classList.contains('collapsed')) {
        // When navbar is opening (remove fa-bars, add fa-times)
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        // When navbar is closing (remove fa-times, add fa-bars)
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});





/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 100,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    mobile: true,
    reset: false
});

// Define different animation configurations
const srConfig = {
    fadeIn: {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 100,
        opacity: 0,
        scale: 1
    },
    fadeInLeft: {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200
    },
    fadeInRight: {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 200
    },
    zoomIn: {
        distance: '0px',
        duration: 1200,
        delay: 100,
        scale: 0.9,
        opacity: 0
    },
    slideUp: {
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 300
    }
};

/*===== HOME 3rd section =====*/
function toggleAccordion(element) {
    var parentItem = element.parentElement;
    var content = parentItem.querySelector('.accordion-content');
    
    if (parentItem.classList.contains('active')) {
        parentItem.classList.remove('active');
    } else {
        var allItems = document.querySelectorAll('.accordion-item');
        allItems.forEach(function (item) {
            item.classList.remove('active');
        });
        parentItem.classList.add('active');
    }
}

// Apply animations to different elements
function initScrollAnimations() {
    // Hero section animations
    sr.reveal('.hero-content', srConfig.fadeInLeft);
    sr.reveal('.hero-image', srConfig.fadeInRight);
    sr.reveal('.hero-stats', { ...srConfig.fadeIn, delay: 500 });
    
    // Services section animations
    sr.reveal('.services-header', srConfig.fadeIn);
    sr.reveal('.service-item', { ...srConfig.fadeIn, interval: 200 });
    
    // About section animations
    sr.reveal('.about__img', srConfig.fadeInLeft);
    sr.reveal('.about__subtitle, .about__text', srConfig.fadeInRight);
    
    // Skills section animations
    sr.reveal('.skills__subtitle, .skills__text', srConfig.fadeIn);
    sr.reveal('.skills__data', { ...srConfig.fadeIn, interval: 200 });
    sr.reveal('.skills__img', srConfig.zoomIn);
    
    // Work/Portfolio section animations
    sr.reveal('.work__img', { ...srConfig.fadeIn, interval: 200 });
    
    // Contact section animations
    sr.reveal('.contact__input', { ...srConfig.slideUp, interval: 200 });
    
    // General animations for common elements
    sr.reveal('.section-title', srConfig.fadeIn);
    sr.reveal('.home__social-icon', { ...srConfig.fadeIn, interval: 200 });
    sr.reveal('.btn, .cta-button', srConfig.zoomIn);
}

// Initialize animations
initScrollAnimations();

/* ===== whatsapp =====*/
window.onload = function() {
    document.querySelector('.whatsapp-btn-container').style.opacity = '1';
};

// Enhanced UI Functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const header = document.querySelector('header');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
        
        // Add scrolled class to header for styling
        const premiumHeader = document.querySelector('.premium-header');
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
            if (premiumHeader) {
                premiumHeader.classList.add('scrolled');
            }
        } else {
            header.classList.remove('scrolled');
            if (premiumHeader) {
                premiumHeader.classList.remove('scrolled');
            }
        }
    });
    
    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth navigation collapse on mobile
    navbarToggler.addEventListener('click', function() {
        const icon = this.querySelector('i');
        
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.style.opacity = '0';
            navbarCollapse.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                navbarCollapse.classList.remove('show');
            }, 300);
            
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        } else {
            navbarCollapse.classList.add('show');
            
            setTimeout(() => {
                navbarCollapse.style.opacity = '1';
                navbarCollapse.style.transform = 'translateY(0)';
            }, 10);
            
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        
        if (!isClickInsideNavbar && navbarCollapse.classList.contains('show') && window.innerWidth < 992) {
            navbarToggler.click();
        }
    });
    
    // Add active class to current nav item
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu after clicking a link
            if (navbarCollapse.classList.contains('show') && window.innerWidth < 992) {
                navbarToggler.click();
            }
        });
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const heroShapes = document.querySelectorAll('.hero-shape');
            
            if (scrollPosition < window.innerHeight) {
                heroShapes.forEach((shape, index) => {
                    const speed = 0.1 + (index * 0.05);
                    shape.style.transform = `translateY(${scrollPosition * speed}px)`;
                });
            }
        });
    }
});
