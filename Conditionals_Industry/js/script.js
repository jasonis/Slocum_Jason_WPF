//          Jason Slocum
//          10.16.13
//          Conditionals Industry

//          JavaScript

//Building a Website

var standardSite = 200;
var extraPages = 50;
var subTotal;
var morePages = prompt("Will your site need more than 5 pages?");
var total;
var graphics;

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