//     Jason Slocum
//     10-13-13
//     Conditionals Worksheet

//     JavaScript


// Last Chance for Gas!

var nextFillup = 200;// This is how many miles away the next gas station is
var mpg = Number(prompt("How many miles per gallon does your car get?"));// Shows the users mpg
var currentGas = Number(prompt("What percent of gas do you still have in your tank?"));//Shows the percentage of gas that is still in the users tank
var tankCapacity = Number(prompt("How many gallons does your tank hold?"));//How many gallons of gas their gas tank can hold

var gasDecimal = currentGas / 100.0;//changes percentage of gas left into a decimal
var galsLeft = tankCapacity * gasDecimal;//this shows how many gallons of gas are left in thte users tank
