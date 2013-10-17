//          Jason Slocum
//          Conditionals_Personal
//          10.16.13

//          JavaScript

// Hotel Room Rates

var roomCost = 100;//this is the given cost of a room for one night
var occupants = Number(prompt("How many people will be staying in the room?"));//this prompts the user for the number of guests that will be using the room
var nights = Number(prompt("How many nights will you be staying?"));//this prompts the user to enter how many nights that they will be staying
var earlyDiscount = prompt("Will you be booking your room more than two weeks in advance?");//this prompt them to see if they are booking their room more than 2 weeks in advance in order to receive a discounted rate

if(occupants == ""){//conditional statement to validate if the user entered the required data into the form field
    occupants = Number(prompt("How many people will be staying in the room?"));
}
if(nights == ""){// conditional statement to validate if the user entered the required datea in the form field
    nights = Number(prompt("How many nights will you be staying?"));
}
if(earlyDiscount == ""){// conditional statement to validate if the user entered the required datea in the form field
    earlyDiscount = prompt("Will you be booking your room more than two weeks in advance?");
}

if(occupants > 4){//conditional statement to figure out the cost of the room if they will be having more than 4 guests staying there
    roomCost = roomCost + 25
    console.log("You have more than four guests, so your room rate will be $" + roomCost);
}

if(earlyDiscount === "no" || earlyDiscount === ""){//conditional statement to find out whether the user entered no or left the field blank
    console.log("There will be no discount applied at this time");
}

if(earlyDiscount === "yes"){//this will figure out the price with the 10% early booking discount
    roomCost = (roomCost * .90)
    console.log("Your price after an early booking discount will be $" + roomCost); 
}

var preTotal = roomCost * nights;//this figures out the total before tax is added
var totalCost = preTotal + (preTotal * .055);// total price that they will be paying
console.log("Your total after adding a 5.5% sales tax will be $" + totalCost + ".  Please enjoy your stay!");