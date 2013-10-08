// JavaScript
// Jason Slocum 10-7-2013 Expressions Worksheet

// Calculate the area of a rectangle is the width times the height

var width = 7;  // the width of the rectangle
var height = 5;  //  the height of the rectangle
var result = width * height + " " + "sq ft";  //  the width of the rectangle times the height, in this case it should be 35sq ft
console.log(result);  //  Print out the result of 7 * 5 = 35

//Dog Years find Sparky's age in dog years

sparkyAge = 3;  // Sparky's age in human years
var sparkyDogAge = 7 * sparkyAge;  // Sparky's age multiplied by the 7 times faster that dogs age
console.log(sparkyDogAge);  //  Sparky is 3 human years old which is 21 in dog years.

// Slice of the Pie part 1
// how many slices of pizza will everyone at the party get

slicesPerPizza = 8;  // this is the number of slices per pizza 8
partyPeople = 20;  // there are 20 people ot the party
pizzas = 5;  // they ordered 5 pizzas
var slicesPerPerson = slicesPerPizza * pizzas / partyPeople; // 8 slices times 5 pizzas divided by 20 people
console.log(slicesPerPerson);  // each person ate 2 slices of pizza at the party

// Slice of the Pie part II
// how many slices will Sparky get to eat if he is allowed to have the remainder

slicesPerPizza = 8;  // this is the number of slices per pizza 8
partyPeople = 20;  // there are 20 people ot the party
pizzas = 5;  // they ordered 5 pizzas
var totalSlices = slicesPerPizza * pizzas;  //8 slices per pizza times 5 pizzas
console.log(totalSlices);  // there were 40 slices of pizza total
var sparkySlices = totalSlices % 20;  // 40 slices divided by 20 people
console.log(sparkySlices);  // Sorry sparky there is none left for you

// Average Shopping Bill
// find the average amount spent on groceries over the last 5 weeks

var groceryBill = [22, 37, 39, 29, 57];  //  The amount spent on groceries over a 5 week period
var averageBill = "$" + (groceryBill[0] + groceryBill[1] + groceryBill[2] + groceryBill[3] + groceryBill[4])/5;  //The total for each week added together and then divided by the number of weeks $184/5weeks
console.log(averageBill);  // $36.8 is the average weekly grocery bill

// discounts
// find the discounted price for an item

var shirt = 14;  //the shirt cost $14
var discount = .10;  // there was a 10% discount
var tax = .05  // The sales tax was 5%
var discountAmount = shirt * discount;  //$14 times 10%       
console.log(discountAmount); //The amount of the discount was $1.4000000000000001
var discountedShirt = shirt - discountAmount;  // $14 minus the discount of $1.4 
console.log(discountedShirt);  // The shirt after the discount was $12.6
var taxAmount = discountedShirt * .05;  //The 12.6 shirt plus 5% sales tax
console.log(taxAmount);  // The tax comes out to be .63
var total = discountedShirt + taxAmount;  // The $12.6 shirt plus the .63 sales tax
console.log(total);  //the total price of the $14 shirt minus the 10% discount plus 5% sales tax is $13.23








