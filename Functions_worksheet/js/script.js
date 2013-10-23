//     Jason Slocum          10.21.13          Functions Worksheet

//  Calculate the circumference of a circle

var radius = Number(prompt("Please enter the radius of the circle in inches"));// prompts the user for the radius of the circle

var totalCirc = calcCirc(12);// the totalCirc var creates a place for the result of the function to be held, calcCirc holds the argument for the function

function calcCirc(radius){//  this declares the function calcCirc and lists its parameter
    var circ = 2 * Math.PI * radius;// this creates the circ var which holds the equation for circumference, 2 times radius times PI
    return circ;// this returns the value of the circumference out of the function to the var totalCirc
}

console.log("The circumference of the circle is " + totalCirc) + " inches";// this prints out the value of the circumference of the circle to the console



//  The number of bee stings that are needed to kill an animal

var victimLBS = Number(prompt("How many pounds does the victim weigh?"));
