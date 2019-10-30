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

console.log(masterKey.omdb)

let search = process.argv[2]

let param = process.argv.slice(3).join(' ')


if(!search){
    search = "concert-this"
}
if(!param){
    param = "The Knocks"
}
console.log(search)
console.log(param)



let findConcert = function(param){
    axios.get(`https://rest.bandsintown.com/artists/${param}/events?app_id=${masterKey.band}`)
    .then(function(response){
        for(let i = 0; i < 10; i++){
            let info = response.data[i]
            let venueName = info.venue.name
            let venueAddress = `${info.venue.city} ${info.venue.region}`
            let concertDate =  moment(info.datetime).format('L');
            console.log(`
            ------------------------------
                Venue Name: ${venueName}
                Venue Address: ${venueAddress}
                Venue Date: ${concertDate}
            ===============================`)
        }
    })
}

// { offers:
//     [ { type: 'Tickets',
//         url:
//          'https://www.bandsintown.com/t/1016784651?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
//         status: 'available' } ],
//    venue:
//     { name: 'Royal Oak Music Theatre',
//       country: 'United States',
//       region: 'MI',
//       city: 'Royal Oak',
//       latitude: '42.4873085',
//       longitude: '-83.14743529999998' },
//    datetime: '2019-10-31T19:00:00',
//    on_sale_datetime: '2019-05-23T10:00:00',
//    description: 'Gryffin: GRAVITY II TOUR with The Knocks (DJ Set) & Bunt',
//    lineup: [ 'The Knocks' ],
//    id: '1016784651',
//    artist_id: '835569',
//    url:
//     'https://www.bandsintown.com/e/1016784651?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event' }
// findConcert()

switch (search){
    case 'concert-this':
        console.log('working')
        findConcert(param);
    break;
    case 'spotify-this-song':
        findSong()
    break;
    case 'movie-this':
        
    break;
    case 'do-what-it-says':

    break;
}