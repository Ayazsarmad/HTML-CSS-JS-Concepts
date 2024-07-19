// https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=76c4a2d83e936dcbc95d01efaa9c8ef9&units=metric



const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&";


const api_key = "76c4a2d83e936dcbc95d01efaa9c8ef9";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector("#weatherImg");

searchBtn.addEventListener("click", ()=>{
    checkweather(searchInput.value);
})

document.querySelector(".error").style.display = "none"; 

async function checkweather(city){
    const responce = await fetch (api_url + `q=${city}` + `&appid=${api_key}`);
    const data = await responce.json();

    if(responce.status == 404){
        document.querySelector(".error").style.display = "Block";
        document.querySelector(".area").style.display = "none";

    }else{
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
        document.querySelector("#weatherNow").innerHTML = data.weather[0].main;
        
    
        if(data.weather[0].main == "Clouds"){
            weatherImg.src = "./images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherImg.src = "./images/clear.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "./images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherImg.src = "./images/mist.png";
        }else if(data.weather[0].main == "Rain"){
            weatherImg.src = "./images/rain.png";
        }else if(data.weather[0].main == "Snow"){
            weatherImg.src = "./images/snow.png";
        }
    
        document.querySelector(".area").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }
   
}


