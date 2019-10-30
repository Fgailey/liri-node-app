// All Required files
require("dotenv").config();
let Spotify = require('node-spotify-api');
let fs = require('fs')
let axios = require('axios')
let moment = require('moment')
// moment().format();

var Keys = require("./keys");
let masterKey = new Keys();
let spotify = new Spotify(masterKey.spotify);

// console.log(spotify);

// console.log(masterKey.omdb)

//inputs
let search = process.argv[2]
let param = process.argv.slice(3).join(' ')


if(!search){
    search = "concert-this"
}
console.log(search)
console.log(param)


// ================BEGIN FUNCTIONS============================
let findConcert = function(param){
    
    axios.get(`https://rest.bandsintown.com/artists/${param}/events?app_id=${masterKey.band}`)
    .then(function(response){
        for(let i = 0; i < 10; i++){
            let info = response.data[i]
            let venueName = info.venue.name
            let venueAddress = `${info.venue.city} ${info.venue.region}`
            let concertDate =  moment(info.datetime).format('L');
            let venueLog = `
            ------------------------------
            Venue Name: ${venueName}
            Venue Address: ${venueAddress}
            Venue Date: ${concertDate}
            ===============================
            `

            console.log(venueLog)

            fs.appendFile("log.txt", `${search}, ${param}, ${venueLog}`, function(err){
                if (err) {
                    console.log(err);
                  }
                
                  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
                //   else {
                //     console.log("Content Added!");
                //   }
            })
        }
    })
}

let findSong = function(param){
    
    spotify.search({ type: 'track', query: param }, function(err, data) {
        console.log(param)
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(data.items[1]); 
    });
};

let findMovie = function(param){
    console.log('movie')
}

let buckWild = function(param){
    console.log('wild')
}

// ==================END FUNCTIONS============================
switch (search){
    case 'concert-this':
        if(!param){
            param = "The Knocks"
        }
        console.log('concert yup')
        findConcert(param);
    break;
    case 'spotify-this-song':
        if(!param){
            param = 'Uneventful Days'
        }
        console.log('spotify yea')
        findSong(param);
    break;
    case 'movie-this':
        if(!param){
            param = 'Jaws'
        }
        console.log('a movie it be')
        findMovie();
    break;
    case 'do-what-it-says':
        console.log('wild west out in here')
        buckWild();
    break;
}