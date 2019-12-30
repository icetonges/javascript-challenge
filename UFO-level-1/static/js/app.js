// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// clear the existing output (Act3-05)
tbody.html("");
// refactor to use arrow functins (Act03-03)
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
// D3 select button, write function for event
// to check if specific format requirement on date type

// var selectevent = tableData.filter(event);
// console.log(selectevent);
var inputField = d3.select(".form-control");
var button = d3.select("#filter-btn");

// listen to input from html (Act03-04-Ins_Event_Listeners)
inputField.on("change", function () {
    var newText = d3.event.target.value;
    var filtertabledata = tableData.filter(p => p.datetime == newText);
    console.log(newText);
    console.log(filtertabledata);
    button.on("click", function () {
        tbody.html("");
        filtertabledata.forEach((ufo) => {
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    });
});

