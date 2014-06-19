
/*
JaySnyder
Conditionals_Industry
6/18/2014
 */

//alert("testing");conducted and working

   var s = 632; //In $

   var iMac = 3750; //In $

   alert("Amount needed to purchase new i-Mac $" + iMac);

   var c = prompt ("Cost per hour for concepting: ");

//Validate prompt
//if(condition to test){ code that will run if true}

if(c ===""){
    //Reprompt for a new answer
    c = prompt ("Cost per hour for concepting. Please don't leave blank! ");
}

//Test if they typed in numbers
//isNaN() - is not a number
//console.log(isNaN("Monkey")); //true -Boolean
//console.log(isNaN(7)); //false -Boolean

if(isNaN(c)){

    //Reprompt for only numbers
    c = prompt ("Cost per hour for concepting. Please use only numbers! ");

}



   var co = prompt ("How many hours of concepting? ");

//Combine both validations
if(co==="" || isNaN(co)){

    co = prompt ("How many hours of concepting?\nPlease don't leave blank and only use numbers.");
}


   total1 = c * co;

   alert("Amount made concepting: " + total1);


   var p = prompt ("Cost per hour for production: ");

   var pr = prompt ("How many hours of production: ");

   total2 = p * pr;

   alert ("Amount made from production: " + (p * pr));

   var j = total1 + total2;

   alert ("Total for production and concepting" + j);

   var t = j + s;

   alert ("Including savings you have: " + t);


      (iMac < t + s ||  iMac < j ) ? ("We can buy the iMac!") : ("Sorry, we need more money");


