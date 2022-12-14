
//* grab date p element by class .date
//* use dayJS to find current date and assign to variable 'today'
//* change text context of datePEl to 'today'
var datePEl = document.querySelector(".date");
var today = dayjs().format('MMM D, YYYY');
datePEl.textContent = today;

//* grab time p element .time
//* use dayJS to find current time and assign to variable 'time'
//* change text content of timePEl to 'time'
var timePEl = document.querySelector(".time");
var time = dayjs().format('h:mm A');
timePEl.textContent = time;

//* grab nav element by tag <nav>
var navEl = document.querySelector("nav");
//* grab search-bar input by id #search-bar
var searchBarEl = document.getElementById("search-bar");
//* grab search-bar-btn by id #search-bar-btn
var searchBtnEl = document.getElementById("search-bar-btn");




var apiKey = "981e313affd3213b334e9460a4970735";
var cityName;

var country;

// var city;
// var state;

var lat;
var lon;

//* add event listener to searchBtn
//* set 'city' variable equal to input value from searchbar
//* set 'state' variable equal to input value from searchbar
searchBtnEl.addEventListener('click', function () {
    console.log(searchBarEl.value);

    city = searchBarEl.value;
    //state = searchBarEl.value;
    latlon();
})

//* function to find 'lat' and 'lon' (global) and store in var 'coordinates' (local)
//* pass coordinates from geo identifier api into next promise to get 'lat' and 'lon' from searchbar input
var latlon = function () {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},US&limit=1&appid=981e313affd3213b334e9460a4970735`)


        .then(response => response.json())
        .then(data => {
            console.log(data)
            lat = (data[0].lat)
            lon = (data[0].lon)
            console.log(lat, lon)
            console.log(data[0].country)
            console.log(data[0].name)
            console.log(data[0].state)
            state = data[0].state;
            country = data[0].country;
            console.log(state)

            var coordinates = [lat, lon]
            console.log(coordinates)
            //*coordinate[i]


            //infolatlonFuture(coordinates, state);
            infolatlonNow(coordinates, state, country);
            return coordinates, state, country
        })


}

var infolatlonNow = function (coordinates, state) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=981e313affd3213b334e9460a4970735`)
        .then(response => response.json())
        .then(data => {
            console.log(coordinates)
            console.log(data);
            console.log(data.main)
            //console.log(data.city.country)
            console.log(state)


            //country = data.city.country;


            console.log(data.name)
            cityName = data.name;
            var cityStateCountry = document.querySelector('#location')
            cityStateCountry.textContent = cityName + ', ' + state + ', ' + country;

            console.log(data.main.temp)
            //* temp now in Kelvin
            var tempKelvin = data.main.temp;
            //* temp now in Farenheit
            var tempFarenheit = Math.floor((tempKelvin - 273.15) * (9 / 5) + 32);
            var temperature = document.querySelector("#main-temperature");
            temperature.textContent = 'Temperature: ' + tempFarenheit + '℉';


            //* icon
            // console.log(data.weather[0].icon)
            // icon = data.weather[0].icon.png
            // //var iconSpan = document.querySelector('#icon');
            // var iconNew = document.createElement("img");
            // iconNew.setAttribute("src", "icon")
            // cityStateCountry.append(iconNew)


            //* data.weather[0]; start using El in var name when grabbing elements
            var descriptionLi = document.querySelector("#main-description");
            console.log(data.weather[0].description);
            // descriptionNow = data.weather[0].description.value;
            descriptionLi.textContent = 'Description: ' + data.weather[0].description;




            // console.log(data.list)
            // console.log(data.list[0].dt_txt)
            // var datetime = data.list[0].dt_txt;
            // console.log(dayjs(datetime).format('MMM D, YYYY h:mm A'));
            // //* date and time weather forecasted for
            // futureDayTime = dayjs(datetime).format('MMM D, YYYY h:mm A');
            // console.log(futureDayTime)
        })


}

var infolatlonFuture = function (coordinates, state) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=981e313affd3213b334e9460a4970735`)
        .then(response => response.json())
        .then(data => {
            console.log(coordinates)
            console.log(data);
            console.log(data.city)
            console.log(data.city.country)
            console.log(state)
            country = data.city.country;

            console.log(data.city.name)
            cityName = data.city.name;
            //var cityStateCountry = document.querySelector('#location')
            cityStateCountry.textContent = cityName + country;

            console.log(data.list)
            console.log(data.list[0].dt_txt)
            var datetime = data.list[0].dt_txt;
            console.log(dayjs(datetime).format('MMM D, YYYY h:mm A'));
            //* date and time weather forecasted for
            futureDayTime = dayjs(datetime).format('MMM D, YYYY h:mm A');
            console.log(futureDayTime)


            console.log(data.list[0].main.temp)
            //* temp in Kelvin
            var tempKevlin = data.list[0].main.temp;
            //* temp in Farenheit
            var tempFarenheit = (tempKevlin - 273.15) * (9 / 5) + 32;
            console.log(tempFarenheit);



        })
}





// var location = document.getElementById("main-location");
// var temperature = document.getElementById("main-wind");
// var humidity = document.getElementById("main-humidity");

// var infolatlon = function (coordinates) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e7a88aed42c57808fa6dc34c1ede065e`)

//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             console.log(data.main)
//             console.log(data.main.feels_like)
//             //* degrees in Kelvin
//             var feelsLikeKelvin = data.main.feels_like;
//             //* degrees in Farenheit
//             var feelsLikeFarenheit = (feelsLikeKelvin - 273.15) * (9 / 5) + 32;
//             console.log(feelsLikeFarenheit);
//         })

// }




