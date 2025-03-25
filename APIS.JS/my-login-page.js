// function login() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var errorMessage = document.getElementById("error-message");

//     // Predefined username and password
//     var validUsername = "admin";
//     var validPassword = "1234";

//     if (username === validUsername && password === validPassword) {
//         alert("Login successful!");
//         window.location.href = "dashboard.html"; // Redirect to another page
//     } else {
//         errorMessage.innerText = "Invalid username or password!";
//     }
// }

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Predefined username and password
    var validUsername = "admin";
    var validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Login successful! Please wait few minutes...");

        sessionStorage.setItem("loggedIn", "true"); // Store login state

        // Delay redirection for 2 minutes (120000 milliseconds)
        setTimeout(function() {
            window.location.href = "website.html"; // Redirect to another page
        }, 1000); 
    } else {
        errorMessage.innerText = "Invalid username or password!";
    }
}


// // typing effect  ---
// const text = "Welcome to my website. How can I help you? Note that you must log in<br> first before you can have access to the website.";
// let index = 0;

// function typeEffect() {
//     if (index < text.length) {
//         document.querySelector(".typing").textContent += text[index];
//         index++;
//         setTimeout(typeEffect, 100); // Typing speed (milliseconds)
//     } else {
//         setTimeout(() => {
//             document.querySelector(".typing").textContent = ""; // Restart typing effect
//             index = 0;
//             typeEffect();
//         }, 2000); // Wait before restarting
//     }
// }

// // Start the typing effect
// typeEffect();


const text1 = "Welcome to my website. How can I help you?";
const text2 = "Note that you must log in first before you can have access to the website.";

let index1 = 0;
let index2 = 0;

function typeEffect1() {
    if (index1 < text1.length) {
        document.querySelector(".typing1").textContent += text1[index1];
        index1++;
        setTimeout(typeEffect1, 100);
    } else {
        setTimeout(typeEffect2, 500); // Start second line after a short delay
    }
}

function typeEffect2() {
    if (index2 < text2.length) {
        document.querySelector(".typing2").textContent += text2[index2];
        index2++;
        setTimeout(typeEffect2, 100);
    } else {
        setTimeout(() => {
            document.querySelector(".typing1").textContent = "";
            document.querySelector(".typing2").textContent = "";
            index1 = 0;
            index2 = 0;
            setTimeout(typeEffect1, 1000); // Restart typing after a pause
        }, 2000);
    }
}

// Start the typing effect
typeEffect1();
