//          Jason Slocum           10.21.13          Functions Personal

//          JavaScript

// Find your Body Mass Index

var weightLoss;
var weight = Number(prompt("What is your weight in pounds?"));
var height = Number(prompt("What is your height in inches?"));

if(weight == ""){
    weight = Number(prompt("You have not entered your weight.  What is your weight in pounds?"));
}