document.addEventListener("DOMContentLoaded", function() {
    let email = document.getElementById("email");
    let cell = document.getElementById("cell");
    let idNumber = document.getElementById("idNumber");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    
    // Function to show error message
    function showError(input, message) {
        let errorSpan = input.nextElementSibling;
        if (!errorSpan || errorSpan.className !== "error-message") {
            errorSpan = document.createElement("span");
            errorSpan.className = "error-message";
            input.parentNode.insertBefore(errorSpan, input.nextSibling);
        }
        errorSpan.textContent = message;
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "12px";
    }

    // Function to remove error message
    function removeError(input) {
        let errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.className === "error-message") {
            errorSpan.remove();
        }
    }

    // Email validation
    email.addEventListener("input", function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError(email, "Invalid email format. Example: user@example.com");
        } else {
            removeError(email);
        }
    });

    // Cell number validation (Only numbers and 10 digits)
    cell.addEventListener("input", function() {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(cell.value)) {
            showError(cell, "Enter a valid 10-digit phone number.");
        } else {
            removeError(cell);
        }
    });

    // ID number validation (Must be 13 digits)
    idNumber.addEventListener("input", function() {
        const idRegex = /^[0-9]{13}$/;
        if (!idRegex.test(idNumber.value)) {
            showError(idNumber, "ID number must be exactly 13 digits.");
        } else {
            removeError(idNumber);
        }
    });

    // Password strength validation
    password.addEventListener("input", function() {
        let strength = document.getElementById("passwordStrength");

        if (password.value.length < 6) {
            strength.textContent = "Weak";
            strength.style.color = "red";
        } else if (password.value.length < 10) {
            strength.textContent = "Moderate";
            strength.style.color = "orange";
        } else {
            strength.textContent = "Strong";
            strength.style.color = "green";
        }
    });

    // Confirm password validation
    confirmPassword.addEventListener("input", function() {
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Passwords do not match!");
        } else {
            removeError(confirmPassword);
        }
    });

    // Prevent form submission if there are errors
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        let errors = document.querySelectorAll(".error-message");
        if (errors.length > 0) {
            event.preventDefault();
            alert("Please fix the errors before submitting.");
        }
    });
});
function checkID() {
    let idNumber = document.getElementById("idNumber").value;
    let messageBox = document.getElementById("idMessage");

    if (idNumber.length > 5) {  // Start checking after 5 characters
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "check_id.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText === "exists") {
                    messageBox.innerHTML = "⚠️ ID already exists!";
                    messageBox.style.color = "red";
                } else {
                    messageBox.innerHTML = "✔️ ID available!";
                    messageBox.style.color = "green";
                }
            }
        };
        xhr.send("idNumber=" + idNumber);
    } else {
        messageBox.innerHTML = ""; // Clear message if ID is too short
    }
}
