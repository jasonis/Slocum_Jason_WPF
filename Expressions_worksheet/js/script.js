// JavaScript
// Jason Slocum 10-7-2013 Expressions Worksheet

// Calculate the area of a rectangle is the width times the height

var width = 7;  // the width of the rectangle
var height = 5;  //  the height of the rectangle
var result = width * height + " " + "sq ft";  //  the width of the rectangle times the height, in this case it should be 35sq ft
console.log(result);  //  Print out the result of 7 * 5 = 35

//Dog Years find Sparky's age in dog years

sparkyAge = 3;  // Sparky's age in human years
var sparkyDogAge = 7 * sparkyAge;  // Sparky's age multiplied by the 7 times faster that dogs age
console.log(sparkyDogAge);  //  Sparky is 3 human years old which is 21 in dog years.

// Slice of the Pie part 1
// how many slices of pizza will everyone at the party get

slicesPerPizza = 8;  // this is the number of slices per pizza 8
partyPeople = 20;  // there are 20 people ot the party
pizzas = 5;  // they ordered 5 pizzas
var slicesPerPerson = slicesPerPizza * pizzas / partyPeople; // 8 slices times 5 pizzas divided by 20 people
console.log(slicesPerPerson);  // each person ate 2 slices of pizza at the party

// Slice of the Pie part II
// how many slices will Sparky get to eat if he is allowed to have the remainder

slicesPerPizza = 8;  // this is the number of slices per pizza 8
partyPeople = 20;  // there are 20 people ot the party
pizzas = 5;  // they ordered 5 pizzas
var totalSlices = slicesPerPizza * pizzas;  //8 slices per pizza times 5 pizzas
console.log(totalSlices);  // there were 40 slices of pizza total
var sparkySlices = totalSlices % 20;  // 40 slices divided by 20 people
console.log(sparkySlices);  // Sorry sparky there is none left for you









