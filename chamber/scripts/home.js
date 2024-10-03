// API Key and URL
const apiKey = 'e0c98612e2fecdd1a630556fa3337484';
const city = 'Maracaibo';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

// Fetch current weather data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('Received weather data:', data); // Add a debug statement to inspect the data object
    if (data && data.main && data.main.temp) {
      document.querySelector('.weather-city').textContent = data.name;
      document.querySelector('.weather-temp').textContent = `${data.main.temp}°C`;
      document.querySelector('.weather-condition').textContent = data.weather[0].description;

      // Fetch 4-day forecast
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
      fetch(forecastUrl)
        .then(response => response.json())
        .then(forecastData => {
          console.log('Received forecast data:', forecastData); // Add a debug statement to inspect the forecast data object
          if (forecastData && forecastData.list) {
            const forecastList = document.querySelector('.weather-forecast');
            forecastList.innerHTML = '';
            for (let i = 0; i < 8; i += 2) {
              if (forecastData.list[i] && forecastData.list[i].main && forecastData.list[i].main.temp) {
                const forecastItem = document.createElement('li');
                forecastItem.textContent = `Day ${Math.floor(i / 2) + 1}: ${forecastData.list[i].main.temp}°C`;
                forecastList.appendChild(forecastItem);
              } else {
                console.error('Invalid forecast data:', forecastData);
              }
            }
          } else {
            console.error('Invalid forecast data:', forecastData);
          }
        })
        .catch(error => console.error('Error fetching forecast data:', error));
    } else {
      console.error('Invalid weather data:', data);
    }
  })
  .catch(error => console.error('Error fetching weather data:', error));

// Company spotlights section
const members = [
  {
    "name": "Maracaibo Oil Corp.",
    "address": "Av. 5 de Julio, Maracaibo, Venezuela",
    "phone": "+58 261 1234",
    "website": "https://maracaibooil.com",
    "image": "maracaibo_oil_logo.png",
    "membershipLevel": 1,
    "description": "Leading oil and gas company in the Maracaibo region",
    "industry": "Energy"
  },
  {
    "name": "ZuliaTech Inc.",
    "address": "Calle 72, Maracaibo, Venezuela",
    "phone": "+58 261 5678",
    "website": "https://zuliatech.com",
    "image": "zuliatech_logo.svg",
    "membershipLevel": 2,
    "description": "Innovative technology solutions for the Zulia state",
    "industry": "Technology"
  },
  {
    "name": "Lake Maracaibo Shipping",
    "address": "Puerto de Maracaibo, Maracaibo, Venezuela",
    "phone": "+58 261 9012",
    "website": "https://lakemaracaiboshipping.com",
    "image": "lake_maracaibo_shipping_logo.jpg",
    "membershipLevel": 3,
    "description": "Expert shipping and logistics services on Lake Maracaibo",
    "industry": "Transportation"
  },
  {
    "name": "Maracaibo Tourism Board",
    "address": "Av. 5 de Julio, Maracaibo, Venezuela",
    "phone": "+58 261 1111",
    "website": "https://maracaibotourism.com",
    "image": "maracaibo_tourism_logo.png",
    "membershipLevel": 1,
    "description": "Promoting tourism and cultural heritage in Maracaibo",
    "industry": "Tourism"
  },
  {
    "name": "Universidad del Zulia",
    "address": "Calle 67, Maracaibo, Venezuela",
    "phone": "+58 261 2222",
    "website": "https://univerzulia.edu.ve",
    "image": "univerzulia_logo.png",
    "membershipLevel": 2,
    "description": "Leading university in the Zulia state, offering various academic programs",
    "industry": "Education"
  },
  {
    "name": "Maracaibo Health Services",
    "address": "Av. 5 de Julio, Maraca ibo, Venezuela",
    "phone": "+58 261 3333",
    "website": "https://maracaibohealth.com",
    "image": "maracaibo_health_logo.jpg",
    "membershipLevel": 1,
    "description": "Comprehensive healthcare services for the Maracaibo community",
    "industry": "Healthcare"
  },
  {
    "name": "La Chinita International Fair",
    "address": "Calle 72, Maracaibo, Venezuela",
    "phone": "+58 261 4444",
    "website": "https://lachinitafair.com",
    "image": "lachinita_fair_logo.svg",
    "membershipLevel": 2,
    "description": "Annual international fair showcasing local products and services",
    "industry": "Trade"
  },
  {
    "name": "Maracaibo Chamber of Commerce",
    "address": "Av. 5 de Julio, Maracaibo, Venezuela",
    "phone": "+58 261 5555",
    "website": "https://maracaibochamber.com",
    "image": "maracaibo_chamber_logo.png",
    "membershipLevel": 3,
    "description": "Representing the interests of local businesses and promoting economic growth",
    "industry": "Business"
  }
];

const spotlightSection = document.querySelector('.spotlights-section');

function getRandomMembers() {
  const goldAndSilverMembers = members.filter(member => member.membershipLevel >= 2);
  const randomMembers = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * goldAndSilverMembers.length);
    randomMembers.push(goldAndSilverMembers[randomIndex]);
    goldAndSilverMembers.splice(randomIndex, 1);
  }
  return randomMembers;
}

function displaySpotlights(randomMembers) {
  spotlightSection.innerHTML = '';
  randomMembers.forEach(member => {
    const spotlightHTML = `
      <div class="spotlight">
        <img src="../images/${member.image}" alt="${member.name} Logo" class="company-logo">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.address}</p>
        <a href="${member.website}" class="spotlight-link">Learn More</a>
        <p>Membership Level: ${member.membershipLevel === 2 ? 'Silver' : 'Gold'}</p>
      </div>
    `;
    spotlightSection.innerHTML += spotlightHTML;
  });
}

const randomMembers = getRandomMembers();
displaySpotlights(randomMembers);