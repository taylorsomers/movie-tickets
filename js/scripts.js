// Business Logic:

function Ticket(releaseDate, age, cageStarring) {
  this.releaseDate = releaseDate;
  this.age = age;
  this.cageStarring = cageStarring;
}

// End Business Logic

// UI Logic:

$(document).ready(function() {
  let ticket = new Ticket();

});

// End UI Logic