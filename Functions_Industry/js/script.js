//          Jason Slocum          10.21.13          Functions Industry

//          JavaScript

//   Download time estimator

var fileSize = Number(prompt("What is the size of the file you are downloading in megabytes?"));//prompts the user for the size of the file that they will be downloading
var speed = Number(prompt("What is the speed of your internet connection in megabits?"));//prompts the user for the speed of their internet connection

if(fileSize == ""){//conditional if the fileSize field is left empty
    fileSize = Number(prompt("You seem to have left this field empty.  What is the size of the file you are downloading in megabytes?"));//this is the prompt that the user will receive if they leave the field empty
}

if(speed == ""){//conditional if the speed field is left empty
    speed = Number(prompt("You seem to have left this field empty.  What is the speed of your internet connection in megabits?"));//user prompt that will appear if the field is no filled in
}

var bitSize = calcBits(fileSize);//creates var for the output of the function and contains the arguments for the function 
function calcBits(fileSize){//creates the function called calcbits and shows its parameters
    var totalSize = fileSize * 8;//process that the function will perform, the size of the file that the user inputs times 8
    return totalSize;//this returns the value to a variable outside of the function
}

console.log("After converting your file from megabytes, it's total size is " + bitSize + " megabits");//printout that states the converted size of the file after performing the function

var totalTime = calcSpeed(speed);//creates variable for the output of the function and contains the arguments for the function

function calcSpeed(speed){//creates the function and shows its parameters
    var time = bitSize / speed;//performs calculation to find the download time by dividing the bitSize from the previous function by the speed the user entered
    return time;//this returns the value to the var totalTime outside of the function
}

console.log("It will take approximately " + totalTime + " seconds to complete your download");

