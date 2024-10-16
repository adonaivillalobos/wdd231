(() => {
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

    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    // Submit the form (you can handle AJAX submission here if needed)
    // form.submit(); // This can be replaced with AJAX request logic

    // Display feedback message
    feedbackDiv.innerText = 'Thank you for your message!';
    feedbackDiv.style.display = 'block';
    setTimeout(() => {
      feedbackDiv.style.display = 'none';
    }, 3000);
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

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
      image.classList.add('hover-opacity');
    });

    image.addEventListener('mouseout', () => {
      image.classList.remove('hover-opacity');
    });
  });

  // Add event listener to social media links
  const socialLinks = document.querySelectorAll('.social a');

  socialLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.classList.add('underline');
    });

    link.addEventListener('mouseout', () => {
      link.classList.remove('underline');
    });
  });
})();