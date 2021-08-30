// import the data from data.js
const tableData = data;

// Referene the html table using d3
var tbody = d3.select("tbody"); // d3.select tells the program to look for the tbody tags in the html

// Create a table
function buildTable(data) {
    // Clear any data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
