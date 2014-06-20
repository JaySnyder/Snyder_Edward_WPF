/*
JaySnyder
Conditionals_wacky
6/19/2014
 */

//alert("testing"); Test ran successfully!

   water = 279;

   var teams = prompt ("How many teams are involved? ");

   var balloons = prompt ("How many balloons per team? ");
   //reprompt for number of balloons
if(balloons===""){

    balloons = prompt ("How many balloons per team?. Please don't leave blank! ");

}
   //reprompt for number
if(isNaN(balloons)) {


    balloons = prompt("How many balloons per team?. Please use only numbers! ");

}


   var amount = number(teams) + number(balloons);

   alert("You need to fill this many balloons- " + amount);





