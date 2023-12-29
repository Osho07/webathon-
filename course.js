// script.js

// You can add JavaScript functionality here if needed

// Example: Display an alert when a member's portfolio link is clicked
document.querySelectorAll('.member a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Redirecting to ' + link.getAttribute('href'));
        // You can add more actions or redirection logic here
    });
});

// Example: Display an alert when a project link is clicked
document.querySelectorAll('.project a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Redirecting to ' + link.getAttribute('href'));
        // You can add more actions or redirection logic here
    });
});
