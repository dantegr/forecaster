const request = require('request');

const url = 'https://api.darksky.net/forecast/131c59f4dd9c0c2c3f1bca28f69c250d/37.8267,-122.4233';

request({ url: url },(error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});