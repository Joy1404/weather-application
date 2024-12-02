const apiKey = "api- key"; 

document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

async function getWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (response.ok) {
            console.log(data)
            document.getElementById("city-name").textContent = `Weather in ${data.name}`;
            document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind-speed").textContent = `Wind speed:${data.wind.speed}km/h`;
            document.getElementById("sunrise").textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
            document.getElementById("sunset").textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
            
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Unable to fetch weather data. Please try again.");
        console.error(error);
    }
}
