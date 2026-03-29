function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
}
let form = document.querySelector("#form-info");
form.addEventListener("submit", searchCity);
