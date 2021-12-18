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
   
       
    var currDate = moment().format("MM/DD/YYYY");
        console.log(currDate)
        

        // current weather fetch
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data)

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
                    

        // UVI/5 day fetch        
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=hourly,&appid=" + apiKey + "&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                var uvi = document.querySelector("#uvi")
                    uvi.textContent = "UV Index- " + data.current.uvi
                
                

                // 5 day temp
                var day1temp = document.querySelector("#day1temp")
                    day1temp.textContent = "Temp- " + data.daily[1].temp.max + " F°"
                    console.log(day1temp)
                var day2temp = document.querySelector("#day2temp")
                    day2temp.textContent = "Temp- " + data.daily[2].temp.max + " F°"
                    console.log(day2temp)
                var day3temp = document.querySelector("#day3temp")
                    day3temp.textContent = "Temp- " + data.daily[3].temp.max + " F°"
                    console.log(day3temp)
                var day4temp = document.querySelector("#day4temp")
                    day4temp.textContent = "Temp- " + data.daily[4].temp.max + " F°"
                    console.log(day4temp)
                var day5temp = document.querySelector("#day5temp")
                    day5temp.textContent = "Temp- " + data.daily[5].temp.max + " F°"
                    console.log(day5temp)
                // 5 day humidity
                var day1humid = document.querySelector("#day1humid")
                    day1humid.textContent = "Humidity- " + data.daily[1].humidity + "%"
                    console.log(day1humid)
                var day2humid = document.querySelector("#day2humid")
                    day2humid.textContent = "Humidity- " + data.daily[2].humidity + "%"
                    console.log(day2humid)
                var day3humid = document.querySelector("#day3humid")
                    day3humid.textContent = "Humidity- " + data.daily[3].humidity + "%"
                    console.log(day3humid)
                var day4humid = document.querySelector("#day4humid")
                    day4humid.textContent = "Humidity- " + data.daily[4].humidity + "%"
                    console.log(day4humid)
                var day5humid = document.querySelector("#day5humid")
                    day5humid.textContent = "Humidity- " + data.daily[5].humidity + "%"
                    console.log(day5humid)
                // 5 day wind
                var day1wind = document.querySelector("#day1wind")
                    day1wind.textContent = "Wind- " + data.daily[1].wind_speed + " MPH"
                    console.log(day1wind)
                var day2wind = document.querySelector("#day2wind")
                    day2wind.textContent = "Wind- " + data.daily[2].wind_speed + " MPH"
                    console.log(day2wind)
                var day3wind = document.querySelector("#day3wind")
                    day3wind.textContent = "Wind- " + data.daily[3].wind_speed + " MPH"
                    console.log(day3wind)
                var day4wind = document.querySelector("#day4wind")
                    day4wind.textContent = "Wind- " + data.daily[4].wind_speed + " MPH"
                    console.log(day4wind)
                var day5wind = document.querySelector("#day5wind")
                    day5wind.textContent = "Wind- " + data.daily[5].wind_speed + " MPH"
                    console.log(day5wind)
                // // 5 day uvi
                // var day1uvi = document.querySelector("#day1uvi")
                //     day1uvi.textContent = "UV Index- " + data.daily[1].uvi
                //     console.log(day1uvi)
                // var day2uvi = document.querySelector("#day2uvi")
                //     day2uvi.textContent = "UV Index- " + data.daily[2].uvi
                //     console.log(day2uvi)
                // var day3uvi = document.querySelector("#day3uvi")
                //     day3uvi.textContent = "UV Index- " + data.daily[3].uvi
                //     console.log(day3uvi)
                // var day4uvi = document.querySelector("#day4uvi")
                //     day4uvi.textContent = "UV Index- " + data.daily[4].uvi
                //     console.log(day4uvi)
                // var day5uvi = document.querySelector("#day5uvi")
                //     day5uvi.textContent = "UV Index- " + data.daily[5].uvi
                //     console.log(day5uvi)
                

        
        




    

    
// pull values from localStorage
// for (let index = 0; index < localStorage.length; index++) {
//     $("#" + localStorage.key(index)+" .textData").val(localStorage.getItem(localStorage.key(index)))
        



        // fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + apiKey + "&units=imperial")
        //     .then(response => response.json())
        //     .then(oneCallData => {
        //         console.log(oneCallData);
        //         var uvi = document.querySelector("#date1")
        //             uvi.textContent = oneCallData.daily.uvi

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

