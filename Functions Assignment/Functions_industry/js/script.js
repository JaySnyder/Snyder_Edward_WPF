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

  var totalSpace = function(employ,nH, sF) {

      //Calcuations goes here
  var totalEmployees = Number(employ) + Number(nH);

  var totalSpace = totalEmployees * sF;


      //**console.log("inside of loop");

      //Return the calc value
      //**return totalSpace;

      }

     //Function call!!!!
     //Create a variable to catch the return value
  var results = totalSpace(employees, newHires, sqFt);
     console.log("The results are "+results);

  var answer = (currentSpace < results)? "You will not fit, find a new space! ":"You will fit in your current space.";

     //console.log(answer);
    alert(answer);







