//          Jason Slocum           10.21.13          Functions Personal

//          JavaScript

// Find your Body Mass Index

var weightLoss;
var weight = Number(prompt("What is your weight in pounds?"));
var height = Number(prompt("What is your height in inches?"));

if(weight == ""){
    weight = Number(prompt("You have not entered your weight.  What is your weight in pounds?"));
}

if(height == ""){
    height = Number(prompt("You have not entered your height.  What is your height in inches?"));
}

var totalBMI = calcBMI(weight, height);

function calcBMI(weight, height){
    var bmi = weight / (height * height) * 703;
    return bmi;
}