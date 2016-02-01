// var request = require('request');
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bethpage,NY&units=imperial&appid=44db6a862fba0b067b1930da0d769e98';
var weather = require('./weather.js'); // ./ puts us in the current directory

// request({
//   url: url,
//   json: true
// }, function(error, response, body) {
//   if(error) {
//     console.log('Unable to fetch weather.');
//   } else {
//     // console.log(JSON.stringify(body, null, 4));
//     // It is X degrees in Astoria
//     console.log('It is ' + body.main.temp + ' degrees in ' + body.name + '!');
//   }
// });

weather(function(currentWeather) {
  console.log(currentWeather);
});