 // Redirect user if not logged in
//  window.onload = function() {
//     if (sessionStorage.getItem("loggedIn") !== "true") {
//         alert("You must log in first!");
//         window.location.href = "website.html"; // Redirect to login page
//     }
// };

// Logout function
function logoutUser() {
    sessionStorage.removeItem("loggedIn");
    alert("You have been logged out!");
    window.location.href = "#"; // Redirect to login page
}

// Example Sign-In Function (Just for testing)
function registerUser() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (username === "frontend" || email === "gocityfrontenddevelopment@gmail.come" || password === "12345" || confirmPassword === "12345") {
        alert("login suceesfuly");
    window.location.href = "my-loging-page.html"; // Redirect to login page

        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
        
    }else {
        sessionStorage.innerText = "Invalid username or password!";
    }

    alert("User registered successfully!");
    sessionStorage.setItem("loggedIn", "true"); // Simulate login
    window.location.href = "/"; // Redirect to dashboard
}