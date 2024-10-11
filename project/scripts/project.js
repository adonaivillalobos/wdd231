// Form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const feedbackDiv = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  // Submit the form
  form.submit();

  // Display feedback message
  feedbackDiv.innerHTML = 'Thank you for your message!';
  feedbackDiv.style.display = 'block';
  setTimeout(() => {
    feedbackDiv.style.display = 'none';
  }, 3000);
});

// Navbar toggle
const navbar = document.getElementById('navbar');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Smooth scrolling
const anchorLinks = document.querySelectorAll('a[href*="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Add event listener to course images
const courseImages = document.querySelectorAll('.course-image img');

courseImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.opacity = '0.8';
  });

  image.addEventListener('mouseout', () => {
    image.style.opacity = '1';
  });
});

// Add event listener to social media links
const socialLinks = document.querySelectorAll('.social a');

socialLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.textDecoration = 'underline';
  });

  link.addEventListener('mouseout', () => {
    link.style.textDecoration = 'none';
  });
});