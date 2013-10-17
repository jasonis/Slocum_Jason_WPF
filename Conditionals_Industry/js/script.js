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

if(morePages == ""){//validates the morePages prompt
   morePages = prompt("Will your site need more than 5 pages?"); 
}

if(morePages === "yes"){//if the user requires more than 5 pages, this will figure out their subtotal with the additional cost
    subTotal = (Number(prompt("A standard site includes 5 pages, how many more will you need?")) * extraPages + standardSite);
    console.log("This is your current subtotal: $" + subTotal);
}else{//this is the subtotal if no extra pages were added
    subTotal = standardSite;
    console.log("This is your current subtotal: $" + subTotal);
}

graphics = prompt("Will you be supplying your own images and graphics?");//this defines the graphics var and prompts the user to find out if they have thier own images and graphics

total = (graphics === "yes") ? total = (subTotal - 75) : total = subTotal;//ternary that figures out the new subtototal if they are supplying their own graphics
console.log("Your total cost will be $" + total)//printout that tells what the grand total will be