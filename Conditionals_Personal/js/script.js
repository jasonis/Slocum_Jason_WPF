//          Jason Slocum
//          Conditionals_Personal
//          10.16.13

//          JavaScript

// Hotel Room Rates

var roomCost = 100;//this is the given cost of a room for one night
var occupants = Number(prompt("How many people will be staying in the room?"));//this prompts the user for the number of guests that will be using the room
var nights = Number(prompt("How many nights will you be staying?"));
var earlyDiscount = prompt("Will you be booking your room more than two weeks in advance?");

if(occupants == ""){
    occupants = Number(prompt("How many people will be staying in the room?"));
}
if(nights == ""){
    nights = Number(prompt("How many nights will you be staying?"));
}