// Array of background images
const bgImages = [
    
    "blog5.jpg",
    "blog6.jpg",
    "blog7.jpg",
   
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




// typing effect 
const text = "Hello, welcome to my website!";
let index = 0;
let isDeleting = false;

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function typeEffect() {
    let displayText = text.substring(0, index);
    let textElement = document.getElementById("text");
    textElement.innerHTML = displayText;

    if (!isDeleting && index < text.length) {
        textElement.style.color = getRandomColor(); // Change color while typing
        index++;
        setTimeout(typeEffect, 100); // Typing speed
    } else if (isDeleting && index > 0) {
        index--;
        textElement.style.color = getRandomColor(); // Change color while typing

        setTimeout(typeEffect, 50); // Deleting speed
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 3000); // Pause before switching modes

    }
}

typeEffect();