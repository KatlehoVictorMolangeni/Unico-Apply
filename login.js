// Get elements
const loginForm = document.getElementById('login-form');
const overlay = document.getElementById('overlay');
const progressBar = document.getElementById('progress-bar');
const loginButton = document.getElementById('login-button');
const loginPage = document.querySelector('.login');

// Add event listener to handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Show the overlay and apply blur effect
    overlay.style.display = 'flex';
    loginPage.classList.add('blur');

    // Simulate a delay (e.g., for network request)
    let progress = 0;
    const interval = setInterval(function() {
        progress += 10; // Increase the progress by 10%
        progressBar.style.width = progress + '%';

        // When progress reaches 100%, stop the interval and redirect
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                // Redirect to OTP page (change the URL as needed)
                window.location.href = 'OTP.html';
            }, 500); // Delay before redirecting
        }
    }, 300); // Adjust the interval to your preference (300ms = 0.3 seconds per increment)
});
