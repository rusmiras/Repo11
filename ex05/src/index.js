// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array
// Create a function below this line
function myMonitorsFunction(monitors) {
    var monitorsList = [];
    for (var i = 0; i < 3; i++) {
        monitorsList.push([monitors[i], i + 1]);
    }
    return monitorsList;
}
// End of creating a function
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
