var express = require('express'); // states to use the express module and sets it as the variable
var app = express(); // calls a function of the express module
var bodyParser = require('body-parser'); //states to use the body-parser module

app.use(express.static('public')); //looks for complete files to use within the public folder - primarily index.html, then any scripts sourced into the html.

app.use(bodyParser.urlencoded({extended: true}));//built-in functionof body-parser that allows input to be passed back to server-side

var songList = [ // an array of objects
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

app.get('/songs', function(req, res) { //listens for get request from client and responds with the information stored in songList in this instance using /songs as the url
  res.send(songList);
});

app.post('/newSong', function(req, res){ // listens for post request from client/index.html input fields
  var newSong = req.body; // sets the values as the variable newSong
  if(newSong.artist !== "Justin Bieber"){//conditional checking if the artist is not "Justin Bieber".
    songList.push(newSong); // adding newSong to songList array
    console.log(songList); // logging the songList array in the terminal
    res.sendStatus(200); // responds OK confirming success.
  } else {
    res.sendStatus(500); // responds with a 500 error.
  }
});

app.listen(3000); // runs upon node open which sets up a server and listens on a specified port (this disables being able to open index.html without starting node because it changes the route)
