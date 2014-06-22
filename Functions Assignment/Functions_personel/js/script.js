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

    var chicken = prompt ("How many people requested chicken? ")

      if(chicken==="") {

       chicken = prompt("How many people requested chicken?.  Please do not leave blank! ");
         }
     if(isNaN(chicken)){
       chicken = prompt("How many people requested chicken?. Please use only numbers! ");
          }
