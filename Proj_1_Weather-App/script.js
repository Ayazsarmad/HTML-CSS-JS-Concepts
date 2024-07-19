// https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=76c4a2d83e936dcbc95d01efaa9c8ef9&units=metric



const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&";


const api_key = "76c4a2d83e936dcbc95d01efaa9c8ef9";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", ()=>{
    checkweather(searchInput.value);
})

async function checkweather(city){
    const responce = await fetch (api_url + `q=${city}` + `&appid=${api_key}`);
    const data = await responce.json();
    console.log(data);
    document.querySelector("#city").innerHTML = data.name;
    const tempwithoutRound = data.main.temp;
    const tempwithRound = Math.round(tempwithoutRound);
    document.querySelector("#temprature").innerHTML = tempwithRound + "°c";
    document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    const feels_likeoutRound = data.main.feels_like;
    const feelswithRound = Math.round(feels_likeoutRound);
    document.querySelector("#feel_like").innerHTML = feelswithRound + "°c";
    
}


