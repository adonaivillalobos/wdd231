// main.js

// Function 1: Handle LocalStorage and Display Last Visit Message
function handleLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    const sidebarMessage = document.querySelector('.visit-message');
    const currentTime = new Date().getTime();

    if (lastVisit) {
        const daysSinceVisit = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceVisit < 1) {
            sidebarMessage.textContent = "Back so soon! Awesome!";
        } else {
            sidebarMessage.textContent = `You last visited ${daysSinceVisit} days ago.`;
        }
    } else {
        sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    // Save the current visit
    localStorage.setItem('lastVisit', currentTime);
}

// Function 2: Fetch JSON Data and Build Items Dynamically
async function fetchCourses() {
    try {
        const response = await fetch('https://api.example.com/courses'); // Replace with your API
        const courses = await response.json();

        const coursesContainer = document.querySelector('.courses-container');
        courses.forEach(course => {
            const courseItem = `
                <div class="course-item" data-id="${course.id}">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <button class="view-details">View Details</button>
                </div>
            `;
            coursesContainer.innerHTML += courseItem;
        });

        // Attach event listeners to buttons after elements are rendered
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', openModal);
        });
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}

// Function 3: Open Modal Dialog with Course Details
function openModal(event) {
    const courseId = event.target.closest('.course-item').getAttribute('data-id');
    // Fetch course details (you can get these from the same or another API)
    const course = courses.find(course => course.id === parseInt(courseId));

    const modalContent = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p>Duration: ${course.duration} hours</p>
        <button class="close-modal">Close</button>
    `;

    const modal = document.querySelector('.modal');
    modal.innerHTML = modalContent;
    modal.style.display = 'block';

    // Close modal on button click
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Conditional Branching: Toggle Responsive Navigation
const toggleNav = document.querySelector('.toggle-nav');
const navMenu = document.querySelector('.nav-menu');

toggleNav.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
        toggleNav.textContent = 'Close Menu';
    } else {
        toggleNav.textContent = 'Open Menu';
    }
});

// Array Method: Filter Courses Based on User Input
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', () => {
    const filterValue = searchInput.value.toLowerCase();
    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(filterValue));

    // Render filtered courses
    const coursesContainer = document.querySelector('.courses-container');
    coursesContainer.innerHTML = '';
    filteredCourses.forEach(course => {
        const courseItem = `
            <div class="course-item" data-id="${course.id}">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button class="view-details">View Details</button>
            </div>
        `;
        coursesContainer.innerHTML += courseItem;
    });

    // Reattach modal event listeners
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', openModal);
    });
});

// Call functions on page load
document.addEventListener('DOMContentLoaded', () => {
    handleLastVisit();
    fetchCourses();
});