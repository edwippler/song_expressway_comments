$(document).ready(function(){ //this block of code is run once the page is fully loaded
  console.log('jquery was correctly sourced!');
  getAllSongs(); // calling the declared function
  function getAllSongs() {
    $.ajax({ //initiates an AJAX request
      type: 'GET', //specifies GET request type
      url: '/songs', // specifies the resource it's looking for
      success: function(response) { // if succful it will display the requested information in the console
        console.log('response', response);
      },
      error: function(error) { //otherwise it will display an error if unsuccessful
        console.log('error', error);
      }
    });
  }

  $('#addSongButton').on('click', function(){ //creates an event listener for the button on the DOM
    var newSongTitle = $('#title').val(); // retrieves the value of the title input field
    var newSongArtist = $('#artist').val();// retrieves the value of the artist input field
    var newSongObject = { // creates a new object using the values of the two input fields
      title: newSongTitle,
      artist: newSongArtist
    };
    console.log(newSongObject);
    $.ajax({ // initiates an AJAX request
      type: 'POST', // specifies the type of request as a post
      url: '/newSong', //specifies that the resource will be associated with the name newSong
      data: newSongObject, //specifies the thing that is being passed to the URL
      success: function(response) { // if succful this code will run, which will also run the declared function getAllSongs
        console.log('response', response);
        getAllSongs();
      },
      error: function(error) { // if unsuccessful an error will be displayed in the console
        console.log('error', error);
      }
    });
  });

});
