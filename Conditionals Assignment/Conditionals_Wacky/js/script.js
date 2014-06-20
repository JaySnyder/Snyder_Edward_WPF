/*
JaySnyder
Conditionals_wacky
6/19/2014
 */

//alert("testing"); Test ran successfully!

//WATER FIGHT!!!

   water = 279 ;//water on hand

   var teams = prompt ("How many teams are involved? ");//teams involved in water fight
if(teams===""){

    teams = prompt ("How many teams are involved?. Please don't leave blank! ");//reprompt if left empty

                  }

   var balloons = prompt ("How many balloons per team? "); //number of balloons needed per team

   //reprompt for number of balloons
if(balloons===""){

    balloons = prompt ("How many balloons per team?. Please don't leave blank! ");

                   }
   //reprompt for number if something other was placed in the prompt.
if(isNaN(balloons)) {


    balloons = prompt("How many balloons per team?. Please use only numbers! ");

                   }

   var amount = Number(teams) * Number(balloons);//teams x balloons

   alert("You need to fill this many balloons- " + amount);

   var galNeeded = amount * .4 ; //.4 gallons fills the average balloon

   alert ("You need this many gallons of water- " + galNeeded); //total number of gallons needed


   //else/if statement
if(water > galNeeded){
    alert("You have enough water! Proceed with the water fight!")}else{alert("You need to find water before you play!")
}

















