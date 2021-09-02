let changedElement = d3.select(this);

// 4b. Save the value that was changed as a variable.
let elementValue = changedElement.property("value");
console.log(elementValue);

// 4c. Save the id of the filter that was changed as a variable.
let filterId = changedElement.attr("id");
console.log(filterId);

// 5. If a filter value was entered then add that filterId and value
// to the filters list. Otherwise, clear that filter from the filters object.
if (elementValue) {
    filters[filteredId] = elementValue;
} else {
    delete filters[filteredId];
}
console.log(filters);