console.log('Clinet side js is loaded');

fetch('http://localhost:3000/weather?address=').then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});