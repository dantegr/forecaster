const request = require('request');

const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Thessaloniki.json?access_token=pk.eyJ1IjoiZGFudGVnciIsImEiOiJjanZhd2F1ZWowb3lkM3lxbWNwbXBmdW9lIn0.3gVF-ekrnv4XrVRJ4YBUmQ&limit=1';

request({ url: locationUrl , json: true },(error, response) => {
  if (error){
    console.log('Unable to connect to geocoding service');
  }else if (response.body.features.length === 0){
    console.log('Unable to find loacation')
  }else {
  const latitude = response.body.features[0].center[1];
 
  const longtitude = response.body.features[0].center[0];
 console.log(latitude, longtitude);
  }
});



const url = 'https://api.darksky.net/forecast/131c59f4dd9c0c2c3f1bca28f69c250d/40.736851,22.920227?units=si';


request({ url: url , json: true },(error, response) => {
  if (error){
    console.log('unable to connect to weather service');
  }else if (response.body.error) {
    console.log('unable to find location');
  }else {
  console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + 'C degrees out. There is ' + response.body.currently.precipProbability +'% chance of rain' );
  }
});