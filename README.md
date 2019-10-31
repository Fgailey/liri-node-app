# liri-node-app

**************************
## Basic Function  
This App is a basic request and response to several different entertainment related API's. It logs the responses and has a basic read usage.  This app calls on one of three API's (Spotify, Bands in the town or OMDB). Return basic data on the paramater searched for.

## App Parts

* 1: Hidden files, used to hide the API ID's and secrets  
* 2: Key reader, creates a class that calls the hidden env file and allows the reader access  
* 3: Liri.js, is the main file where the console comands are run through and where all components of the app are linked.  
* 4: API's, there are 3 apis which are used for a very basic search paramater.
* 5: Text files, these text files can be used to read or write information. There is a log file to store called info and a random file that is read for one of the functions.
  
 ## Instructions
To run the app you must first locate and navigate to the correct file path containing the files.  
Then use a node command to call a specific function  
For finding a concert the command would look something like   
* node ./liri.js concert-this 'artist name here'    
For finding info on a song the command would look like  
* node ./liri.js spotify-this-song 'song name here'  
For finding info on a movie the command would look like  
* node ./liri.js movie-this 'movie name here'  
For making a call to read the random.txt file and use the saved commands you would use the command  
* node ./liri.js do-what-it-says

## Links
* [Youtube Link](https://youtu.be/cEWLzA3LyCA) 

* [Github Link](https://github.com/Fgailey)

* [LinkedIn](https://www.linkedin.com/in/foster-gailey-391292165/)

* [Portfolio](https://fgailey.github.io/Portfolio-2/)
