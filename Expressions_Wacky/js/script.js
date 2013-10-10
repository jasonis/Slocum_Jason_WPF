// JavaScript
// The question at hand is "How long will my beard grow in a set time?" and "How long will it be after one year?"

var currentLength = prompt("How long, in inches, is your current beard?");// How long is your beard currently if you have one already
var growthRate = prompt("How long, in inches, does your beard grow in a week?");// How much would you say that your beard grows in a week?
var duration = prompt("How many weeks will you be letting your beard grow?");// How long can you leave it alone before you cut it?
var newGrowth = growthRate * duration;//  this will show how much new growth you have after your chosen length of time
var result = Number(newGrowth) + Number(currentLength);// this will show what length your beard will be overall after your chosen amount of time new growth plus existing beard
console.log("If I were to wait " + duration + " weeks, my beard would grow to a length of " + result + " inches.");// printout of how long your beard would be after the desired length of time
oneYear = 52;
var yearLength = growthRate * oneYear + Number(currentLength);//  this is to figure out how long your beard would be if you left it alone for one year
console.log("After one year your beard would be " + yearLength + " inches long");//  printout showing the total length that your beard would be after one year