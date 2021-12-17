var searchBtn = document.querySelector("#search-btn")

var textArea = document.querySelector("#text-area")

var apiKey = "673f9746c24ef3e3526fcdc6fe8ef747"

var cityEl = document.getElementById("city-name")



var searchCity = function() {

    var city = textArea.value

    console.log(city)
    cityEl.textContent = city.toUpperCase()
        

        // current weather fetch
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var tempEl = document.querySelector("#temp");
                tempEl.textContent = "Temp-      " + data.main.temp + "F°"
                var icon = document.querySelector("#icon")
                icon.setAttribute("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
                    console.log("http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
        
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var humidEl = document.querySelector("#humid");
                    humidEl.textContent = "Humidity-      " + data.main.humidity

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var windEl = document.querySelector("#wind");
                    windEl.textContent = "Wind Speed-      " + data.wind.speed

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=hourly,&appid=" + apiKey)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                var uvi = document.querySelector("#uvi")
                    uvi.textContent = "UV Index-      " + data.current.uvi


            // fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=hourly,&appid=" + apiKey)
            // .then(response => response.json())
            // .then(oneCallData => {
            //     console.log(oneCallData);
            //     var uvi = document.querySelector("#uvi")
            //         uvi.textContent = "UV Index-      " + oneCallData.current.uvi
            //     var windEl = document.querySelector("#wind");
            //         windEl.textContent = "Wind Speed-      " + data.wind.speed
            //     var humidEl = document.querySelector("#humid");
            //         humidEl.textContent = "Humidity-      " + data.main.humidity





    
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

