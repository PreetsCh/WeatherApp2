function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature= response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");

    console.log(response.data.condition.description);

     cityElement.innerHTML =response.data.city;
     descriptionElement.innerHTML=response.data.condition.description;
     temperatureElement.innerHTML=Math.round(temperature);
     humidityElement.innerHTML=`${response.data.temperature.humidity}%`;

}

function searchCity(city){
    let apiKey = "8fbf7bbacd67ca6b5t4o3f620d474a76";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
  searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Zurich");