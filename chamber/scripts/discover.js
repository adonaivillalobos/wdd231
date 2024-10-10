// LocalStorage: Track last visit and display message
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
let message = '';

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysSinceLastVisit < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysSinceLastVisit} days ago.`;
    }
}

localStorage.setItem('lastVisit', now);
document.getElementById('visitor-message').textContent = message;

// Set current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;