const API_KEY = "5f40677cd5e9835133d2283159553e9a";
const border = document.getElementById("weather");
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const city = document.querySelector("#weather p:last-child")
            const weather = document.querySelector("#weather p:first-child")
            
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} - ${data.main.temp}`;
        });
    border.classList.add("txtBox10bg");
}
function onGeoError(){
    alert("Can't find you, No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);