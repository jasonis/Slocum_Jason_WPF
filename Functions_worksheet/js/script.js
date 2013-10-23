//     Jason Slocum          10.21.13          Functions Worksheet

//  Calculate the circumference of a circle

var radius = Number(prompt("Please enter the radius of the circle in inches"));// prompts the user for the radius of the circle

var totalCirc = calcCirc(12);// the totalCirc var creates a place for the result of the function to be held, calcCirc holds the argument for the function

function calcCirc(radius){//  this declares the function calcCirc and lists its parameter
    var circ = 2 * Math.PI * radius;
    return circ;
}

console.log("The circumference of the circle is " + totalCirc) + " inches";
