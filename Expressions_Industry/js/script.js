//  JavaScript
//  What is the average monitor size in someone's home?
//  This could be anything from smartphones and tablets to laptops, desktops and big screens
//  We know how popular responsive design is and how it is great for viewing sites on many different size screens
//  but what is the average size screen out of all of them we use all day?

var smartPhone = prompt("What is the screen size of your smart phone?");
var tablet = prompt("What is the screen size of your tablet?");
var laptop = prompt("What is the screen size of your laptop?");
var desktop = prompt("What is the screen size of your desktop?");
var tv = prompt("What is the screen size of your smart TV?");
var screenSizes = [smartPhone, tablet, laptop, desktop, tv];
console.log(screenSizes);
var totalSize = Number(smartPhone) + Number(tablet) + Number(laptop) + Number(desktop) + Number(tv);
console.log(totalSize + " inches");
var averageSize = totalSize / 5;
console.log("Your average computer screen in your house is " + averageSize + " inches");