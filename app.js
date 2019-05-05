const request = require('request');

let lat;
let long;

const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Thessaloniki.json?access_token=pk.eyJ1IjoiZGFudGVnciIsImEiOiJjanZhd2F1ZWowb3lkM3lxbWNwbXBmdW9lIn0.3gVF-ekrnv4XrVRJ4YBUmQ&limit=1';

request({ url: locationUrl , json: true },(error, response) => {
  const latitude = response.body.features[0].center[1];
  lat = latitude;
  const longtitude = response.body.features[0].center[0];
  long = longtitude;
});



const url = 'https://api.darksky.net/forecast/131c59f4dd9c0c2c3f1bca28f69c250d/'+ lat +','+ long +'?units=si';


request({ url: url , json: true },(error, response) => {
  console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is ' + response.body.currently.precipProbability +'% chance of rain' );
});