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

console.log("Your BMI is " + totalBMI + (totalBMI <= 18.5 ? ". You may be slightly underweight." : (totalBMI >= 18.6 && totalBMI <= 24.9 ? ". You have an ideal bodyweight." : (totalBMI >= 25 && totalBMI <= 29.9 ? ". You may be slightly overweight." : ". You may be slightly obese."))) );

