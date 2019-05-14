const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define Paths for express
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath =path.join(__dirname,'../templates/partials');

//Setup handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory
app.use(express.static(publicDirectoryPath));

app.get('',(req, res) => {
  res.render('index',{
    title: 'Forecaster',
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
    message: 'You need some help',
    title: 'Help',
    name: 'Pantelis Tamtakos'
  });
});

app.get('/weather',(req, res) => {
  if (!req.query.address) {
    return res.send({
      error:'Address must be provided'
    });
  }
  console.log(req.query.search);
  res.send({
    forecast:'this the weather forecast',
    location:'Thessaloniki',
    address: req.query.address
    });
});

app.get('/products',(req,res) => {
  if (!req.query.search) {
    return res.send({
      error:'You must provide a search term'
    });
  }
  console.log(req.query.search);
  res.send({
    products:[]
  })
});

app.get('/help/*',(req,res) => {
  res.render('404', {
    title: '404 Page',
    error:'Help article not found',
    name: 'Pantelis Tamtakos'
  });
});

app.get('*',(req,res) => {
  res.render('404', {
    title: '404 Page',
    error:'Page not found',
    name: 'Pantelis Tamtakos'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});