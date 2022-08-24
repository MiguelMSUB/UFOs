// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
// First, clear out any existing data
    tbody.html("");
}

// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {

//Now we want to create a variable that will append a row to the table body. 
//Within this forEach function, add the following code:
let row = tbody.append("tr");

//Next, we'll add code to loop through each field in the dataRow argument. 
//These fields will become table data and will be wrapped in <td> tags when they're appended to the HTML table.
Object.values(dataRow).forEach((val) => {

//In the next two lines of code, we'll append each value of the object to a cell in the table. 
//The next few lines of code will go inside our new function. 
//Let's first create a variable to append data to a table:
let cell = row.append("td");
cell.text(val);
}
);
});

function handleClick() {
// Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

// Check to see if a date was entered and filter the
// data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      };

// Rebuild the table using the filtered data
// @NOTE: If no date was entered, then filteredData will
// just be the original tableData.
  buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);