//     Jason Slocum
//     10-13-13
//     Conditionals Worksheet

//     JavaScript


// Last Chance for Gas!
//Do you have enough gas to make it across the desert without filling up first?

var nextFillup = 200;// This is how many miles away the next gas station is
var mpg = Number(prompt("How many miles per gallon does your car get?"));// Shows the users mpg
var currentGas = Number(prompt("What percent of gas do you still have in your tank?"));//Shows the percentage of gas that is still in the users tank
var tankCapacity = Number(prompt("How many gallons does your tank hold?"));//How many gallons of gas their gas tank can hold

var gasDecimal = currentGas / 100.0;//changes percentage of gas left into a decimal
var galsLeft = tankCapacity * gasDecimal;//this shows how many gallons of gas are left in thte users tank
var milesLeft = mpg * galsLeft;//This shows how many more miles the user can still drive with their currrent gas

if(milesLeft >= nextFillup){  // if the amount of miles that you can still drive is greater than or equal to the distance to the next gas station then you don't need to fill up now
    console.log("Yes, you can make it without stopping for gas!");// printout that says you'll make it
}else{// this tells what will happen if you don't have enough gas to make it
    console.log("You only have " + galsLeft + " gallons of gas in your tank, better get gas now while you can!");
}


// Check the Login
//Does the attempted login info match the correct one?

var nameAttempt = prompt("Please enter your username");//username provided by the user
var pwordAttempt = prompt("Please enter your password");//password provided by the user
var username = ("student");//correct username
var password = ("please");//correct password

if(nameAttempt != username){//identfies if attempted username matches correct username
    console.log("User not found.  Try again.");//printout that is shown if username is not correct
}else if(pwordAttempt != password){//identifies if attempted password matches correct password
    console.log("Password does not match our records.");//printout that is shown if the password is not correct
}else{//if the username and password are entered correctly then they will be welcomed
    console.log("Welcome," + username + "!");// printout if everything is correct
}


// Tire Pressure I
//Is the psi equal on the front tires and is the psi equal on the rear tires?

var frontLeft = prompt("What is the psi for your front left tire?");//user provided front left tire pressure
var frontRight = prompt("What is the psi for your front right tire?");//user provided front right tire pressure
var rearLeft = prompt("What is the psi for your rear left tire?");//user provided rear left tire pressure
var rearRight = prompt("What is the psi for your rear right tire?");//user provided rear right tire pressure

var tires = [frontLeft, frontRight, rearLeft, rearRight];//array showing all four of the tire pressures
if(tires[0] === tires[1] && tires[2] === tires[3]){//compares the psi of the front tires and the rear tires
    console.log("The tires pass spec!");//printout if the front tires are equal and the rear tires are equal
}else{//if either of the pairs do not match
    console.log("Get your tires checked out!");//printout if one of the tires in either of the pairs does not match
}

