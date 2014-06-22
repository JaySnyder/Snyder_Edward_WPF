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

     var filet = prompt("How many people requested beef? ");

    if(filet==="") {

    filet = prompt("How many people requested beef?.  Please do not leave blank! ");
     }

    if(isNaN(filet)){
      filet = prompt("How many people requested beef?. Please use only numbers! ");
     }

     var chicken = prompt ("How many people requested chicken? ");

    if(chicken==="") {

       chicken = prompt("How many people requested chicken?.  Please do not leave blank! ");
     }
    if(isNaN(chicken)){
       chicken = prompt("How many people requested chicken?. Please use only numbers! ");
     }

    var amount = Number(fish) + Number(filet) + Number(chicken);

    alert("Total number of attendees: " + amount);

    var lbsOffish = fish * .8;

    var lbsOffilet = filet * .6;

    var lbsOfchicken = chicken * .8;

    alert("You need to purchase this many pounds of fish: " + lbsOffish);

    alert("You need to purchase this many pounds of filet: " + lbsOffilet);

    alert("You need to purchase this many pounds of chicken: " + lbsOfchicken);

    


