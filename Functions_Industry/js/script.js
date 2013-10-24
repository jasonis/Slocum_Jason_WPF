//          Jason Slocum          10.21.13          Functions Industry

//          JavaScript

//   Download time estimator

var fileSize = Number(prompt("What is the size of the file you are downloading in megabytes?"));
var speed = Number(prompt("What is the speed of your internet connection in megabits?"));

if(fileSize == ""){
    fileSize = Number(prompt("You seem to have left this field empty.  What is the size of the file you are downloading in megabytes?"));
}

if(speed == ""){
    speed = Number(prompt("You seem to have left this field empty.  What is the speed of your internet connection in megabits?"));
}

var bitSize = calcBits(fileSize);

function calcBits(fileSize){
    var totalSize = fileSize * 8;
    return totalSize;
}

console.log("After converting your file from megabytes, it's total size is " + bitSize + " megabits");