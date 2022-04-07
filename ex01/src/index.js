// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating an array
// Create a function below this line
function myArrayFunction(myItems) {
    myArr[2] = myItems;
    return myArr;
}
// End of creating a function
console.log(myArrayFunction(6));
module.exports = myArrayFunction;
