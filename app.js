// how do i use dotenv package?

require('dotenv').config();
var keys = require("./keys.js");
var moment = require('moment');
var axios = require('axios');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');
// var inquirer = require("inquirer");
var liriAssist = process.argv[2];
var input = process.argv.slice(3).join(" ");
console.log(input)
moment().format();


//=============== functions ==============================
function bandsInTown(input) {

    //  run a request with axios to the bands in town API with the artist specified
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp&date=upcoming").then(
        function (res) {

            for (var i = 0; i < res.data.length; i++) {
                console.log(" ==============");

                // Name of the venue
                console.log("Venue: " + res.data[i].venue.name);
                // Venue location
                console.log("Location: " + res.data[i].venue.city);

                // Date of the Event (use moment to format this as "MM/DD/YYYY")
                // this is how bandsintown displays the date/time 2019-04-06T00:00:00
                console.log("Date: " + moment(res.data[i].datetime).format("MM/DD/YYYY"));
            }
        }
    );

}

function omdb(input) {
    if (input === "") {
        input = "Mr. Nobody";
    }
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            //   console.log(response.data)
            console.log("Title of the movie: " + response.data.Title);
            console.log("Year the movie came out: " + response.data.Year);
            console.log("IMDB Rating of the movie: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language of the movie: " + response.data.Language);
            console.log("Plot of the movie: " + response.data.Plot);
            console.log("Actors in the movie: " + response.data.Actors);
        }
    );
}

function spotifyThis(input) {
    if(input===""){
        input = "The Sign Ace of Base";
    }
    spotify.search({
        type: 'track',
        query: input
    }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }

        var songInfo = data.tracks.items;
        console.log("Artist(s): " + songInfo[0].artists[0].name);
        console.log("Song Name: " + songInfo[0].name);
        console.log("Preview Link: " + songInfo[0].preview_url);
        console.log("Album: " + songInfo[0].album.name);
    });
}

function fileSystem(input) {
    fs.readFile('random.txt', "utf8", function (err, data) {

        if (err) {
            return console.log(err);
        }

        var dataArr = data.split(",");

        if (dataArr[0] === "concert-this") {
            var songcheck = dataArr[1].slice(1, -1);
            bandsInTown(songcheck);
        } else if (dataArr[0] === "spotify-this-song") {
            var songname = dataArr[1].slice(1, -1);
            spotifyThis(songname);
        } else if (dataArr[0] === "movie-this") {
            var movie_name = dataArr[1].slice(1, -1);
            ombd(movie_name);
        }

    });

}

// ============functions =================================

if (liriAssist === "concert-this") {
    bandsInTown(input);
} else if (liriAssist === "spotify-this-song") {
    spotifyThis(input);
} else if (liriAssist === "movie-this") {
    omdb(input);
} else if (liriAssist === "do-what-it-says") {
    fileSystem(input);
}