const express = require('express');

const app = express();

app.get('',(req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help',(req, res) => {
  res.send({name: 'Pantelis', age: 32});
});

app.get('/about',(req, res) => {
  res.send('<h1>This the abou page</h1>');
});

app.get('/weather',(req, res) => {
  res.send({forecast:'this the weather forecast', location:'Thessaloniki'});
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});