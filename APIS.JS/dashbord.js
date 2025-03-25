function logout() {
    alert("Logging out...");
    window.location.href = "login-page1.html"; // Redirect to login page
}

// window.onload = function() {
//     if (sessionStorage.getItem("loggedIn") !== "true") {
//         alert("You must log in first!");
//         window.location.href = "login-page1.html";
//     }
// };

// Logout function
// function logout() {
//     sessionStorage.removeItem("loggedIn");
//     alert("You have been logged out!");
//     window.location.href = "login-page1.html";
// }