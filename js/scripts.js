// Business Logic:

function Ticket(releaseDate, age, cageStarring) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.age = age;
}

function Movie(name, newRelease) {
  this.name = name;
  this.newRelease = newRelease;
}

// End Business Logic

// UI Logic:

function newOrOld(title) {
  if (title = "between-worlds") {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  let title = $("select#movie").val();
  let newTitle = newOrOld(title);
  let movieName = new Movie(title, newTitle);
  let ticket = new Ticket();
  let ticketPrice = ();
  let 
});

// End UI Logic