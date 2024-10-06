document.addEventListener('DOMContentLoaded', function() {
    // Set timestamp when form is loaded
    document.getElementById('timestamp').value = new Date().toISOString();
    
    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const links = document.querySelectorAll('.card a');
    const closeButtons = document.querySelectorAll('.modal .close');

    // Open modal by href link
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalID = link.getAttribute('href').substring(1); // Remove the '#' from href
            document.getElementById(modalID).style.display = 'block';
        });
    });

    // Close modal when the close button is clicked
    closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none'; // Close the nearest modal
        });
    });

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    };

    // Close modal with Esc key for accessibility
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });

    // Let the form submit naturally (removed the submit button override)
});