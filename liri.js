require("dotenv").config();

let Spotify = require('node-spotify-api');

var Keys = require("./keys");

let masterKey = new Keys();

let spotify = new Spotify(masterKey.spotify);

console.log(spotify);

