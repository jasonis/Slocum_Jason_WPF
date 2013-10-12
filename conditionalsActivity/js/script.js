//JavaScript

var age = 11;
var book;

// if the child is under 10 the get green eggs, otherwise they get the time machine
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

var gpa = 48;
//of the pa is over the min 2.0 score, the student can graduate
if(gpa > 2.0){
    console.log("you can graduate");
}else{
   console.log("gpa is too low"); 
}




var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the phone is less than our budget AND if our check is over 300
if(iPhonePrice < budget || wonLottery === true){
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


