// Portfolio Filter Functionality
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length === 0 || portfolioItems.length === 0) {
        return; // Exit if elements don't exist
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.getAttribute('data-category').includes(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    initPortfolioFilter();
});

// Re-initialize when dynamic content is loaded
// This is needed because the content is loaded dynamically via AJAX
function checkForPortfolioContent() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && 
                document.querySelector('.portfolio-filter-button') && 
                document.querySelector('.portfolio-item')) {
                initPortfolioFilter();
            }
        });
    });
    
    // Start observing the dynamic content container
    const targetNode = document.getElementById('dynamic-content');
    if (targetNode) {
        observer.observe(targetNode, { childList: true, subtree: true });
    }
}

// Start observing for changes
document.addEventListener('DOMContentLoaded', function() {
    checkForPortfolioContent();
});