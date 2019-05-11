const path = require('path');
const express = require('express');

const app = express();

//Define Paths for express
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates');

//Setup handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//Setup static directory
app.use(express.static(publicDirectoryPath));

app.get('',(req, res) => {
  res.render('index',{
    title: 'Weather App',
    name: 'Pantelis Tamtakos'
  });
});

app.get('/about',(req, res) => {
  res.render('about', {
    title: 'About me',
    name:'Pantelis Tamtakos'
  });
});

app.get('/help',(req, res) => {
  res.render('help', {
    message: 'You need some help'
  });
});

app.get('/weather',(req, res) => {
  res.send({forecast:'this the weather forecast', location:'Thessaloniki'});
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});