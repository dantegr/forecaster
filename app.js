const request = require('request');

const geocode = require('./utils/geocode');




// const url = 'https://api.darksky.net/forecast/131c59f4dd9c0c2c3f1bca28f69c250d/'+ geocode +'?units=si';


// request({ url: url , json: true },(error, response) => {
//   if (error){
//     console.log('unable to connect to weather service');
//   }else if (response.body.error) {
//     console.log('unable to find location');
//   }else {
//   console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + 'C degrees out. There is ' + response.body.currently.precipProbability +'% chance of rain' );
//   }
// });




geocode( 'Stockholm', (error,data) => {
  console.log('Error',error);
  console.log('Data',data);
});