//JavaScript

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the phone is less than our budget AND if our check is over 300
if(iPhonePrice < budget && paycheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}





var kidHeight = 44;
var minHeight = 48;
var wParentHeight = 45;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //you can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //cyou can ride with a parent
    console.log("You can ride, but only with a parent");
}else{
    //sorry you have to grow
    console.log("Sorry kid, you've got some growing to do first!");
}


