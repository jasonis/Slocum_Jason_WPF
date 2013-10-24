//          Jason Slocum           10.21.13          Functions Personal

//          JavaScript

// Find your Body Mass Index

var weightLoss;// variable for weightloss
var weight = Number(prompt("What is your weight in pounds?"));// variable for how much the user weighs
var height = Number(prompt("What is your height in inches?"));// variable for how tall the user is

if(weight == ""){// conditional in case the weight field is left empty
    weight = Number(prompt("You have not entered your weight.  What is your weight in pounds?"));//prompt that will be displayed if the field is empty
}

if(height == ""){// conditional in case the height field is left empty
    height = Number(prompt("You have not entered your height.  What is your height in inches?"));//prompt that will be displayed if the field is empty
}

var totalBMI = calcBMI(weight, height);//variable that holds the returned amount of the function and also contains the argument for the function

function calcBMI(weight, height){//creates a new function and contains the parameters for it
    var bmi = weight / (height * height) * 703;//the equation for the function, weight divided by height times height
    return bmi;//returns the value of the preceding equation out of the function
}

console.log("Your BMI is " + totalBMI + (totalBMI <= 18.5 ? ". You may be slightly underweight." : (totalBMI >= 18.6 && totalBMI <= 24.9 ? ". You have an ideal bodyweight." : (totalBMI >= 25 && totalBMI <= 29.9 ? ". You may be slightly overweight." : ". You may be slightly obese."))) );//ternary conditional for the console printout to determine what category your bmi falls in to

if(totalBMI >= 25){//conditional if the bmi is equal to or greater than 25
    weightLoss = totalBMI - 25;//this calculates the difference between your bmi and the ideal range
    console.log("You should try to reduce your BMI by at least " + weightLoss + " points.");//printout showing the results, if applicable, for the preceding equation
}else if(totalBMI <= 18.5){//conditional if the bmi is less than or equal to 18.5
    weightLoss = 18.5 - totalBMI;//this calculates the difference between your bmi and the ideal range
    console.log("You should try to raise your BMI by at least " + weightLoss + " points.");
}else{
    console.log("You appear to be at an ideal body weight!");
}

