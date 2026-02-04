// ========================================
// TEMPLES.JS - Hamburger Menu & Footer
// ========================================

/**
 * Initializes the hamburger menu toggle functionality
 */
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/**
 * Updates the copyright year in the footer
 */
function updateCopyrightYear() {
    const currentYearElement = document.getElementById('current_year');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
}

/**
 * Updates the last modified date in the footer
 */
function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('LastModified');
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        const formattedDate = lastModified.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        lastModifiedElement.textContent = `Last Modification: ${formattedDate}`;
    }
}

/**
 * Initializes all page functionality
 */
function init() {
    initHamburgerMenu();
    updateCopyrightYear();
    updateLastModifiedDate();
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);
