// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets) {
    myPets.push("Bird", "Fish");
    var myNewPats = myPets;
    var firstPet = myNewPats.shift();
    var lastPet = myNewPats.pop();
    myPets.unshift("Lion");
    return myNewPats;
}
// End of creating a function
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
