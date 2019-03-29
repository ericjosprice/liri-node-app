# liri-node-app
###unit 10 homework

deployed link:  https://ericjosprice.github.io/liri-node-app/

repository: https://github.com/ericjosprice/liri-node-app.git


##What the project does:
    LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

##Why the project is useful

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands:


concert-this

spotify-this-song

movie-this

do-what-it-says

Technologies used:

Node.js
Javascript
npm packages: momentJS, spotify, axios, fs, dotenv

##How users can get started with the project

Using liri bot may proove to be difficult for those who are unfamiliar with using terminal/command line, installing required NPM packages, and signing up for API keys with spotify.

below is a link to a short video that covers Liri Bot's features, and a description

https://drive.google.com/file/d/1w7EMSaxE8oegUekaaYLPP4hqT4CXYGH7/view

there are 4 functions to choose from: 

1: node app.js concert-this <band/artist name here> will show upcoming events for the specified artist. specifically, venue name, city, and date will display. This data is pulled from the bandsintown.com REST API.

2: node app.js spotify-this-song <song name here> This command will show the following information about the song in one's terminal/command window: Artist(s), song name, A preview link of the song from Spotify, and Album name.

If no song is provided then the program will default to
"The Sign" by Ace of Base

3: node app.js movie-this <movie name here> 

This will output the following information to your terminal/command window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
If one doesn't type a movie title, Liri will output data for the movie 'Mr. Nobody.'

4: node app.js do-what-it-says

This will output the command, which exists in random.txt
##Where users can get help with your project
    contact Eric Price for assistance with this project
##Who maintains and contributes to the project
    Eric Price soley maintains and contributes to this project
