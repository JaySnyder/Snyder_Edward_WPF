/*
JaySnyder
Conditionals_wacky
6/19/2014
 */

//alert("testing"); Test ran successfully!

  water = 279;

   var teams = prompt ("How many teams are involved? ");
if(teams===""){

    teams = prompt ("How many teams are involved?. Please don't leave blank! ");

                  }

   var balloons = prompt ("How many balloons per team? ");
   //reprompt for number of balloons
if(balloons===""){

    balloons = prompt ("How many balloons per team?. Please don't leave blank! ");

                   }
   //reprompt for number
if(isNaN(balloons)) {


    balloons = prompt("How many balloons per team?. Please use only numbers! ");

                   }

   var amount = Number(teams) * Number(balloons);

   alert("You need to fill this many balloons- " + amount);

   var galNeeded = amount * .4 ;

   alert ("You need this many gallons of water- " + galNeeded);

if(water > galNeeded){
    ("You have enough water! Proceed with the water fight!")}else{("You need to find water before you play!")
}

















