//  JavaScript

//How many loaves of bread do I eat in a year?

var slicesPerLoaf = prompt("How many slices are in your loaf of bread?");  // How many slices are in your loaf of bread?
var slicesEatenDaily = prompt("How many slices do you eat in a day?");  //How many slices of bread do you eat in a day?
var slicesPerWeek = slicesEatenDaily * 7;  //multiply how many slices you eat in a day times 7 days in a week
console.log("You ate " + slicesPerWeek + " slices of bread this week");  //this shows the total amount of slices you ate in a week

var loavesPerWeek = slicesPerWeek / slicesPerLoaf;  //divide the slicesPerWeek by the slicesPerLoaf to find out how many loaves you ate in a week
console.log("You ate " + loavesPerWeek + " loaves of bread this week");  //Printout for the total number of loaves you had in a week

var loavesPerYear = loavesPerWeek * 52;
console.log("You ate " + loavesPerYear + " loaves of bread this year");

var daysPerLoaf = 365 / loavesPerYear;
console.log("You ate one loaf of bread every " + daysPerLoaf + " days");