// Function to load the content dynamically
function loadPage(page, element = null) {
    const contentDiv = document.getElementById('dynamic-content');
    
    // Fetch and load the page content
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
            
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
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            contentDiv.innerHTML = `<p>Error loading content. Please try again later.</p>`;
        });
}

// Load default content on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('templates/home.html');
});

function loadPage(page, element = null) {
    const contentDiv = document.getElementById('dynamic-content');

    // Fetch and load the page content
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;

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

            // Close the navbar if in mobile view
            const navbarToggler = document.querySelector('.navbar-toggler');
            const icon = navbarToggler.querySelector('span');
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            contentDiv.innerHTML = `<p>Error loading content. Please try again later.</p>`;
        });
}

// Load default content on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('templates/home.html');
});

// Change navbar-toggler icon when navbar is opened/closed
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const icon = this.querySelector('span');

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
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});
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



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/* ===== whatsapp =====*/
window.onload = function() {
    document.querySelector('.whatsapp-btn-container').style.opacity = '1';
};
