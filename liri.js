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
                
            })
        }
    })
}

let findSong = function(param){
    
    spotify.search({ type: 'track', query: param })
        .then(function(response) {
        // console.log(response.tracks.items[0]);
        let info = response.tracks.items[0]

        let artists = info.album.artists[0].name
        let song = param
        let preview = info.preview_url
        let album = info.album.name

        let spotifyPrint = `
        -/-/-/-/-/-/-/-/-/-/-/-/-
        Artist: ${artists}
        Song Name: ${song}
        Preview Link: ${preview}
        Album: ${album}
        -|-|-|-|-|-|-|-|-|-|-|-|-`
        console.log(spotifyPrint)

        //Appends to log.txt
        fs.appendFile("log.txt", `${search}, ${param}, ${spotifyPrint}`, function(err){
            if (err) {
                console.log(err);
              }
            
        })
    })
        .catch(function(err) {
        console.log(err);
        });
};

let findMovie = function(param){
    //added cause switch wasnt working
    if(!param){
        param = 'jaws'
    }
    axios.get(`https://www.omdbapi.com/?apikey=${masterKey.omdb}&t=${param}`)
    .then(function(response){
        let info = response.data

        let title = info.Title
        let year = info.Year
        let rating = info.imdbRating
        let rottenReview = info.Ratings[1].Value
        let produced = info.Country
        let plot = info.Plot
        let actors = info.actors

        let moviePrint = `
        *-*-*-*-*-*-*-*-*-*-*-*
        Title: ${title}
        Year: ${year}
        IMDB Rating: ${rating}
        Rotten Tomatoes: ${rottenReview}
        Country Produced: ${produced}
        Plot Desc: ${plot}
        Actors: ${actors}
        -*-*-*-*-*-*-*-*-*-*-*-*`
        console.log(moviePrint)
        fs.appendFile("log.txt", `${search}, ${param}, ${moviePrint}`, function(err){
            if (err) {
                console.log(err);
              }
            
        })
    })
}

let buckWild = function(){
    console.log('wild')
    fs.readFile('random.txt',"utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
        var dataArr = data.split(",");
      
        console.log(dataArr);
        param = dataArr[1]

        findSong(param);
        
    });
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
            param = 'The Sign'
        }
        console.log('spotify yea')
        findSong(param);
    break;
    case 'movie-this':
        console.log('a movie it be')
        findMovie();
    break;
    case 'do-what-it-says':
        console.log('wild west out in here')
        buckWild();
    break;
}