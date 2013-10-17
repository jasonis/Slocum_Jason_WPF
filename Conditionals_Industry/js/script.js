//          Jason Slocum
//          10.16.13
//          Conditionals Industry

//          JavaScript

//Building a Website

var standardSite = 200;//given cost for a standard site
var extraPages = 50;// this is how much extra it will cost if their site requires more than 5 pages
var subTotal;// declaring the variable for the subtotal
var morePages = prompt("Will your site need more than 5 pages?");//prompts the user to find out if they will require more than 5 pages
var total;// declaring total var
var graphics;//declaring graphics var

if(morePages == ""){
   morePages = prompt("Will your site need more than 5 pages?"); 
}

if(morePages === "yes"){
    subTotal = (Number(prompt("A standard site includes 5 pages, how many more will you need?")) * extraPages);
    console.log(subTotal);
}else{
    subTotal = standardSite;
    console.log(subTotal);
}

graphics = prompt("Will you be supplying your own images and graphics?");

total = (graphics === "yes") ? total = (subTotal - 75) : total = subTotal;
console.log("Your total cost will be $" + total)