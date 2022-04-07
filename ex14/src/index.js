// Only change code below this code
var myArr = [2, 5, 9, 8, 1];
function bubbleSort(arr) {
    var t;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(myArr));
// Only change code above this code
module.exports = bubbleSort;
