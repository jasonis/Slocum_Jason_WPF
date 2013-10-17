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
if(earlyDiscount == ""){
    earlyDiscount = prompt("Will you be booking your room more than two weeks in advance?");
}

if(occupants > 4){
    roomCost = roomCost + 25
    console.log("You have more than four guests, so your room rate will be $" + roomCost);
}

if(earlyDiscount === "no" || earlyDiscount === ""){
    console.log("There will be no discount applied at this time");
}

if(earlyDiscount === "yes"){
    roomCost = (roomCost * .90)
    console.log("Your price after an early booking discount will be $" + roomCost); 
}

var preTotal = roomCost * nights;