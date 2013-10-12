//JavaScript


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


