const apiKey = "65ed92c901c347568b1ac127ea6233b9"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status == 404 || city == ""){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
        
    }else{
        document.querySelector('.error').style.display = "none"
        document.querySelector('.weather').style.display = "block"
    }
    var data = await response.json()
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h"

    document.querySelector('.weather-icon').src = "images/" + data.weather[0].main +".png"
}

const searchBox = document.getElementById('city_input'),
      searchBtn = document.getElementById('city_button');
      
    
searchBtn.addEventListener('click' ,()=>{
    checkWeather(searchBox.value)
})


