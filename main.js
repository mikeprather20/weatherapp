const cityForm = document.getElementById('cityForm');


cityForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const cityName = event.path[0][0].value
    loadData(cityName)
});


const connect2api = async (cityName)=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0fa2d64ccdcdfb651ebc982ac829c480&units=imperial`)
    const data = await res.json()
    console.log(data)
    return data
};

const loadData = async (cityName)=>{
    const data = await connect2api(cityName)
    const myWeather = [data]
    myWeather.map(getWeather)
    //console.log(myWeather)
};

const getWeather = (myWeather)=>{
    const card = document.createElement('div')
    card.innerHTML =
    `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Currently ${myWeather.main.temp.toPrecision(3)}°F</h5>
        <ul>
            <li>The High ${myWeather.main.temp_max.toPrecision(3)}°F</li>
            <li>The Low ${myWeather.main.temp_min.toPrecision(3)}°F</li>
            <li>Humidity ${myWeather.main.humidity}%</li>
            <li>Forcast is ${myWeather.weather[0].main}</li>
        </ul>
    </div>
  </div>
    `
    document.body.append(card)
}