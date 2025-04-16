document.getElementById('otpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the OTP entered by the user
    const otp1 = document.getElementById('otp1').value;
    const otp2 = document.getElementById('otp2').value;
    const otp3 = document.getElementById('otp3').value;
    const otp4 = document.getElementById('otp4').value;

    // Combine OTP values into a single string
    const otp = otp1 + otp2 + otp3 + otp4;

    // Show the overlay and loading animation
    const overlay = document.getElementById('overlay');
    const progressBar = document.getElementById('progress-bar');
    overlay.style.display = 'flex'; // Show overlay and blur

    // Simulate OTP verification process with a progress bar
    let progress = 0;
    const interval = setInterval(function() {
        if (progress < 100) {
            progress += 10; // Increase progress by 10% each time
            progressBar.style.width = progress + '%';
        } else {
            clearInterval(interval);
            // After progress bar fills, verify OTP
            if (otp === "1234") {  // Mock OTP validation condition
                alert('OTP verified! You are successfully logged in.');
                // Redirect to dashboard or another page after successful login
                window.location.href = 'myunico.html';
            } else {
                alert('Invalid OTP! Please try again.');
            }
            // Hide the overlay after verification
            overlay.style.display = 'none';
        }
    }, 200); // Adjust interval speed as needed (200ms for smooth progress)
});
