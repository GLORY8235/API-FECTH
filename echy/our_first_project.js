// Array of background images
const bgImages = [
    "blog-1.jpg",
    "blog-2.jpg",
    "blog-3.jpg",
    // "background4.jpg"
];

// Select the body (or any specific element) to change background
// const body = document.body;
let body = document.querySelector(".wrapper");

// Index to track current image
let currentIndex = 0;

// Function to change background
function changeBackground() {
    body.style.backgroundImage = `url('${bgImages[currentIndex]}')`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.transition = "background 1s ease-in-out"; // Smooth transition effect

    // Increment index, loop back when it reaches the end
    currentIndex = (currentIndex + 1) % bgImages.length;
}

// Change background every 3 minutes (180,000 milliseconds)
setInterval(changeBackground, 10000);

// Call function immediately to set the first background
changeBackground();
