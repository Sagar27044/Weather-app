function searchWeather() {
    var city = document.getElementById('search').value;
    var apiKey = 'dab1d6ca20527afe3c0036b9bb1f84d2'; 
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',IN&appid=' + apiKey;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = '';

            var cityName = data.name;
            var temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
            var weatherDescription = data.weather[0].description;

            var weatherHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;

            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}
