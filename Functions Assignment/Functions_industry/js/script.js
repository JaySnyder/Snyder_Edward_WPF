/*
JaySnyder
Functions_industry
6/20/2014
 */

//alert("testing");//Test successful



   var currentSpace = prompt("What is your current square footage?: ");

   while(isNaN(currentSpace) || (currentSpace==="")) {

          currentSpace = prompt("Please type in current square footage");
   }

   var employees = prompt("How many employees do you currently have? ");

   while(isNaN(employees) || (employees==="")) {

           employees = prompt("How many employees do you currently have? ");
   }

   var newHires = prompt ("How many people are you looking to hire? ");

   while(isNaN(newHires) || (newHires==="")) {

           newHires = prompt("How many people are you looking to hire?");
   }

   var sqFt = 175;

     //anonymous function

   var totalSpace = function(empl, nH, sqFt) {

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










   //var answer = (currentSpace < results) ? ("You will fit in your current space!") : ("You will not fit, start looking!");

     //console.log(answer);
    alert(answer );







