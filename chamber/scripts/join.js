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

    // Form submission handling
    const form = document.getElementById('myForm');
    const submitBtn = document.getElementById('submitBtn');

    // Add an event listener to the submit button
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the form data
        const formData = new FormData(form);

        // Send the form data to the server using fetch
        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            // If the submission is successful, redirect to the thank you page
            if (data.success) {
                window.location.href = '/thank-you';
            } else {
                // If the submission fails, display an error message
                console.error('Error submitting form:', data.error);
            }
        })
        .catch((error) => {
            console.error('Error submitting form:', error);
        });
    });
});