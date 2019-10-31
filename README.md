# liri-node-app

**************************
## Basic Function  
This App is a basic request and response to several different entertainment related API's. It logs the responses and has a basic read usage.  

## App Parts
The app is organized in 4 parts  
    * part 1: hidden files, used to hide the API ID's and secrets  
    * part 2: Key reader, creates a class that calls the hidden env file and allows the reader access  
    * part 3: The main file is liri.js this is where the console comands are run through and all peices are linked here.  
    * part 4: There are two text files, one to record the information that is called and another which allows a basic read file  
  
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
