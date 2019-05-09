const request = require('request');

const geocode = require('./utils/geocode');
const darksky = require('./utils/darksky');


geocode( 'Stockholm', (error,data) => {
  console.log('Error',error);
  console.log('Data',data);
});

darksky(40.63333, 22.95, (error,data) => {
  console.log('Error:', error);
  console.log('Data:',data);
});