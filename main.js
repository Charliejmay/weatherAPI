var button = document.querySelector('.submit');
var day = [];
var apiDate = [];
var apiWeather = [];
var apiTempMax = [];
var apiTempMin = [];
var apiDate = [];
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();
apiDate[0] = "Today";
apiDate[1] = "Tomorrow";

for(var i = 2; i < 7; i++){
    apiDate[i] = new Date(today.getFullYear(), today.getMonth(), today.getDate()+i).toLocaleDateString("en-US", options);
}

for(var i = 0; i<7; i++){
    day[i] = document.querySelector(`.day${i}`);
}


function loadMe() {
    fetch('https://www.7timer.info/bin/civillight.php?lon=-79.132&lat=42.296320&ac=0&unit=metric&output=json&tzshift=0')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for(var i = 0; i < 7; i++){
            //getters/setters
            apiWeather[i] = data['dataseries'][i]['weather'];
            apiTempMin[i] = data['dataseries'][i]['temp2m']['min'];
            apiTempMax[i] = data['dataseries'][i]['temp2m']['max'];
            //pretty up data
            if(apiWeather[i] == 'pcloudy'){
                apiWeather[i] = 'partially cloudy';
            }
            apiTempMin[i] = ((apiTempMin[i] * 1.8) + 32)
            apiTempMax[i] = ((apiTempMax[i] * 1.8) + 32)
            //appendData
            day[i].innerHTML = `${apiDate[i]}<br />${apiWeather[i]}, low of ${apiTempMin[i]}°F, high of ${apiTempMax[i]}°F.<br><br>`;
        }

        console.log(apiWeather);
        console.log(apiTempMin);
        console.log(apiTempMax);
        console.log(apiDate);
    })
}