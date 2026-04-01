function displayTemp(response) {
  let tempElement = document.querySelector("#weather-temp");
  let temperature = Math.round(response.data.temperature.current);
  tempElement.innerHTML = temperature;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;

  let timeElement = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);

  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}">`;

  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;

  getForecast(response.data.city);

  console.log(response.data)
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes},`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  search(searchInput.value);
}

function search(city) {
  let apiKey = "ec8t62ba8b244884fo89d6da5a743070";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey2 = "ec8t62ba8b244884fo89d6da5a743070";
  let apiUrl2 = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey2}&units=metric`;
  axios(apiUrl2).then(displayForecast);
}

function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `<div class = "weather-forecast-day">
    <div class = "weather-forecast-date">${formatDay(day.time)}</div>   
    
    <img src = "${day.condition.icon_url}" class = "weather-forecast-icon" />

    <div class = "weather-forecast-temps">
    <div class = "weather-forecast-temp1">
        <strong>${Math.round(day.temperature.maximum)}°</strong>
    </div>
    <div class = "weather-forecast-temp2">${Math.round(day.temperature.minimum)}°</div>
    </div>
    </div>`;
    }
  });

  let forecastElement = document.querySelector("#weather-forecast");
  forecastElement.innerHTML = forecastHtml;
}

let form = document.querySelector("#form-info");
form.addEventListener("submit", searchCity);

search("Durban");
