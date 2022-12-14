
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
    state = searchBarEl.value;
    latlon();
})

//* function to find 'lat' and 'lon' (global) and store in var 'coordinates' (local)
//* pass coordinates from geo identifier api into next promise to get 'lat' and 'lon' from searchbar input
var latlon = function () {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=981e313affd3213b334e9460a4970735`)


        .then(response => response.json())
        .then(data => {
            console.log(data)
            lat = (data[0].lat)
            lon = (data[0].lon)
            console.log(lat, lon)
            console.log(data[0].country)
            console.log(data[0].name)
            console.log(data[0].state)

            var coordinates = [lat, lon]
            console.log(coordinates)
            //*coordinate[i]


            infolatlon(coordinates);
            return coordinates
        })


}

var location = document.getElementById("main-location");
var temperature = document.getElementById("main-wind");
var humidity = document.getElementById("main-humidity");

var infolatlon = function (coordinates) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=981e313affd3213b334e9460a4970735`)

        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.main)
            console.log(data.main.feels_like)
            //* degrees in Kelvin
            var feelsLikeKelvin = data.main.feels_like;
            //* degrees in Farenheit
            var feelsLikeFarenheit = (feelsLikeKelvin - 273.15) * (9 / 5) + 32;
            console.log(feelsLikeFarenheit);
        })

}

// var get = function () {
//     method: 'GET'
// }

// var city = function () {


//     fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',' + 'US&limit=1&appid=' + apiKey, get)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
// }

// city();

// var city = function () {


//     fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${apiKey}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
// }

// city();
// var longandlat = function () {

//     fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + & lon={ lon } & appid={ API key }') 
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })


// }


// var run1 = function () {
//     const option = {
//         method: 'GET',

//     }
// };

// var namesListel = document.getElementById("namesList")


// fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey, run1)

//     .then((response) => response.json())
//     .then((data) => {
//         //console.log("Successful POST request:", data);
//         console.log(data.city.name)
//         var cityName = data.city.name;
//         var cityNameLiEl = document.createElement("<li>")
//         cityNameLiEl.textContent = cityName.value

//         return data;

//     })
//     .catch(error => console.log('error', error));
//         // console.error("Error in POST request:", error);


