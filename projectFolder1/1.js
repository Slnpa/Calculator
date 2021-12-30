var time = new Date;
$(document).ready(() => {
    $("#info").html(time.getDate() + "." + (time.getMonth() + 1) + '.' + time.getFullYear() + " about " + time.getHours() + ':00');
    function constr(url,num){
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $("."+ num).children(".country").html(data.location.name);
            $("."+ num).children(".temp").html(data.current.temp_c + " °C");
            $("."+ num).children(".humidity").html("Humidity: " + data.current.humidity + "%");
            if (data.current.temp_c < 5) {
                $("."+ num).css('background-image', 'url(snowflake.png)')
            }
            else {
                $("."+ num).css('background-image', 'url(sunny.png)')
            }
        });
    };
    const Minsk = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Minsk&aqi=yes";constr(Minsk,1);
    const Moscow = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Moscow&aqi=yes";constr(Moscow,2);
    const Kiev = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Kiev&aqi=yes";constr(Kiev,3);
    const LasVegas = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Las Vegas&aqi=yes";constr(LasVegas,4);
    const NewYork = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=New York&aqi=yes";constr(NewYork,5);
    const Warszawa = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=Warszawa&aqi=yes";constr(Warszawa,6);
    const London = "http://api.weatherapi.com/v1/current.json?key=2bf732bd682d4b5dbc924226212912&q=London&aqi=yes";constr(London,7);
});
