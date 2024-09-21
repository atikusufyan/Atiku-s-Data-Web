
// Select the button by its ID
const contactBtn = document.getElementById('contactBtn');

// Add a click event listener to the button
contactBtn.addEventListener('click', function() {
    alert('Thank you for visiting! Feel free to contact us.');
});

// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add smooth scroll behavior to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const sectionId = this.getAttribute('href').substring(1); // Get the section ID
        const section = document.getElementById(sectionId); // Find the section

        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Select the form and the success message element
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');



    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (check if fields are not empty)
    if (name && email && message) {
        // If all fields are filled, show the success message
        formMessage.style.display = 'block';

        // Clear the form fields
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(form);

    // Send form data using Fetch API
    fetch('https://example.com/submit', { // Replace with your server URL
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle successful submission
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you! Your message has been submitted.';
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your message.');
    });
});

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Select the button by its ID
const contactBtn = document.getElementById('contactBtn');

// Add a click event listener to the button
contactBtn.addEventListener('click', function() {
    alert('Thank you for visiting! Feel free to contact us.');
});

// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add smooth scroll behavior to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const sectionId = this.getAttribute('href').substring(1); // Get the section ID
        const section = document.getElementById(sectionId); // Find the section

        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Select the form and the success message element
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');



    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (check if fields are not empty)
    if (name && email && message) {
        // If all fields are filled, show the success message
        formMessage.style.display = 'block';

        // Clear the form fields
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(form);

    // Send form data using Fetch API
    fetch('https://example.com/submit', { // Replace with your server URL
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle successful submission
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you! Your message has been submitted.';
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your message.');
    });
});

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submitted:', { name, email, message });
    res.json({ message: 'Form submitted successfully!' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
})
// Select the button by its ID
const contactBtn = document.getElementById('contactBtn');

// Add a click event listener to the button
contactBtn.addEventListener('click', function() {
    alert('Thank you for visiting! Feel free to contact us.');
});

// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add smooth scroll behavior to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const sectionId = this.getAttribute('href').substring(1); // Get the section ID
        const section = document.getElementById(sectionId); // Find the section

        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Select the form and the success message element
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');



    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (check if fields are not empty)
    if (name && email && message) {
        // If all fields are filled, show the success message
        formMessage.style.display = 'block';

        // Clear the form fields
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(form);

    // Send form data using Fetch API
    fetch('https://example.com/submit', { // Replace with your server URL
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle successful submission
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you! Your message has been submitted.';
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your message.');
    });
});

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Select the button by its ID
const contactBtn = document.getElementById('contactBtn');

// Add a click event listener to the button
contactBtn.addEventListener('click', function() {
    alert('Thank you for visiting! Feel free to contact us.');
});

// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add smooth scroll behavior to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const sectionId = this.getAttribute('href').substring(1); // Get the section ID
        const section = document.getElementById(sectionId); // Find the section

        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Select the form and the success message element
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');



    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (check if fields are not empty)
    if (name && email && message) {
        // If all fields are filled, show the success message
        formMessage.style.display = 'block';

        // Clear the form fields
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(form);

    // Send form data using Fetch API
    fetch('https://example.com/submit', { // Replace with your server URL
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle successful submission
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you! Your message has been submitted.';
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your message.');
    });
});

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submitted:', { name, email, message });
    res.json({ message: 'Form submitted successfully!' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
// Select the button by its ID
const contactBtn = document.getElementById('contactBtn');

// Add a click event listener to the button
contactBtn.addEventListener('click', function() {
    alert('Thank you for visiting! Feel free to contact us.');
});

// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add smooth scroll behavior to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const sectionId = this.getAttribute('href').substring(1); // Get the section ID
        const section = document.getElementById(sectionId); // Find the section

        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Select the form and the success message element
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');



    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (check if fields are not empty)
    if (name && email && message) {
        // If all fields are filled, show the success message
        formMessage.style.display = 'block';

        // Clear the form fields
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(form);

    // Send form data using Fetch API
    fetch('https://example.com/submit', { // Replace with your server URL
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle successful submission
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you! Your message has been submitted.';
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your message.');
    });
});

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Select the button by its ID
const contactBtn = document.getElementById('contactBtn');

// Add a click event listener to the button
contactBtn.addEventListener('click', function() {
    alert('Thank you for visiting! Feel free to contact us.');
});

// Select all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add smooth scroll behavior to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const sectionId = this.getAttribute('href').substring(1); // Get the section ID
        const section = document.getElementById(sectionId); // Find the section

        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Select the form and the success message element
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');



    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (check if fields are not empty)
    if (name && email && message) {
        // If all fields are filled, show the success message
        formMessage.style.display = 'block';

        // Clear the form fields
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(form);

    // Send form data using Fetch API
    fetch('https://example.com/submit', { // Replace with your server URL
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle successful submission
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you! Your message has been submitted.';
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your message.');
    });
});

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submitted:', { name, email, message });
    res.json({ message: 'Form submitted successfully!' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
