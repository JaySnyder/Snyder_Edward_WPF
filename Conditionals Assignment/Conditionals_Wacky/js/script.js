/*
JaySnyder
Conditionals_wacky
6/19/2014
 */

//alert("testing"); Test ran successfully!

   water = 279;

   var teams = prompt ("How many teams are involved? ");

   var balloons = prompt ("How many balloons per team? ");

if(balloons===""){

    balloons = prompt ("How many balloons per team?. Please don't leave blank! ");

}

if(isNaN(balloons)) {

    //Reprompt for  numbers
    balloons = prompt("How many balloons per team?. Please use only numbers! ");

}


   var amount = number(teams) + number(balloons);





