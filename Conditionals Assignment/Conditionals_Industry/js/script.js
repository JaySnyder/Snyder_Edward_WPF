
/*
JaySnyder
Conditionals_Industry
6/18/2014
 */

//alert("testing");conducted and working

   var s = 632;

   var iMac = 3750;

   alert("Amount needed to purchase new i-Mac" + imac);

   var c = prompt ("Cost per hour for concepting: ");

   var co = prompt ("How many hours of concepting? ");

   total1 = c * co;

   alert("Amount made concepting: " + total1);

  //validate here - just a test

   var p = prompt ("Cost per hour for production: ");

   var pr = prompt ("How many hours of production: ");

   total2 = p * pr;

   alert ("Amount made from production: " + (p * pr));

   var j = total1 + total2;

   alert ("Total for production and concepting" + j);

   var t = j + s;

   alert ("Including savings you have: " + t);


      (imac < t + s ||  t ) ? ("We can buy the iMac!") : ("Sorry, we need more money");


