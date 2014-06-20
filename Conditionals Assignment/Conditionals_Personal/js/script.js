/*
JaySnyder
Conditionals_Personal
6/10/2014
 */

//alert("testing");


   var materials = prompt ("How much did building materials cost?  ");

if(materials===""){

    materials = prompt ("How much did building materials cost?. Please don't leave blank! ");

}

   var seed = prompt ("How much did seeds cost?  ");

    //Reprompt for answer
  if(seed===""){

      seed = prompt ("How much did seeds cost?. Please don't leave blank! ");

      }

  if(isNaN(seed)) {

    //Reprompt for  numbers
    seed = prompt("How much did seeds cost?. Please use only numbers! ");

        }


   cost = Number(materials) + Number(seed);

   alert("Total cost of your garden" + cost);


   var tomatoes = prompt ("How many pounds of tomatoes did you harvest?  lbs. ");

   var ppp = prompt ("What is selling price per pound? ");

      alert("You made this much: $" + tomatoes * ppp);
  if(tomatoes * ppp > cost){
       alert("You made your money back! Congratulations!");}else{
    alert("Keep growing, you need more tomatoes!")
}