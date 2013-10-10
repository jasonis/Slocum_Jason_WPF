// JavaScript
// The question at hand is "How long will my beard grow?"

var currentLength = prompt("How long, in inches, is your current beard?");
var growthRate = prompt("How long, in inches, does your beard grow in a week?");
var duration = prompt("How many weeks will you be letting your beard grow?");
var newGrowth = growthRate * duration;
var result = Number(newGrowth) + Number(currentLength);
console.log("If I were to wait " + duration + " weeks, my beard would grow to a length of " + result + " inches.");
var oneYear = 52/duration;
var yearLength = oneYear + result;
console.log("After one year your beard would be " + result + " inches");