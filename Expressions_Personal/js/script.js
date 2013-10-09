//  JavaScript

//How many loaves of bread do I eat in a year?

var slicesPerLoaf = prompt("How many slices are in your loaf of bread?");
var slicesEatenDaily = prompt("How many slices do you eat in a day?");
var slicesPerWeek = slicesEatenDaily * 7;
console.log("You ate " + slicesPerWeek + " of bread this week");
var loavesPerWeek = slicesPerWeek / slicesPerLoaf;
console.log()