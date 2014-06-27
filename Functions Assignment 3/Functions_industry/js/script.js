/*
JaySnyder
Functions_industry
6/20/2014
 */

//alert("testing");//Test successful



   var currentSpace = prompt("What is your current square footage?: ");//getting info for ternary statement

   while(isNaN(currentSpace) || (currentSpace==="")) {

          currentSpace = prompt("Please type in current square footage");//reprompt - loop
   }

   var employees = prompt("How many employees do you currently have? ");//employees currently aboard

   while(isNaN(employees) || (employees==="")) {

           employees = prompt("How many employees do you currently have? ");//reprompt - loop
   }

   var newHires = prompt ("How many people are you looking to hire? ");//how many hirees

    while(isNaN(newHires) || (newHires==="")) {

    newHires = prompt("How many people are you looking to hire?");//reprompt - loop
     }

   var sqFt = 175;//each employee needs approx. 175 square feet of space

     //anonymous function

   var totalSpace = function(empl, nH, sqFt) {       //anonymous function set up

      //Calculations go here
   var totalEmployees = Number(empl) + Number(nH);

   totalSpace = Number(totalEmployees) * sqFt;

                                     //**console.log("inside of loop");
                                     //Return the calc value
                                     //**return totalSpace;
      }

     //Function call!!!!
     //Create a variable to catch the return value
   var results = totalSpace(employees, newHires, sqFt);
     //console.log("The results are "+ results)


   var answer = (currentSpace > totalSpace) ? ("You have enough room!") : ("Sorry, you need a bigger space.");

    alert(answer );


    //FINAL WORK







