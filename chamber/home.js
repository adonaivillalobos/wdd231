const apiKey = 'your_api_key_here';
const city = 'Maracaibo';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.querySelector('.weather-city').textContent = data.name;
    document.querySelector('.weather-temp').textContent = `${data.main.temp}°C`;
    document.querySelector('.weather-condition').textContent = data.weather[0].description;
  })
  .catch(error => console.error('Error fetching weather data:', error));
