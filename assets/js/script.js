
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


init()

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
            var stateCountry = state + ', ' + country;
            //* local storage
            saveLastSearch(coordinates);
            saveArr(stateCountry)

            //localStorage.setItem("stateCountry", JSON.stringify(stateCountry))
            localStorage.setItem("lastSearch", "stateCountry");




            //renderLastSearch(stateCountry);
            infolatlonFuture(coordinates, state, country);
            infolatlonNow(coordinates, state, country);
            return coordinates, state, country
        })

}
function saveArr(stateCountry) {
    var searchArr = []
    searchArr.push(stateCountry);
    localStorage.setItem('stateCountryArr', JSON.stringify(searchArr))
}
function saveLastSearch(lat, lon) {
    var coordinates = [lat, lon];
    localStorage.setItem("coordinates", JSON.stringify(coordinates));
    //renderLastSearch(coordinates);
}

var dropdownLiEl = document.querySelector(".li")
var allListItems = document.querySelectorAll("list-group-item")

//* render 1st search
function renderLast() {
    for (var i = 0; i <= localStorage.length - 1; i++) {
        var storedSearch = JSON.parse(localStorage.getItem("stateCountryArr"))
        document.querySelector(".list-group-item").innerHTML = storedSearch;

    }
    // var lastSearch = JSON.parse(localStorage.getItem("stateCountry"));
    // console.log(lastSearch)
    // document.querySelector(".list-group-item").innerHTML = lastSearch;
}

function renderLast2() {
    var lastSearch = JSON.parse(localStorage.getItem("stateCountry"));
    console.log(lastSearch)
    document.querySelector(".list-group-item2").innerHTML = lastSearch;
}


function init() {

    renderLast();
    renderLast2();
}
var infolatlonNow = function (coordinates, state) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=981e313affd3213b334e9460a4970735`)
        .then(response => response.json())
        .then(data => {
            console.log(coordinates)
            console.log(data);
            console.log(data.main)
            console.log(state)

            console.log(data.name)
            cityName = data.name;
            var cityStateCountry = document.querySelector('#location')
            cityStateCountry.textContent = cityName + ', ' + state + ', ' + country;

            //* Temperature: data.main.temp (K)
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

            //* Wind Speed: data.wind
            var windLi = document.querySelector("#main-wind");
            windLi.textContent = 'Wind Speed: ' + data.wind.speed + 'mph';

            //* Humidity: data.main.humidity (%)
            var humidityLi = document.querySelector("#main-humidity");
            humidityLi.textContent = 'Humidity: ' + data.main.humidity + '%';

            // console.log(data.list)
            // console.log(data.list[0].dt_txt)
            // var datetime = data.list[0].dt_txt;
            // console.log(dayjs(datetime).format('MMM D, YYYY h:mm A'));
            // //* date and time weather forecasted for
            // futureDayTime = dayjs(datetime).format('MMM D, YYYY h:mm A');
            // console.log(futureDayTime)
        })


}

//* 5-day Weather Forecast cards:

var infolatlonFuture = function (coordinates, state) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=981e313affd3213b334e9460a4970735`)
        .then(response => response.json())
        .then(data => {
            console.log(coordinates)
            console.log(data);
            console.log(data.city)
            console.log(data.city.country)
            console.log(state)
            //country = data.city.country;
            console.log(data.city.name)
            //cityName = data.city.name;
            //var cityStateCountry = document.querySelector('#location')
            //cityStateCountry.textContent = cityName + country;

            //var cardsDiv = document.getElementById("cards");

            console.log(data.list)
            console.log(data.list[0].dt_txt)
            var datetime = data.list[0].dt_txt;
            console.log(dayjs(datetime).format('MMM D, YYYY h:mm A'));
            //* date and time weather forecasted for
            var oneDayTime = dayjs(datetime).format('dddd, MMM D');
            day = dayjs(datetime).format('dddd');
            dayNum = dayjs(datetimeSee).format('D')
            console.log(dayNum)
            time = dayjs(datetime).format('h:mm A')
            //*time = 12:00am
            console.log(time)

            // var datetime1 = data.list[1].dt_text;
            // console.log(datetime1)


            for (var i = 0; i < data.list.length; i++) {
                var datetimeSee = data.list[i].dt_txt;
                console.log(datetimeSee)
                dayandtime = dayjs(datetimeSee).format('MMM D h:mm A');
                console.log(dayandtime)
                dayNumber = dayjs(datetimeSee).format('D');
                console.log(dayNumber)


            }

            console.log(dayNumber)

            // var cardHeader = document.querySelector(".cards")
            // cardHeader.textContent = day

            //* grab pEl 'future-day' in first card under 5-day Weather Forecase
            var futureDayTimeEl = document.querySelector("#future-day");
            futureDayTimeEl.textContent = oneDayTime;

            //* grab quick text by id 'card-text' and enter description
            var cardpEl = document.querySelector(".card-text");
            cardpEl.textContent = data.list[1].weather[0].description;


            console.log(data.list[1].main.temp)
            //* temp in Kelvin
            var tempKevlin = data.list[1].main.temp;
            //* temp in Farenheit
            var tempFarenheit = (tempKevlin - 273.15) * (9 / 5) + 32;
            console.log(tempFarenheit);

            //* grab table data in 1st card for tabledata- 'temp', 'wind', 'humid'
            var oneDayTemp = document.querySelector(".temp");
            oneDayTemp.textContent = Math.floor(tempFarenheit) + '℉';

            var oneDayWind = document.querySelector(".wind");
            oneDayWind.textContent = data.list[1].wind.speed + 'mph';

            var oneDayHumid = document.querySelector(".humid");
            oneDayHumid.textContent = data.list[1].main.humidity + '%';


            nextDayCard(data);


            var dx = data.list[1].weather[0].description;
            generateIcon(dx)





            //* grab icon <i> and generate icon based off description (inludes)
            // var iClass = document.querySelector(".material-icons");
            // // //iClass.setAttribute("class", "material-icons")

            // // //* added Google Icon link
            // // //* add text content as deacription for preset google icons with class 'material-icons'

            // if (data.list[1].weather[0].description.includes("clear")) {
            //     iClass.textContent = "brightness_5"
            // }

            // if (data.list[1].weather[0].description.includes("clouds", "cloudy")) {
            //     iClass.textContent = "cloud"
            // }

            // }







        })
}

//* display dropdown upon click event on searchbar
//* add li items from local storage
//* hide dropdown El until click event
var dropDownMenuEl = document.querySelector(".dropdown-menu")
dropDownMenuEl.style.display = "none"

searchBarEl.addEventListener("click", function () {
    dropDownMenuEl.style.display = "block";
})


function nextDayCard(data) {
    var nextDay = dayjs(data.list[6].dt_txt).format('dddd, MMM D');
    console.log(nextDay)
    var futureDay2El = document.getElementById("future-day2")
    futureDay2El.textContent = nextDay

    //* grab quick text by id 'card-text' and enter description
    var cardpEl = document.querySelector(".card-text2");
    cardpEl.textContent = data.list[1].weather[0].description;


    console.log(data.list[6].main.temp)
    //* temp in Kelvin
    var tempKevlin = data.list[6].main.temp;
    //* temp in Farenheit
    var tempFarenheit = (tempKevlin - 273.15) * (9 / 5) + 32;
    console.log(tempFarenheit);

    //* grab table data in 1st card for tabledata- 'temp', 'wind', 'humid'
    var oneDayTemp = document.querySelector(".temp2");
    oneDayTemp.textContent = Math.floor(tempFarenheit) + '℉';

    var oneDayWind = document.querySelector(".wind2");
    oneDayWind.textContent = data.list[6].wind.speed + 'mph';

    var oneDayHumid = document.querySelector(".humid3");
    oneDayHumid.textContent = data.list[6].main.humidity + '%';

    //* pass dx into generate icon to decide which icon to display based on description in given array
    var dx = data.list[6].weather[0].description
    generateIcon2(dx);

}

//* for first card
function generateIcon(description) {
    var iClass = document.querySelector(".material-icons");
    // //iClass.setAttribute("class", "material-icons")

    // //* added Google Icon link
    // //* add text content as deacription for preset google icons with class 'material-icons'

    if (description.includes("clear")) {
        iClass.textContent = "brightness_5"
    }

    if (description.includes("clouds", "cloudy")) {
        iClass.textContent = "cloud"
    }
}

//* for 2nd card
function generateIcon2(description) {
    var iClass = document.querySelector("#icon2");
    // //iClass.setAttribute("class", "material-icons")

    // //* added Google Icon link
    // //* add text content as deacription for preset google icons with class 'material-icons'

    if (description.includes("clear")) {
        iClass.textContent = "brightness_5"
    }

    if (description.includes("clouds", "cloudy")) {
        iClass.textContent = "cloud"
    }
}

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





