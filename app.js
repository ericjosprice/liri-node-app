// how do i use dotenv package?

require('dotenv').config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var axios = require('axios');
var SpotifyApp = require('node-spotify-api');
moment().format();

// Make it so liri.js can take in one of the following commands:


//
// concert-this//
//
// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(res){

// Name of the venue

// Venue location

// Date of the Event (use moment to format this as "MM/DD/YYYY")
  }


);









//
// spotify-this-song//
//

//
// movie-this//
//
// Then run a request with axios to the OMDB API with the movie specified
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );


//
// do-what-it-says//
//