let apiKey = "ec8t62ba8b244884fo89d6da5a743070";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={query}&key={key}&units=metric";





function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
}
let form = document.querySelector("#form-info");
form.addEventListener("submit", searchCity);
