// Set timestamp when form is loaded
document.getElementById('timestamp').value = new Date().toISOString();
    
// Modal functionality
const modals = document.querySelectorAll('.modal');
const links = document.querySelectorAll('.card a');
const closeButtons = document.querySelectorAll('.modal .close');

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        modals[index].style.display = 'block';
    });
});

closeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modals[index].style.display = 'none';
    });
});

window.onclick = (event) => {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};