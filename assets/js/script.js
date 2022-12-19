
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

// input = {
//     state: 
// }
var searchArr = {}
//* add event listener to searchBtn
//* set 'city' variable equal to input value from searchbar
//* set 'state' variable equal to input value from searchbar
var run = searchBtnEl.addEventListener('click', function () {
    console.log(searchBarEl.value);
    city = searchBarEl.value;


    //saveArr(city);
    // for (var i = 0; i < 10; i++) {
    //     searchArr = {
    //         "i": city
    //     }
    //     //searchArr.push("hello")
    //     console.log(searchArr)
    // }

    // city = searchBarEl.value;
    //state = searchBarEl.value;
    latlon();
})


let stateCountry = []
//* function to find 'lat' and 'lon' (global) and store in var 'coordinates' (local)
//* pass coordinates from geo identifier api into next promise to get 'lat' and 'lon' from searchbar input
var latlon = function () {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},US&limit=1&appid=981e313affd3213b334e9460a4970735`)


        .then(response => response.json())
        .then(data => {
            console.log(data)
            saveData(data)
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
            var stateCountry = city + ',' + state + ', ' + country;
            //* local storage
            saveLastSearch(coordinates);
            //saveArr(stateCountry)


            //localStorage.setItem("stateCountry", JSON.stringify(stateCountry))
            localStorage.setItem("lastSearch", "stateCountry");




            //renderLastSearch(stateCountry);
            infolatlonFuture(coordinates, state, country);
            infolatlonNow(coordinates, state, country);
            //makeCardEls(data)
            return coordinates, state, country, stateCountry
        })

}

// //* generate elements and assign to classes with data attributes

// containerDiv = document.getElementById('newCards')

// function makeCardEls(data) {
//     for (i = 0; i < 40; i + 8) {
//         var forecastCardsRowHeader = document.createElement('h3');
//         rowCardAttribute = data[i].dt_txt
//         forecastCardsRowHeader.setAttribute('class', 'cards');
//         forecastCardsRowHeader.textContent = data[i].dt_txt;

//         forecastCardsRow.setAttribute('data-hour', rowCardAttribute)

//         forecastCardsRow.setAttribute('class', 'search-bar shadow-lg my-2')
//         rowCardAttribute = data[i]

//     }
// }
// for (var i = 0; i < 10; i++) {
//     var b = {
//         i: ['value']
//     }
//     console.log(b)
// }
//* how do i keep adding values to stateCountry without deleting prior and append new list items with this value
// var searchArr = {
//     stateCountry: []
// }

// var newArr = {}
// for (var i = 0; i < 10; i++) {
//     var newArr = searchArr.push('[state]')
// }

renderingObject = {

}

var saveData = function (data) {
    var saveHere = []
    for (var i = 0; i < saveHere.length + 1; i++) {
        console.log(data[0])
        saveHere.push(data[0])[i]
        i++

        console.log(saveHere)




        localStorage.setItem('dataArray', JSON.stringify(saveHere))
        console.log(saveHere)

    }

    console.log(saveHere)
    render(saveHere)

}

var render = function renderer(dataArray) {
    for (var i = 0; i < dataArray.length + 1; i++) {
        console.log(JSON.parse(localStorage.getItem(dataArray)))
        var store = JSON.parse(localStorage.getItem(dataArray))


    }

    console.log(store)
    // displayStored(store)
    // return store
}


// arrayStore = {}
// function displayStored(store) {
//     for (var i = 0; i < arrayStore.length + 1; i++) {
//         arrayStore[i] = store



//     }
//     console.log(arrayStore)
// }



// var b = ["hi"]

// var arr = {

// }

// for (var i = 0; i < 10; i++) {
//     arr[i] = "b"
// }
// console.log(arr)
// var searchArr = {

// }
// // console.log(newArr)
// function saveArr(stateCountry) {


//     for (var i = 0; i < 10; i++) {
//         if (searchArr[i++] = "") {
//             searchArr[i++] = stateCountry
//         } else {
//             return searchArr
//         }
//         // searchArr = stateCountry[i]
//         // searchArr = {
//         //     stateCountry
//         // }

//         //searchArr.push("hello")
//         //console.log(searchArr)
//         // searchArr[i] = stateCountry
//         //searchArr[i++] = stateCountry
//     }

//     //newArr.push(searchArr)
//     console.log(searchArr)
//     //var stateCountryArr = searchArr.push(stateCountry)

//     //console.log(stateCountryArr)
//     // var searchArr = {}
//     //searchArr.stateCountry.push(stateCountry);
//     console.log(searchArr)
//     localStorage.setItem('stateCountryArr', JSON.stringify(searchArr))
//     return searchArr




function saveLastSearch(lat, lon) {
    var coordinates = [lat, lon];
    localStorage.setItem("coordinates", JSON.stringify(coordinates));
    //rerunCoordinates(coordinates)
    //renderLastSearch(coordinates);
}

var dropdownLiEl = document.querySelector(".li")
var allListItems = document.querySelectorAll("list-group-item")


// function rerunCoordinates() {
//     var storedCoordinates = JSON.parse(localStorage.getItem("coordinates"))
//     console.log(storedCoordinates[0][0])
//     init(storedCoordinates[0][0])
// }
//* render 1st search
function renderLast() {
    for (var i = 0; i < localStorage.length; i++) {
        //var storedSearch = JSON.parse(localStorage.getItem("searchArr"[i]))
        console.log(JSON.parse(localStorage.getItem("stateCountryArr")))
        var stored = JSON.parse(localStorage.getItem("stateCountryArr"))
        console.log(stored.stateCountry)
        storedValue = stored.stateCountry

        // console.log(localStorage.stateCountryArr[i])

        document.querySelector(".list-group-item").innerHTML = storedValue;

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
//* what day out of future arraya has most
//coordinates = storedCoordinates[0][0]
function init(coordinates) {
    // coordinates = storedCoordinates[0][0]
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
            //makeCardEls(data.list)
            console.log(coordinates)
            console.log(data);// {cod: '200', ....list: Array(40)}
            console.log(data.city)
            console.log(data.city.country)
            console.log(state)
            //country = data.city.country;
            console.log(data.city.name)
            //cityName = data.city.name;
            //var cityStateCountry = document.querySelector('#location')
            //cityStateCountry.textContent = cityName + country;

            //var cardsDiv = document.getElementById("cards");

            console.log(data.list)//(40)[{..}, ]
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
            var datelist = data.list
            //makeCardEls(data)


            // var datetime1 = data.list[1].dt_text;
            // console.log(datetime1)


            for (var i = 0; i < datelist.length; i++) {
                var skip = 8
                var delta = Math.floor(datelist.length / skip)
                console.log(delta)

                for (var j = 0; j < datelist[i].length; j = j + delta) {
                    var cardsDiv = document.createElement('div');
                    cardAttr = dayjs().day(j).format('D')
                    cardsDiv.setAttribute('data-day', 'cardAttr')
                    forecastCardsDiv.setAttribute('class', 'card col-12 col-md-3 col-lg-2 shadow-xl p-3 mx-2')


                    console.log(cardAttr)
                    conseol.log(forecastCardsDiv)
                    return cardAttr

                }
                //cardAttr = dayjs().day(j).format('D')
                //console.log(cardAttr)
                console.log(datelist[i])
                console.log(datelist[i].dt_txt)



                var datetimeSee = data.list[i].dt_txt;
                console.log(datetimeSee)
                dayandtime = dayjs(datetimeSee).format('dddd, MMM D');
                console.log(dayandtime)
                dayNumber = dayjs(datetimeSee).format('D');
                console.log(dayNumber)
                dayHour = dayjs(datetimeSee).format('h A')
                console.log(dayHour)
                var arrLength = datelist[i].length
                console.log(arrLength)
                var cardNumber = arrLength / 8
                //console.log(cardNumber)
                var description = data.list[i].weather[0].description;
                console.log(description)
                var temperatureKelvin = data.list[i].main.temp
                var temperatureFarenheit = Math.floor((temperatureKelvin - 273.15) * (9 / 5) + 32)
                var wind = Math.floor(data.list[i].wind.speed)






                if (dayHour == '9 AM') {
                    list = {

                        "dateLong": datetimeSee,
                        "dateFull": dayandtime,
                        "day": dayNumber,
                        "hour": dayHour,
                        "description": description,
                        "temp": temperatureFarenheit,
                        "wind": wind

                    }

                    //for (var i = 0; i < datelist[i].length; i = i + cardNumber) {
                    //console.log(list.date)
                    console.log(list.dateFull)
                    console.log(dayNumber)
                    console.log(list)
                    makeCardEls(list)
                }
                // for (var j = 0; i < data.list.length; j++) {
                //     var forecastCardsDiv = document.createElement('div')
                //     rowCardAttr = list.dayNumber
                //     console.log(data.list[i])
                //     forecastCardsDiv.setAttribute('data-day', rowCardAttr)
                //     forecastCardsDiv.setAttribute('class', 'card col-12 col-md-3 col-lg-2 shadow-xl p-3 mx-2')
                //     containerDiv.appendChild(forecastCardsDiv)
                // }
                // //rowCardAttr = dayjs(data).day(i).format('D')
                // var futuredate = dayjs(data.list[i].dt_txt).format('D'); //20, 21, 22
                // console.log(futuredate)

                // rowCardAttr = futuredate[i]
                // forecastCardsDiv.setAttribute('data-day', rowCardAttr)
                // forecastCardsDiv.setAttribute('class', 'card col-12 col-md-3 col-lg-2 shadow-xl p-3 mx-2')
                // containerDiv.appendChild(forecastCardsDiv)

            }
            console.log(list.dateFull)

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

//* generate elements and assign to classes with data attributes

containerDiv = document.getElementById('newCards')
//var day = data.list
//console.log(data)

function makeCardEls(list) {
    console.log(list)




    //for (i = 0; i < list.length; i++) {
    forecastCardsDiv = document.createElement('div')
    forecastCardsDiv.setAttribute('class', 'card col-12 col-md-3 col-lg-2 shadow-xl p-3 mx-2')

    cardAttr = list.day
    forecastCardsDiv.setAttribute('data-day', 'cardAttr')
    containerDiv.appendChild(forecastCardsDiv)

    var futureDayNineAm = document.createElement('p')
    futureDayNineAm.setAttribute('class', 'future-day')
    futureDayNineAm.textContent = list.dateFull
    forecastCardsDiv.appendChild(futureDayNineAm)

    var futureDayTime = document.createElement('p')
    futureDayTime.textContent = list.hour
    forecastCardsDiv.appendChild(futureDayTime)

    var futureCardBodyDiv = document.createElement('div')
    futureCardBodyDiv.setAttribute('class', 'card card-body')
    // futureCardBodyDiv.setAttribute('data-index', i)
    forecastCardsDiv.appendChild(futureCardBodyDiv)

    var cardIcon = document.createElement('i')
    //cardIcon.setAttribute('data-index', i)
    cardIcon.setAttribute('class', 'material-icons')
    cardIcon.setAttribute('style', 'font-size: 48px')

    if (list.description.includes("clear")) {
        cardIcon.textContent = "brightness_5"
    }

    if (list.description.includes("clouds", "cloudy")) {
        cardIcon.textContent = "cloud"
    }

    if (list.description.includes("rain", "rainy")) {
        cardIcon.textContent = "opacity"
    }
    futureCardBodyDiv.append(cardIcon)

    var description = document.createElement('p')
    description.setAttribute('class', 'card-text')
    description.textContent = list.description
    futureCardBodyDiv.append(description)

    var table = document.createElement('table')
    table.setAttribute('class', 'card table table-striped')
    futureCardBodyDiv.append(table)

    var tableRowTemp = document.createElement('tr')
    tableRowTemp.setAttribute('id', 'tablerow')
    table.append(tableRowTemp)

    var tableHeaderTemp = document.createElement('th')
    tableHeaderTemp.textContent = "Temp: "
    tableRowTemp.append(tableHeaderTemp)

    var tableDataTemp = document.createElement('td')
    tableDataTemp.setAttribute('class', 'temp')
    tableDataTemp.setAttribute('id', 'tabledata')
    tableDataTemp.textContent = list.temp + "℉"
    tableRowTemp.append(tableDataTemp)

    var tableRowWind = document.createElement('tr')
    tableRowWind.setAttribute('id', 'tablerow')
    table.append(tableRowWind)

    var tableHeaderWind = document.createElement('th')
    tableHeaderWind.textContent = "Wind: "
    tableRowWind.append(tableHeaderWind)

    var tableDataWind = document.createElement('td')
    tableDataWind.setAttribute('class', 'wind')
    tableDataWind.setAttribute('id', 'tabledata')
    tableDataWind.textContent = list.wind + "mph"
    tableRowWind.append(tableDataWind)












    //     console.log(list.day)
    //     //rowCardAttr = dayjs(data).day(i).format('D')
    //     var futuredate = dayjs(data.list[i].dt_txt).format('D'); //20, 21, 22
    //     console.log(futuredate)

    //     rowCardAttr = futuredate[i]
    //     forecastCardsDiv.setAttribute('data-day', rowCardAttr)
    //     forecastCardsDiv.setAttribute('class', 'card col-12 col-md-3 col-lg-2 shadow-xl p-3 mx-2')
    //     containerDiv.appendChild(forecastCardsDiv)
    // console.log(i)
    // console.log(data)
    // console.log(data.list[i].dt_txt)
    // console.log(data.list.length)
    // var forecastCardsRowHeader = document.createElement('h3');
    // console.log(data)
    // rowCardAttr = dayjs(data).day(i).format('D')
    // console.log(data)
    // //var futureDate = dayjs().day(data.list[i].dt_txt).format('dddd, MMM D');
    // //console.log(futureDate)
    // rowCardAttribute = dayjs().day(data.list[i]).format('dddd, MMM D');
    // console.log(rowCardAttribute = dayjs(data.list[i].dt_txt).format('dddd, MMM D'));

    // forecastCardsRowHeader.setAttribute('data-hour', rowCardAttribute)

    //console.log(data[i])

    //forecastCardsRowHeader.setAttribute('class', 'cards');
    //forecastCardsRowHeader.textContent = data[i].dt_txt;
    // console.log(data.list[0])
    // var futuredate = dayjs(data.list[i].dt_txt).format('dddd, MMM D');
    // var forecastCardsDiv = document.createElement('div')
    // rowCardAttr = dayjs(data).day(i).format('D')
    // dayjs(data).day(i).format('D')
    // // forecastCardsDiv.setAttribute('data-day', rowCardAttr)
    // // console.log(rowCardAttr)


    // //  rowCardAttribute = dayjs(data.list[i].dt_txt).format('dddd, MMM D');
    // //forecastCardsDiv.setAttribute('data-day', rowCardAttribute)


    // forecastCardsDiv.setAttribute('class', 'card col-12 col-md-3 col-lg-2 shadow-xl p-3 mx-2')
    // //forecastCardsDiv.textContent = dayjs(data.list[i].dt_txt).format('dddd, MMM D')
    // containerDiv.appendChild(forecastCardsDiv);


}

//* display dropdown upon click event on searchbar
//* add li items from local storage
//* hide dropdown El until click event
var dropDownMenuEl = document.querySelector(".dropdown-menu")
dropDownMenuEl.style.display = "none"

searchBarEl.addEventListener("click", function () {
    dropDownMenuEl.style.display = "block";
})

//* if day number increased, log the increased date day in the next card

function nextDayCard(data) {
    var nextDay = dayjs(data.list[8].dt_txt).format('dddd, MMM D');
    console.log(nextDay)
    var futureDay2El = document.getElementById("future-day2")
    futureDay2El.textContent = nextDay

    //* grab quick text by id 'card-text' and enter description
    var cardpEl = document.querySelector(".card-text2");
    cardpEl.textContent = data.list[6].weather[0].description;


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




