//          Jason Slocum          10.21.13          Functions Wacky

//          JavaScript

//  Impulse Calculator.  The change in the momentum of an object caused over a very short period of time

var m = Number(prompt("What is the mass of the object in question in kgs?"));
var v = Number(prompt("What is the initial velocity of the object in m/s?"));
var u= Number(prompt("What is the final velocity of the object in m/s?"));

if(m == ""){
    m = Number(prompt("You mistakenly left this field blank.  What is the mass of the object in question in kgs?"));
}