const apiKey = '0b43dccf9bbcc62bb00f537487a1b794w'; // Replace with your own API key from OpenWeatherMap
const city = 'London'; // Replace with the name of the city you want to retrieve the weather data for
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(`Current temperature in ${city}: ${data.main.temp}°C`);
  })
  .catch(error => console.error(error));