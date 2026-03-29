function displayTemp(response) {
  let tempElement = document.querySelector("#weather-temp");
  let temperature = Math.round(response.data.temperature.current);
  tempElement.innerHTML = temperature;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  console.log(response.data.temperature);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let city = searchInput.value;
  let apiKey = "ec8t62ba8b244884fo89d6da5a743070";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}
let form = document.querySelector("#form-info");
form.addEventListener("submit", searchCity);
