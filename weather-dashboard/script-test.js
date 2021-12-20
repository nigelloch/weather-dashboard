var searchBtn = document.querySelector("#search-btn")

var apiKey = "673f9746c24ef3e3526fcdc6fe8ef747"
var todayWeatherEl = document.getElementById("today-weather")
var date = moment().format("MM/DD/YYYY"); 
var fiveDayEl = document.getElementById("five-day")
var fiveDayCards = document.getElementById("fDayCards")

var date1 = moment().add(1, 'days').format('MM/DD/YYYY');
                    document.querySelector("#date1")
                    console.log(date1)
var date2 = moment().add(2, 'days').format('MM/DD/YYYY');
                    document.querySelector("#date2")
                    console.log(date2)
var date3 = moment().add(3, 'days').format('MM/DD/YYYY');
                    document.querySelector("#date3")
                    console.log(date3)
var date4 = moment().add(4, 'days').format('MM/DD/YYYY');
                    document.querySelector("#date4")
                    console.log(date4)
var date5 = moment().add(5, 'days').format('MM/DD/YYYY');
                    document.querySelector("#date5")
                    console.log(date5)






var searchCity = function() {

    var cityEl = document.getElementById("city-name")

    var textArea = document.querySelector("#text-area")

    var city = textArea.value
        console.log(city)
        cityEl.textContent = city.toUpperCase()
   

       // current weather fetch
       fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial")
       .then(response => response.json())
       .then(data => {
           console.log(data)

            var currentDateH3 = document.querySelector("#current-date")
               var date = new Date(data.dt * 1000);
               var month = date.getMonth()
               var getDay = date.getDay()
               var currentDay = month + " " + getDay
               currentDateH3.innerHTML = currentDay

            var tempEl = document.querySelector("#temp");
                tempEl.textContent = "Temp- " + data.main.temp + " F°"
            var windEl = document.querySelector("#wind");
               windEl.textContent = "Wind Speed- " + data.wind.speed + " MPH"
            var humidEl = document.querySelector("#humid");
               humidEl.textContent = "Humidity- " + data.main.humidity + "%"
            var icon = document.querySelector("#icon")
               icon.setAttribute("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
               console.log("http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")

               fiveDayEl.classList.remove("d-none");
               todayWeatherEl.classList.remove("d-none");
               fiveDayCards.classList.remove("d-none");

            var fiveDay = document.getElementById("#five-day-forecast")
        
            for (let i = 0; i < fiveDay.length; i++) {
                const element = fiveDay[i];
                console.log(fiveDay)
            
        }

        // UVI/5 day fetch        
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=hourly,&appid=" + apiKey + "&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                var uvi = document.querySelector("#uvi")
                    uvi.textContent = "UV Index- " + data.current.uvi
                
                    

    
// pull values from localStorage
// for (let index = 0; index < localStorage.length; index++) {
//     $("#" + localStorage.key(index)+" .textData").val(localStorage.getItem(localStorage.key(index)))
        


    })
})
}

$(".search-btn").on("click", function() {
    
    // key
    var cityKey = $(this).parent().attr("id")
    
    // value
    var textValue = $(this).siblings(".text-area").val();

    localStorage.setItem(cityKey, textValue);
});

searchBtn.addEventListener("click",searchCity)

// searchBtn.addEventListener("click",searchCity)

