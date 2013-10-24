//          Jason Slocum          10.21.13          Functions Wacky

//          JavaScript

//  Impulse Calculator.  The change in the momentum of an object caused over a very short period of time

var m = Number(prompt("What is the mass of the object in question in kgs?"));//this variable creates a user prompt for the mass of the object
var v = Number(prompt("What is the initial velocity of the object in m/s?"));//this variable creates a user prompt for the initial velocity of the object
var u= Number(prompt("What is the final velocity of the object in m/s?"));//this variable creates a user prompt for the final velocity of the object

if(m == ""){//conditional that is applied if the mass is not entered
    m = Number(prompt("You mistakenly left this field blank.  What is the mass of the object in question in kgs?"));//this prompt will be displayed if the mass field is initially left blank
}

if(v == ""){//conditional that is applied if the initial velocity is not entered
    v = Number(prompt("You mistakenly left this field blank.  What is the initial velocity of the object in m/s?"));
}

if(u == ""){
    u = Number(prompt("You seem to have mistakenly left this field blank.  What is the final velocity of the object in m/s?"));
}

var totalImpulse = calcImpulse(m, v, u);

function calcImpulse(m, v, u){
    var impulse = m * u - m * v;
    return impulse;
}

console.log("The impulse was " + totalImpulse + " Ns");