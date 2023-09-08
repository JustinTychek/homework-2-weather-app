const baseurl = `https://api.weatherapi.com/v1/`;
const apikey = `62f6b2623bf945a398a204733232808&q`;

function initListeners() {
  $("#submit").on("click", (e) => {
    //stops from reloading page
    e.preventDefault();
    let city = $("#city").val();
    let zip = $("#zip").val();
    let timeframe = document.querySelector(
      'input[name="choice"]:checked'
    ).value;
    let days = document.getElementById("days").value;

    if (city != "") {
      let cityURL =
        baseurl +
        timeframe +
        ".json?key=" +
        apikey +
        "&q=" +
        city +
        "&days=" +
        days +
        "&aqi=no&alerts=no";
      $.getJSON(cityURL, (data) => {
        $(".weather-data").html("");
        if (timeframe == "forecast") {
          for (let i = 0; i < days; i++) {
            $(".weather-data").append(`
              <div class="one-day">
              <div class="important">
              <h1> Day ${i + 1}:</h1>
              <p>${data.location.name}</p>
              <p>${data.location.region}</p>
              <p>${data.location.country}</p>
              <p>${data.forecast.forecastday[i].date}</p>
              <p>Max Temp: ${Math.round(
                data.forecast.forecastday[i].day.maxtemp_f
              )}&deg</p>
              <p>Min Temp: ${Math.round(
                data.forecast.forecastday[i].day.mintemp_f
              )}&deg</p>
              <p>Avg Temp: ${Math.round(
                data.forecast.forecastday[i].day.avgtemp_f
              )}&deg</p>
              </div>
               <div class="day-content">
               <p>Sunrise: ${data.forecast.forecastday[i].astro.sunrise}</p>
               <p>Sunset: ${data.forecast.forecastday[i].astro.sunset}</p>
               <p>Moonrise: ${data.forecast.forecastday[i].astro.moonrise}</p>
               <p>Moonset: ${data.forecast.forecastday[i].astro.moonset}</p>
               <p>Moon phase: ${
                 data.forecast.forecastday[i].astro.moon_phase
               }</p>
               <br>
               <br>
               
              </div>
             
              </div>
              <h2>HOURLY:</h2>`);
            for (let j = 0; j < 24; j++) {
              $(".weather-data").append(`
                <div class="hourly">
                <p> ${data.forecast.forecastday[i].hour[j].time}</p>
                <p> ${Math.round(
                  data.forecast.forecastday[i].hour[j].temp_f
                )}&deg</p>
                <div class="condition"><img src="${
                  data.forecast.forecastday[i].hour[j].condition.icon
                }" alt="">
                <p> ${
                  data.forecast.forecastday[i].hour[j].condition.text
                }</p></div>
                <p>Wind: ${
                  data.forecast.forecastday[i].hour[j].wind_mph
                } mph</p>
                <p>Wind Direction: ${
                  data.forecast.forecastday[i].hour[j].wind_dir
                }</p>
                <p>Precipitation: ${
                  data.forecast.forecastday[i].hour[j].precip_in
                }"</p>
                <p>Humidity: ${
                  data.forecast.forecastday[i].hour[j].humidity
                }%</p>
                <p>Feels like: ${Math.round(
                  data.forecast.forecastday[i].hour[j].feelslike_f
                )}&deg</p>
                <p>Windchill: ${Math.round(
                  data.forecast.forecastday[i].hour[j].windchill_f
                )}&deg</p>
                <p>Heat index: ${Math.round(
                  data.forecast.forecastday[i].hour[j].heatindex_f
                )}&deg</p>
                <p>Dew point: ${Math.round(
                  data.forecast.forecastday[i].hour[j].dewpoint_f
                )}&deg</p>
                <p>UV: ${data.forecast.forecastday[i].hour[j].uv}</p>
                </div>
                `);
            }
          }
        } else if (timeframe == "current") {
          $(".weather-data").append(`
          <div class="one-day">
          <div class="important">
          <img src="${data.current.condition.icon}" alt="">
          <p class="temp">${Math.round(data.current.temp_f)}&deg</p>
          <p>${data.current.condition.text}</p>
          <p>Feels like ${Math.round(data.current.feelslike_f)}&deg</p>
          </div>
          <div class="day-content">
          <p>${data.location.name}</p>
          <p>${data.location.region}</p>
          <p>${data.location.country}</p>
          <p>${data.location.localtime}</p>
          
          <p>Wind: ${data.current.wind_mph} mph</p>
          <p>Wind Direction: ${data.current.wind_dir}</p>
          <p>Humidity: ${data.current.humidity}</p>
          <p>Precipitation ${data.current.precip_in}"</p>
          <p> UV: ${data.current.uv}</p>
          </div>
          </div>`);
        }
      }).fail(function (e) {
        console.log("error", e);
      });
    }

    if (zip != "") {
      let zipURL =
        baseurl +
        timeframe +
        ".json?key=" +
        apikey +
        "&q=" +
        zip +
        "&days=" +
        days +
        "&aqi=no&alerts=no";
      console.log(zipURL);
      $.getJSON(zipURL, (data) => {
        $(".weather-data").html("");
        if (timeframe == "forecast") {
          for (let i = 0; i < days; i++) {
            $(".weather-data").append(`
              <div class="one-day">
              <div class="important">
              <h1> Day ${i + 1}:</h1>
              <p>${data.location.name}</p>
              <p>${data.location.region}</p>
              <p>${data.location.country}</p>
              <p>${data.forecast.forecastday[i].date}</p>
              <p>Max Temp: ${Math.round(
                data.forecast.forecastday[i].day.maxtemp_f
              )}&deg</p>
              <p>Min Temp: ${Math.round(
                data.forecast.forecastday[i].day.mintemp_f
              )}&deg</p>
              <p>Avg Temp: ${Math.round(
                data.forecast.forecastday[i].day.avgtemp_f
              )}&deg</p>
              </div>
               <div class="day-content">
               <p>Sunrise: ${data.forecast.forecastday[i].astro.sunrise}</p>
               <p>Sunset: ${data.forecast.forecastday[i].astro.sunset}</p>
               <p>Moonrise: ${data.forecast.forecastday[i].astro.moonrise}</p>
               <p>Moonset: ${data.forecast.forecastday[i].astro.moonset}</p>
               <p>Moon phase: ${
                 data.forecast.forecastday[i].astro.moon_phase
               }</p>
               <br>
               <br>
               
              </div>
             
              </div>
              <h2>HOURLY:</h2>`);
            for (let j = 0; j < 24; j++) {
              $(".weather-data").append(`
                <div class="hourly">
                <p> ${data.forecast.forecastday[i].hour[j].time}</p>
                <p> ${Math.round(
                  data.forecast.forecastday[i].hour[j].temp_f
                )}&deg</p>
                <div class="condition"><img src="${
                  data.forecast.forecastday[i].hour[j].condition.icon
                }" alt="">
                <p> ${
                  data.forecast.forecastday[i].hour[j].condition.text
                }</p></div>
                <p>Wind: ${
                  data.forecast.forecastday[i].hour[j].wind_mph
                } mph</p>
                <p>Wind Direction: ${
                  data.forecast.forecastday[i].hour[j].wind_dir
                }</p>
                <p>Precipitation: ${
                  data.forecast.forecastday[i].hour[j].precip_in
                }"</p>
                <p>Humidity: ${
                  data.forecast.forecastday[i].hour[j].humidity
                }%</p>
                <p>Feels like: ${Math.round(
                  data.forecast.forecastday[i].hour[j].feelslike_f
                )}&deg</p>
                <p>Windchill: ${Math.round(
                  data.forecast.forecastday[i].hour[j].windchill_f
                )}&deg</p>
                <p>Heat index: ${Math.round(
                  data.forecast.forecastday[i].hour[j].heatindex_f
                )}&deg</p>
                <p>Dew point: ${Math.round(
                  data.forecast.forecastday[i].hour[j].dewpoint_f
                )}&deg</p>
                <p>UV: ${data.forecast.forecastday[i].hour[j].uv}</p>
                </div>
                `);
            }
          }
        } else if (timeframe == "current") {
          $(".weather-data").append(`
          <div class="one-day">
          <div class="important">
          <img src="${data.current.condition.icon}" alt="">
          <p class="temp">${Math.round(data.current.temp_f)}&deg</p>
          <p>${data.current.condition.text}</p>
          <p>Feels like ${Math.round(data.current.feelslike_f)}&deg</p>
          </div>
          <div class="day-content">
          <p>${data.location.name}</p>
          <p>${data.location.region}</p>
          <p>${data.location.country}</p>
          <p>${data.location.localtime}</p>
          
          <p>Wind: ${data.current.wind_mph} mph</p>
          <p>Wind Direction: ${data.current.wind_dir}</p>
          <p>Humidity: ${data.current.humidity}</p>
          <p>Precipitation ${data.current.precip_in}"</p>
          <p> UV: ${data.current.uv}</p>
          </div>
          </div>`);
        }
      }).fail(function (e) {
        console.log("error", e);
      });
    }
  });
}

/* `$(document).ready(function () { ... });` is a jQuery function that waits for the HTML document to
be fully loaded before executing the code inside the function. In this case, it is calling the
`getData()` function, which retrieves data from a JSON file and logs it to the console. */
$(document).ready(function () {
  initListeners();
  //   getData();
});
