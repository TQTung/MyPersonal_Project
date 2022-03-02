const search = document.querySelector('.search')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const temperatureValue = document.querySelector('.temperature_value')
const weatherDesc = document.querySelector('.weather_desc')
const time = document.querySelector('.date_time')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const humidity = document.querySelector('.humidity span')
const content = document.querySelector('.content')
const body = document.querySelector('body')


async function changeWeather(searchCityCountry){
    var apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${searchCityCountry}&appid=4230d794eafd84a5b9e6a6b2d025f627&units=metric&lang=vi`
    let data = await fetch(apiURL).then(response=> response.json())

    if (data.cod === 200){
        content.classList.remove('hide')
        console.log(data)
        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        time.innerHTML = new Date().toLocaleString('vi')
        let temp = temperatureValue.innerHTML = Math.round(data.main.temp)
        weatherDesc.innerHTML = data.weather[0]?data.weather[0].description:'Nothing' 
        visibility.innerHTML = data.visibility + ' m'
        wind.innerHTML = data.wind.speed + ' km/h'
        humidity.innerHTML = data.main.humidity +' %'
        
        
        body.setAttribute('class','hot')
        
         if(temp <= 25){
            body.setAttribute('class','cool')
        }
         if(temp<= 22){
            body.setAttribute('class','warm')
        }
        if(temp <= 19){
            body.setAttribute('class','cold')
        }
         
    }else{
        content.classList.add('hide')
    }  
}

search.addEventListener('keypress',(e)=>{
    if(e.which === 13){
        let searchCityCountry =  search.value.trim()
        changeWeather(searchCityCountry)
    }
})
changeWeather('ninh binh')