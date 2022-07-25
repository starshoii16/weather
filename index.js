fetch('https://api.openweathermap.org/data/2.5/weather?q=kazan&lang=ru&appid=c9409685a568424564851ea361b308df')
.then(function(resp) {return resp.json()})
.then(function(data) {
    console.log(data)
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.degres').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.i').textContent = data.weather[0]['description'];
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`

})
.catch(function() {

})