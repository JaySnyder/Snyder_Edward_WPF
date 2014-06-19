
/*
JaySnyder
Conditionals_Industry
6/18/2014
 */

//alert("testing");conducted and working

   var s = 632; //In $

   var iMac = 3750; //In $

   alert("Amount needed to purchase new i-Mac $" + iMac); //Cost of new iMac

   var c = prompt ("Cost per hour for conceptualizing: ");

      //Validate prompt
      //if(condition to test){ code that will run if true}

    if(c ===""){
    //Reprompt for a new answer
    c = prompt ("Cost per hour for conceptualizing. Please don't leave blank! ");
}

//Test if they typed in numbers
//isNaN() - is not a number
//console.log(isNaN("Monkey")); //true -Boolean
//console.log(isNaN(7)); //false -Boolean

    if(isNaN(c)){

    //Reprompt for only numbers
    c = prompt ("Cost per hour for conceptualizing. Please use only numbers! ");

}



   var co = prompt ("How many hours of conceptualizing? ");

//Combine both validations
   if(co==="" || isNaN(co)){

    co = prompt ("How many hours of conceptualizing?\nPlease don't leave blank and only use numbers.");
}


   total1 = c * co;

   alert("Amount made conceptualizing: " + total1);


   var p = prompt ("Cost per hour for production: ");

   var pr = prompt ("How many hours of production: ");

   total2 = p * pr;

   alert ("Amount made from production: " + (p * pr));

   var j = total1 + total2;

   alert ("Total for production and conceptualizing" + j);

   var t = j + s;

   alert ("Including savings you have: " + t);


   (iMac < t + s ||  iMac < j ) ? ("We can buy the iMac!") : ("Sorry, we need more money");


