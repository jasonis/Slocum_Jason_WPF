//          Jason Slocum
//          10.16.13
//          Conditionals Wacky

//          JavaScript

//What type of cheese should you try?

var firmness = prompt("What is your preferred cheese texture?  soft, medium or hard");
var odor = prompt("Do you prefer a mild cheese or a stinky cheese?");
if(firmness == ""){
    firmness = prompt("You forgot to enter your preferred cheese texture?  soft, medium or hard");
}
if(odor == ""){
    odor = prompt("Do you prefer a mild cheese or a stinky cheese?");
}

if(firmness === "soft" && odor === "mild"){
    console.log("You might enjoy trying some Brie cheese.");
}else if(firmness === "medium" && odor === "mild"){
    console.log("You might enjoy trying some Jarlsberg cheese.");
}else if(firmness === "hard" && odor === "mild"){
    console.log("You might enjoy trying some Cheddar cheese.");