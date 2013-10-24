//          Jason Slocum           10.21.13          Functions Personal

//          JavaScript

// Find your Body Mass Index

var weightLoss;// variable for weightloss
var weight = Number(prompt("What is your weight in pounds?"));// variable for how much the user weighs
var height = Number(prompt("What is your height in inches?"));// variable for how tall the user is

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

if(totalBMI >= 25){
    weightLoss = totalBMI - 25;
    console.log("You should try to reduce your BMI by at least " + weightLoss + " points.");
}else if(totalBMI <= 18.5){
    weightLoss = 18.5 - totalBMI;
    console.log("You should try to raise your BMI by at least " + weightLoss + " points.");
}else{
    console.log("You appear to be at an ideal body weight!");
}

