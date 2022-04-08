// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets) {
    myPets.push("Bird", "Fish");
    var myNewPets = myPets;
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myPets.unshift("Lion");
    return myNewPets;
}
// End of creating a function
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
