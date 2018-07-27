/* JavaScript to Search and Filter a College Football database */

// from data.js
var tableData = data;

// select the table body
var tbody = d3.select("tbody");

// populate the rows in the College Football table
tableData.forEach((season) => {
    var row = tbody.append("tr");
    Object.entries(season).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the submit button
var submit = d3.select("#submit");

function dateReturn() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Print a log to the console
  console.log("A new search was started.")

  // clear the table body
  d3.select("tbody").selectAll("tr").remove();

  // Select the input elements and get the raw HTML node
  var yearElement = d3.select("#yearInput");
  var ncElement = d3.select("#ncInput");
  // var hElement = d3.select("#hInput");

  // Get the value property of the input elements
  var yearInput = yearElement.property("value");
  var ncInput = ncElement.property("value");
  // var hInput = hElement.property("value");
  
  // create an empty object to append search values to
  search_values = {};
  
  // conditionals to determine which search values are to be used
  if (yearInput) {
    search_values['year'] = parseInt(yearInput);
  }
  if (ncInput) {
    search_values['nat_champ'] = ncInput;
  }
  // if (hInput) {
  //   search_values['heisman'] = hInput;
  // }

  // Print the search values to the console
  console.log(search_values);
  
  // Loop through the data one item at a time
  tableData.forEach((season) => {

    // Empty array to append one season to
    one_season = [];

    // add a new table row per season
    var row = tbody.append("tr");

    // append a season to the empty array above
    Object.values(season).forEach(value => one_season.push(value));

    // Condtional to append a season if it matches the search values entered
    // One conditional for each sum of possible search values
    if (Object.keys(search_values).length === 1) {
      if (one_season.includes(Object.values(search_values)[0])) {
        Object.entries(season).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      }
    } else if (Object.keys(search_values).length === 2) {
        if (one_season.includes(Object.values(search_values)[0]) && one_season.includes(Object.values(search_values)[1])) {
          Object.entries(season).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        }
    }
  });
  }

// run the function above when the Search button is clicked
submit.on("click", dateReturn);