document.getElementById('country-info-button').addEventListener('click', function() {
    const country = document.getElementById('country-input').value;
    getCountryImage(country);
});

document.getElementById('weather-info-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

function getCountryImage(countryName) {
    const countryImageUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(countryImageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching country image');
            }
            return response.json();
        })
        .then(data => {
            const countryImage = document.getElementById('country-image');
            const country = data[0];
            countryImage.src = country.flags.png;
            getCountryMap(country.latlng);
        })
        .catch(error => {
            console.error('Error fetching country image:', error);
        });
}

function getCountryMap(latlng) {
    const mapContainer = document.getElementById('country-map');
    mapContainer.innerHTML = ''; 
    const map = L.map('country-map').setView(latlng, 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);
}

function getWeather(city) {
    const apiKey = '48ec087e6cd9778c2b52ef9e9e7b6ccd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching weather data');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-container').innerHTML = `<div class="error">Error: ${error.message}</div>`;
        });
}

function displayWeather(data) {
    const container = document.getElementById('weather-container');
    container.innerHTML = `
        <div class="weather-item"><strong>City:</strong> ${data.name}</div>
        <div class="weather-item"><strong>Temperature:</strong> ${data.main.temp} °C</div>
        <div class="weather-item"><strong>Weather:</strong> ${data.weather[0].description}</div>
        <div class="weather-item"><strong>Humidity:</strong> ${data.main.humidity}%</div>
        <div class="weather-item"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
    `;
}
