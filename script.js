const inputbox = document.getElementById('input-box');
const searchbtn = document.getElementById("search");
const weatherimage = document.getElementById('weather-image');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');
const locationnotfound=document.getElementById("location-not-found");
const weatherbody=document.getElementById("weather-body");


async function checkweather(city) {
    const api_key = "15276fe875519d6bb608940adcdc7935";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`)
        .then(response =>
            response.json()
        );
        if (weather_data.cod === `404`) {
            // weatherimage.src="assets/snow.png";
            locationnotfound.style.display="flex";
            weatherbody.style.display="none";
            console.log("error");
            return; 
        }
    console.log(weather_data);
    weatherbody.style.display="flex";
    locationnotfound.style.display="none";
    temperature.innerHTML = `${parseFloat(weather_data.main.temp - 273.15).toFixed(1)} °C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed} Km/H`;
    description.innerHTML = `${weather_data.weather[0].main}`;
    if (weather_data.weather[0].main == "Clouds") {
        weatherimage.src = "assets/cloud.png";
    }
    else if (weather_data.weather[0].main == "Rain") {
        weatherimage.src = "assets/rain.png";
    }
    else if (weather_data.weather[0].main == "Clear") {
        weatherimage.src = "assets/clear.png";
    }
    else if (weather_data.weather[0].main == "Mist") {
        weatherimage.src = "assets/mist.png";
    }
    else if (weather_data.weather[0].main == "Snow") {
        weatherimage.src = "assets/snow.png";
    }
    



}

searchbtn.addEventListener('click', function () {
    checkweather(inputbox.value);
});

