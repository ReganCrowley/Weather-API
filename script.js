const resultsEl = document.getElementById("results");
const windEl = document.getElementById("wind");
const humidityEl = document.getElementById("humidity");

async function logJSONData(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d8422aff8e3d9e8570b536ff1f041419&units=metric`
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    resultsEl.innerHTML = "Temp = " + jsonData.main.temp;
    windEl.innerHTML = "Wind = " + jsonData.wind.speed;
    humidityEl.innerHTML = "Humidity = " + jsonData.main.humidity;
}
function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target[0].value)
    logJSONData(event.target[0].value)
}
