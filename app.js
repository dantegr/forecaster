const geocode = require('./utils/geocode');
const darksky = require('./utils/darksky');

const address = process.argv[2];
if(!address){
  console.log('please provide an address!');
} else {
  geocode( address, (error,data) => {
    if(error) {
      return console.log(error);
    }
    darksky(data.latitude, data.longtitude, (error,darkskyData) => {
      if(error) {
        return console.log(error);
      }
  
      console.log(data.location);
      console.log(darkskyData);
    });
  });
  
}


