"use strict"
$(document).ready(function () {
    $(".loader").fadeOut(1000, function(){
        $("#loading").fadeOut(1000, function(){
            $("body").css('overflow', 'auto')
            $("#loading").remove();
        });
    });
let informationItem = document.getElementById('informationItem');
let informationItem2 = document.getElementById('informationItem2');
let item = document.getElementById('item');
let Temp = document.getElementById('Temp');
let weather = document.getElementById('weather');
let weatherNight = document.getElementById('weatherNight');
let search = document.getElementById('search');
let city = document.getElementById('city');
let date = document.getElementById('date');
let locationDetails = document.getElementById('locationDetails');
let todayImg = document.getElementById('todayImg');
let todayTemp = document.getElementById('todayTemp');
let condition = document.getElementById('condition');
let pressure = document.getElementById('pressure');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let iconPress = document.getElementById('iconPress');
let iconHumi = document.getElementById('iconHumi');
let iconWind = document.getElementById('iconWind');

// API
async function getInformation(cityName)
{
    let weatherApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d00279ffd09e41c1bb895906232308&q=${cityName}&days=3`);
    let finalResult = await weatherApi.json();
    return finalResult
}


// Today data
function today(data)
{
    city.innerHTML = data.location.name
    date.innerHTML = data.location.localtime
    locationDetails.innerHTML = data.location.tz_id
    todayImg.setAttribute("src",data.current.condition.icon)
    todayTemp.innerHTML = data.current.temp_c
    condition.innerHTML = data.current.condition.text
    pressure.innerHTML = data.current.pressure_mb+' hpa'
    humidity.innerHTML = data.current.humidity+' %'
    wind.innerHTML = data.current.wind_kph+' km/h'
    
    if(data.current.is_day==1){
        weather.style.backgroundImage = "url('img/blue-sky-summer-dv-1920x1080.jpg')";
        item.style.backgroundImage = "url('img/blue-sky-summer-dv-1920x1080.jpg')";
        search.style.background = "rgba(255, 254, 254, 0.265)"
        city.style.color = "black"
        locationDetails.style.color = "black"
        todayTemp.style.color = "black"
        Temp.style.color = "black"
        date.style.color = "black"
        condition.style.color = "black"
        pressure.style.color = "black"
        humidity.style.color = "black"
        wind.style.color = "black"
        iconPress.style.color = "black"
        iconHumi.style.color = "black"
        iconWind.style.color = "black"
        informationItem.style.boxShadow = "rgba(27, 26, 26, 0.829) 0px 5px 15px"
        informationItem2.style.boxShadow = "rgba(27, 26, 26, 0.829) 0px 5px 15px"
    }
    else{
        weather.style.backgroundImage = "url('img/space-sky-star-cosmic-night-58-1920x1080.jpg')";
        item.style.backgroundImage = "url('img/space-sky-star-cosmic-night-58-1920x1080.jpg')";
        search.style.background = "#51f3bd3f"
        city.style.color = "#81f5ce"
        locationDetails.style.color = "#81f5ce"
        todayTemp.style.color = "#81f5ce"
        Temp.style.color = "#81f5ce"
        date.style.color = "#81f5ce"
        condition.style.color = "#81f5ce"
        pressure.style.color = "#81f5ce"
        humidity.style.color = "#81f5ce"
        wind.style.color = "#81f5ce"
        informationItem.style.boxShadow = "#81f5ce6f 0px 5px 15px"
        informationItem2.style.boxShadow = "#81f5ce6f 0px 5px 15px"
        informationItem.style.background = "#81f5ce08"
        informationItem2.style.background = "#81f5ce08"
        iconPress.style.color = "white"
        iconHumi.style.color = "white"
        iconWind.style.color = "white"
    }
}


// start app
async function startApp(country='london')
{
    let finalResult = await getInformation(country)
    if(!finalResult.error)
    {
        today(finalResult)
    }
}
startApp()


// search
search.addEventListener('input', function(){
    startApp(search.value)
})
});