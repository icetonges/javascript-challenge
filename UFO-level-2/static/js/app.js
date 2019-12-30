// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");
var inputField = d3.select("ul").selectAll("li");
var filter = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");

function initial() {
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
};

initial();

// D3 select button, write function for event
// to check if specific format requirement on date type

inputField.on("change", function () {
    var datetime = document.getElementById("datetime").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var shape = document.getElementById("shape").value;
    var input = [datetime, city, state, country, shape];
    var filterData = tableData;

    if (datetime != "") { filterData = filterData.filter(p => p.datetime == input[0])};
    if (city != "") { filterData = filterData.filter(p => p.city == input[1])};
    if (state != "") { filterData = filterData.filter(p => p.state == input[2])};
    if (country != "") { filterData = filterData.filter(p => p.country == input[3])};
    if (shape != "") { filterData = filterData.filter(p => p.shape == input[4])};

    // var filterData = tableData;

    // if (datetime != "") { filterData = filterData.filter(entry => { return entry.datetime == datetime }); };
    // if (city != "") { filterData = filterData.filter(entry => { return entry.city == city }); };
    // if (state != "") { filterData = filterData.filter(entry => { return entry.state == state }); };
    // if (country != "") { filterData = filterData.filter(entry => { return entry.country == country }); };
    // if (shape != "") { filterData = filterData.filter(entry => { return entry.shape == shape }); };

    filter.on("click", function () {
        tbody.html("");
        filterData.forEach((ufo) => {
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    });
});

reset.on("click", function () {
    document.getElementById("datetime").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.getElementById("shape").value = "";
    return initial();
});