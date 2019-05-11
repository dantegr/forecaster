const geocode = require('./utils/geocode');
const darksky = require('./utils/darksky');

const address = process.argv[2];
if(!address){
  console.log('please provide an address!');
} else {
  geocode( address, (error,{ latitude, longtitude, location }) => {
    if(error) {
      return console.log(error);
    }
    darksky(latitude, longtitude, (error,darkskyData) => {
      if(error) {
        return console.log(error);
      }
  
      console.log(location);
      console.log(darkskyData);
    });
  });
  
}


