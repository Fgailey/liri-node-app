console.log('this is loaded');
require("dotenv").config();
// exports.spotify = {
//   id: process.env.SPOTIFY_ID,
//   secret: process.env.SPOTIFY_SECRET
// };

class Keys {
    constructor(){
    this.spotify = {
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET,
    }
    this.band = {
        id: process.env.BAND_ID,
    }
    this.omdb = {
        id: process.env.OMDB_ID
    }
}
}

module.exports = Keys;
