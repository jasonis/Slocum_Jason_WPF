//          Jason Slocum
//          10.16.13
//          Conditionals Wacky

//          JavaScript

//What type of cheese should you try?

var firmness = prompt("What is your preferred cheese texture?  soft, medium or hard");//asks the user for their favorite cheese texture
var odor = prompt("Do you prefer a mild cheese or a stinky cheese?");//asks if the user prefers a mild or strong scented cheese
if(firmness == ""){//validates the firmness prompt to make sure a selection was made
    firmness = prompt("You forgot to enter your preferred cheese texture?  soft, medium or hard");
}
if(odor == ""){//validates the odor prompt to make sure that a selection was made and if not re-asks the question
    odor = prompt("Do you prefer a mild cheese or a stinky cheese?");
}

if(firmness === "soft" && odor === "mild"){//evaluates the results if the user selected soft and mild
    console.log("You might enjoy trying some Brie cheese.");
}else if(firmness === "medium" && odor === "mild"){//evaluates the results if the user chose medium and mild
    console.log("You might enjoy trying some Jarlsberg cheese.");
}else if(firmness === "hard" && odor === "mild"){
    console.log("You might enjoy trying some Cheddar cheese.");
}else if(firmness === "soft" && odor === "stinky"){
    console.log("You might enjoy trying some Stilton cheese.");
}else if(firmness === "medium" && odor === "stinky"){
    console.log("You might enjoy trying some Aged Brick cheese.");
}else if(firmness === "hard" && odor === "stinky"){
    console.log("You might enjoy trying some Bleu cheese.");
}else{
    console.log("Are you a vegan?");
}