// JavaScript
// The question at hand is "How long will my beard grow in a set time?" and "How long will it be after one year?"

var currentLength = prompt("How long, in inches, is your current beard?");// How long is your beard currently if you have one already
var growthRate = prompt("How long, in inches, does your beard grow in a week?");// How much would you say that your beard grows in a week?
var duration = prompt("How many weeks will you be letting your beard grow?");// How long can you leave it alone before you cut it?
var newGrowth = growthRate * duration;
var result = Number(newGrowth) + Number(currentLength);
console.log("If I were to wait " + duration + " weeks, my beard would grow to a length of " + result + " inches.");
var yearLength = growthRate * 52 + Number(currentLength);
console.log("After one year your beard would be " + yearLength + " inches long");