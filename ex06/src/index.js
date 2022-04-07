// Only change code below this line
var myNestedArray = [["KitKat", 5]];
function myNestedFunction(arr) {
    myNestedArray = arr;
    return myNestedArray;
  }
// Only change code above this line
console.log(myNestedFunction([["Toblerone", 5], ["Milka", 3]])); // Change this line
module.exports = myNestedFunction;
