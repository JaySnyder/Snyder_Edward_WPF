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
        fish = prompt ("How many people requested fish?. Please use only numbers!");
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

      var amount = Number(fish) + Number(filet) + Number(chicken);//total amount of attendees based on protein requests

    alert("Total number of attendees: " + amount);

    var lbsOffish = fish * .8;//8ozs per serving

    var lbsOffilet = filet * .6;//6ozs per serving

    var lbsOfchicken = chicken * .8;//8ozs per serving

    alert("You need to purchase this many pounds of fish: " + lbsOffish);//ppl wanting fish * .8

    alert("You need to purchase this many pounds of filet: " + lbsOffilet);//ppl wanting filet * .6

    alert("You need to purchase this many pounds of chicken: " + lbsOfchicken);//ppl wanting chicken * .8

    costOffish = lbsOffish * 9.99;//lbs of fish needed * market price

    costOffilet = lbsOffilet * 11.99;//lbs of filet * market price

    costOfchicken = lbsOfchicken * 5.99;//lbs of chicken * market price

    foodCost = costOffish + costOffilet + costOfchicken;//total food cost (protein)

    alert("Your cost for food is: " + foodCost);//whats this shindig's protein going to cost you

  if(foodCost < 600){
      alert("I saved enough! Let the party begin?")}else{alert("Sorry - Looks like hotdogs and chips!")

  }

   var temp = prompt ("What is the temperature outside? ");

   var logistics = (temp > 90 || amount < 35)? ("Party will be inside!") : ("Party will be outside!");

   alert (logistics);







