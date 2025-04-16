const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar'); // Fixed ID selector
const themeToggler = document.querySelector('.theme-toggler');

 //const homeLanguage = document.getElementById('home-language');
// const falLanguage = document.getElementById('fal');
// const maths = document.getElementById('maths');
// const LO = document.getElementById('lo');
// const subFive = document.getElementById('sub-five');
// const subSix = document.getElementById('sub-six');
// const subSev = document.getElementById('sub-sev');

const error = document.getElementById('negative-error');


menuBtn.addEventListener('click', () => {
    if (sideMenu.style.display === "block") {
        sideMenu.style.display = "none";
    } else {
        sideMenu.style.display = "block";
    }
});


themeToggler.addEventListener('click', () => {
   
    document.body.classList.toggle('dark-mode-variables');
    
    const spans = themeToggler.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calc").addEventListener("click", function() {
        let homeLanguage = parseFloat(document.getElementById('home-language').value) || 0;
        let falLanguage = parseFloat(document.getElementById('fal').value) || 0;
        let maths = parseFloat(document.getElementById('maths').value) || 0;
        let LO = parseFloat(document.getElementById('lo').value) || 0;
        let subFive = parseFloat(document.getElementById('sub-five').value) || 0;
        let subSix = parseFloat(document.getElementById('sub-six').value) || 0;
        let subSev = parseFloat(document.getElementById('sub-sev').value) || 0;

        let error = false;

        // Clear all previous error messages
        document.querySelectorAll('.error-message').forEach(msg => msg.textContent = "");

        // Check for negative values and show error messages
        if (homeLanguage < 0) {
            document.getElementById("negative-error-home-language").textContent = "Oops! A negative Level is not acceptable.";
            error = true;
        }
        if (falLanguage < 0) {
            document.getElementById("negative-error-fal").textContent = "Oops! A negative Level is not acceptable.";
            error = true;
        }
        if (maths < 0) {
            document.getElementById("negative-error-maths").textContent = "Oops! A negative Level is not acceptable.";
            error = true;
        }
        if (LO < 0) {
            document.getElementById("negative-error-lo").textContent = "Oops! A negative Level is not acceptable.";
            error = true;
        }
        if (subFive < 0) {
            document.getElementById("negative-error-sub-five").textContent = "Oops! A negative Level is not acceptable.";
            error = true;
        }
        if (subSix < 0) {
            document.getElementById("negative-error-sub-six").textContent = "Oops! A negative Level is not acceptable.";
            error = true;
        }
        if (subSev < 0) {
            document.getElementById("negative-error-sub-sev").textContent = "Oops! A negative Level is not acceptable.";
            error = true;
        }

        if (!error) {
            let sum = homeLanguage + falLanguage + maths + LO + subFive + subSix + subSev;
            document.getElementById("sum").value = "Hey Mgani, your APS = " + sum;
        } else {
            document.getElementById("sum").value = ""; // Clear APS if there's an error
        }
    });
});