
/*
JaySnyder
Conditionals_Industry
6/18/2014
 */

   //alert("testing");conducted and working

   var s = 632; //In $

   var iMac = 3750; //In $

   alert("Amount needed to purchase new i-Mac $" + iMac); //Cost of new iMac

   var c = prompt ("Cost per hour for conceptualizing: ");//conceptualizing cost per hr.

   if(c ===""){
    //Reprompt for a new answer
      c = prompt ("Cost per hour for conceptualizing. Please don't leave blank! ");//validation prompt
      }

    if(isNaN(c)){

    //Reprompt for numbers only
      c = prompt ("Cost per hour for conceptualizing. Please use only numbers! ");//validation statement

      }

    var co = prompt ("How many hours of conceptualizing? ");//total hrs. of conceptualizing


  if(co ===""){
    //Reprompt for a new answer
    co = prompt ("Cost per hour for conceptualizing. Please don't leave blank! ");//validation prompt
    }



   //Combine both validations
   if(co==="" || isNaN(co)){

    co = prompt ("How many hours of conceptualizing?\nPlease don't leave blank and only use numbers.");
}


   total1 = c * co;//total income for conceptualizing

   alert("Amount made conceptualizing: " + total1);


   var p = prompt ("Cost per hour for production: ");

   var pr = prompt ("How many hours of production: ");

   total2 = p * pr;//total income for productions

   alert ("Amount made from production: " + (p * pr));

   var j = total1 + total2;//total for conceptualizing and production

   alert ("Total for production and conceptualizing" + j);

   var t = j + s;

   alert ("Including savings you have: " + t);//adding in money that's been saved




   var result = (iMac < t + s ||  iMac < j ) ? ("We can buy the iMac!") : ("Sorry, we need more money");

   alert(result); //statement allowing or not the purchase of another iMac.
