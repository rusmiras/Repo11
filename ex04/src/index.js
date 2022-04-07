// Create a temps array here
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
// End of temps array
// Create a function below this line
function myArrayFunction(myArr) {
    var averageDayTemp = [];
    for (var i = 0; i < 5; i++){
        var sum = 0;
        for (var j = 0; j < 4; j++){
            sum += myArr[i][j];
        }
        averageDayTemp.push(sum/4);  
    }
    return averageDayTemp;
}
// End of creating a function
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
