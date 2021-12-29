var time = new Date
$(document).ready(() => {
    $("#info").html(time.getDate() + "." + (time.getMonth() + 1) + '.' + time.getFullYear() + " about " + time.getHours() + ':00');
    let api = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Minsk&aqi=yes";
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(".1").children(".country").html(data.location.name);
            $(".1").children(".temp").html(data.current.temp_c + " °C");
            $(".1").children(".humidity").html("Humidity: " + data.current.humidity + "%");
            if (data.current.temp_c < 5) {
                $(".1").css('background-image', 'url(snowflake.png)')
            }
            else {
                $(".1").css('background-image', 'url(sunny.png)')
            }
            
        });
    api = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Moscow&aqi=yes";
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(".2").children(".country").html(data.location.name);
            $(".2").children(".temp").html(data.current.temp_c + " °C");
            $(".2").children(".humidity").html("Humidity: " + data.current.humidity + "%");
            if (data.current.temp_c < 5) {
                $(".2").css('background-image', 'url(snowflake.png)')
            }
            else {
                $(".2").css('background-image', 'url(sunny.png)')
            }
        })
    api = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Kiev&aqi=yes";
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(".3").children(".country").html(data.location.name);
            $(".3").children(".temp").html(data.current.temp_c + " °C");
            $(".3").children(".humidity").html("Humidity: " + data.current.humidity + "%");
            if (data.current.temp_c < 5) {
                $(".3").css('background-image', 'url(snowflake.png)')
            }
            else {
                $(".3").css('background-image', 'url(sunny.png)')
            }
        })
    api = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Las Vegas&aqi=yes";
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(".4").children(".country").html(data.location.name);
            $(".4").children(".temp").html(data.current.temp_c + " °C");
            $(".4").children(".humidity").html("Humidity: " + data.current.humidity + "%");
            if (data.current.temp_c < 5) {
                $(".4").css('background-image', 'url(snowflake.png)')
            }
            else {
                $(".4").css('background-image', 'url(sunny.png)')
            }
        })
    api = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=New York&aqi=yes";
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(".5").children(".country").html(data.location.name);
            $(".5").children(".temp").html(data.current.temp_c + " °C");
            $(".5").children(".humidity").html("Humidity: " + data.current.humidity + "%");
            if (data.current.temp_c < 5) {
                $(".5").css('background-image', 'url(snowflake.png)')
            }
            else {
                $(".5").css('background-image', 'url(sunny.png)')
            }
        })
    api = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Warszawa&aqi=yes";
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(".6").children(".country").html(data.location.name);
            $(".6").children(".temp").html(data.current.temp_c + " °C");
            $(".6").children(".humidity").html("Humidity: " + data.current.humidity + "%");
            if (data.current.temp_c < 5) {
                $(".6").css('background-image', 'url(snowflake.png)')
            }
            else {
                $(".6").css('background-image', 'url(sunny.png)')
            }
        })
    api = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=London&aqi=yes";
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(".7").children(".country").html(data.location.name);
            $(".7").children(".temp").html(data.current.temp_c + " °C");
            $(".7").children(".humidity").html("Humidity: " + data.current.humidity + "%");
            if (data.current.temp_c < 5) {
                $(".7").css('background-image', 'url(snowflake.png)')
            }
            else {
                $(".7").css('background-image', 'url(sunny.png)')
            }
        })
});