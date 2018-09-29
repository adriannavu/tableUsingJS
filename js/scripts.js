var players = [{
    first: 'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
  {
    first: 'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
  {
    first: 'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
  {
    first: 'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
  {
    first: 'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
    first: 'Renee',
    last: 'Williams',
    position: 'Guard',
    year: 'Senior'
  },
  {
    first: 'Jennifer',
    last: 'Olsen',
    position: 'Forward',
    year: 'Junior'
  }
];

var allStars = [{
    first: 'Melanie',
    last: 'Akers',
    position: 'Forward',
    school: 'Johnson High School'
  },
  {
    first: 'Olivia',
    last: 'Carter',
    position: 'Foward',
    school: 'Providence Day School'
  },
  {
    first: 'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school: ' Springfield High School'
  },
  {
    first: 'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
  {
    first: 'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
    first: 'Darleen',
    last: 'Lawrence',
    position: 'Guard',
    school: 'Everton High School'
  },
  {
    first: 'Jennifer',
    last: 'Olsen',
    position: 'Forward',
    school: 'Springfield High School'
  }
];

//initializes variable for the HTML content being built inside table
var tableHTML = '';
//gets the empty table content area
var tableContent = document.getElementById('table-content');
//initializes variable for HTML content being built inside list of all star players
var allStarsHTML = '';
//gets the empty div content area
var elAllStarsDiv = document.getElementById('all-stars');

function buildTable() {
  //builds table
  var tbl = document.createElement("table");
  //table header
  tableHTML += '<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>';

  /*Populates table using data. Includes logic to make the text bold when the player is a senior.*/

  for (i = 0; i < players.length; i++) {
    if (players[i].year === 'Senior') {
      tableHTML += '<tr><td><b>' + players[i].first + '</b></td><td><b>' + players[i].last + '</b></td><td><b>' + players[i].position + '</b></td><td><b>' + players[i].year + '</b></td></tr>';
    } else {
      tableHTML += '<tr><td>' + players[i].first + '</td><td>' + players[i].last + '</td><td>' + players[i].position + '</td><td>' + players[i].year;
    }
  }
  /*Displays the results in the empty tableArea*/
  tableContent.innerHTML = tableHTML;
}
buildTable();

/*Finds the players that made the All-State team, and displays a message with the results:
"Congratulations to Springfield's 2018 North Carolina All-State honorees: ____."
Displays the message in div below the table.*/
function buildAllStarsList() {
  for (i = 0; i < players.length; i++) {
    for (j = 0; j < allStars.length; j++) {
      if (players[i].last == allStars[j].last) {
        allStarsHTML += '<li>' + players[i].first + ' ' + players[i].last;
        allStarsHTML += '</li>';
      }
    }
  }
  elAllStarsDiv.innerHTML = "Congratulations to Springfield's 2018 North Carolina All-State honorees: <ul>" + allStarsHTML + '</ul>';
}
buildAllStarsList();