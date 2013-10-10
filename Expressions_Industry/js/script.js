//  JavaScript
//  What is the average monitor size in someone's home?
//  This could be anything from smartphones and tablets to laptops, desktops and big screens
//  We know how popular responsive design is and how it is great for viewing sites on many different size screens
//  but what is the average size screen out of all of them we use all day?

var smartPhone = prompt("What is the screen size of your smart phone in inches?");// this var represents the users phone screen size
var tablet = prompt("What is the screen size of your tablet in inches?");// this var represents the users tablet screen size
var laptop = prompt("What is the screen size of your laptop in inches?");// this var represents the users laptop screen size
var desktop = prompt("What is the screen size of your desktop in inches?");//  this var represents the users desktop screen size
var tv = prompt("What is the screen size of your smart TV in inches?");//  this var represents the users smart TV screen size
var screenSizes = [smartPhone, tablet, laptop, desktop, tv];  // this array contains the sizes of all of the devices that the user entered
console.log(screenSizes);// printout of the list of screen sizes that the user has
var totalSize = Number(smartPhone) + Number(tablet) + Number(laptop) + Number(desktop) + Number(tv);// this var takes the array and uses casting to add all of the sizes together 
console.log(totalSize + " inches");// printout of the total size of all of the screens with text added
var averageSize = totalSize / 5;// takes the total size and divides it by 5, the number of inputs that were used in order to find the average
console.log("Your average computer screen in your house is " + averageSize + " inches");