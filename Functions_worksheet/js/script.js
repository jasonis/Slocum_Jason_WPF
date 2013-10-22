//     Jason Slocum          10.21.13          Functions Worksheet

//  Calculate the circumference of a circle

var radius = Number(prompt("Please enter the radius of the circle in inches"));

var totalCirc = calcCirc(12);

function calcCirc(radius){
    var circ = 2 * Math.PI * radius;
    return circ;
}

console.log("The circumference of the circle is " + totalCirc);
