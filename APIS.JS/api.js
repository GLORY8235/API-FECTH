document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const output = document.getElementById('output');
        output.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});






const weatherForm = document.querySelector(".weatherForm");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector('.card');
const apikey = "b181ced632105e27f89eb4f17a4272b8"; // Replace with a valid API key

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityinput.value.trim();

    if (city) {
        try { 
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } 
        catch (error) {
            console.error(error);
            displayError("Could not fetch weather data. Please try again.");
        }
    } else {
        displayError("Please enter a city.");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const desDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp * 9/5) + 32).toFixed(1)}°F`; // Convert Celsius to Fahrenheit
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    desDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    desDisplay.classList.add("desDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(desDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈"; // Thunderstorm
        case (weatherId >= 300 && weatherId < 400):
            return "🌧"; // Drizzle
        case (weatherId >= 500 && weatherId < 600):
            return "🌧"; // Rain
        case (weatherId >= 600 && weatherId < 700):
            return "❄️"; // Snow
        case (weatherId >= 700 && weatherId < 800):
            return "🌫"; // Fog
        case (weatherId === 800):
            return "☀️"; // Clear sky
        case (weatherId >= 801 && weatherId <= 804):
            return "☁️"; // Cloudy
        default:
            return "❓"; // Unknown
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}


// Condition	Description
// Clear Sky ☀️	No clouds or very few.
// Partly Cloudy 🌤	Some clouds, but still sunny.
// Cloudy ☁️	Many clouds, little sun visible.
// Overcast 🌥	Entire sky is covered with clouds.