/*
JaySnyder
Functions_Personal
6/20/2014
 */

//alert("testing"); Test was successful

   var fish = prompt("How many people requested fish? ");

   if(fish==="") {

       fish = prompt("How many people requested fish?.  Please do not leave blank! ");
     }

    if(isNaN(fish)){
         fish = prompt("How many people requested fish?. Please use only numbers! ");
     }

     var beef = prompt("How many people requested beef? ");

    if(beef==="") {

    beef = prompt("How many people requested beef?.  Please do not leave blank! ");
     }

    if(isNaN(beef)){
      beef = prompt("How many people requested beef?. Please use only numbers! ");
     }

     var chicken = prompt ("How many people requested chicken? ");

    if(chicken==="") {

       chicken = prompt("How many people requested chicken?.  Please do not leave blank! ");
     }
    if(isNaN(chicken)){
       chicken = prompt("How many people requested chicken?. Please use only numbers! ");
     }

    var amount = Number(fish) + Number(beef) + Number(chicken);

    alert("Total number of attendees: " + amount);

    var lbsOffish = fish * .8;

    var lbsOfbeef = beef * .6;

    var lbsOfchicken = chicken * .8;

    alert("You need to purchase this many pounds of fish: " + lbsOffish);

    alert("You need to purchase this many pounds of beef: " + lbsOfbeef);

    alert("You need to purchase this many pounds of chicken: " + lbsOfchicken);
