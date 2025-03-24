// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.style.display = 'flex';
        // Change to X icon
        menuIcon.innerHTML = `
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
    } else {
        mobileMenu.style.display = 'none';
        // Change back to hamburger icon
        menuIcon.innerHTML = `
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
    }
}

menuButton.addEventListener('click', toggleMenu);

// Close menu when clicking on a mobile nav link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});

// Code editor functionality
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('codeInput');
    const runButton = document.getElementById('runButton');
    const codeOutput = document.getElementById('codeOutput');

    // Function to update the output
    function updateOutput() {
        if (codeInput && codeOutput) {
            codeOutput.innerHTML = codeInput.value;
        }
    }

    // Initialize with default content when page loads
    if (runButton) {
        // Set initial output
        updateOutput();
        
        // Add event listener for the run button
        runButton.addEventListener('click', updateOutput);
    }
    
    // Also update when user types (optional, for real-time preview)
    if (codeInput) {
        codeInput.addEventListener('input', function() {
            // Uncomment the line below if you want real-time updates as user types
            // updateOutput();
        });
    }
});