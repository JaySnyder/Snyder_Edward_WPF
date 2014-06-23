/*
JaySnyder
Functions_industry
6/20/2014
 */

//alert("testing");//Test successful

   var currentSpace = prompt("What is your current square footage?: ");

  if(currentSpace==="") {

    currentSpace = prompt("What is your current square footage?. Please do not leave blank.");
   }

  if(isNaN(currentSpace)){
    currentSpace = prompt("What is your current square footage?. Please use only numbers! ");
   }

   var employees = prompt("How many employees do you currently have?: ");

  if(employees==="") {

    employees  = prompt("How many employees do you currently have??. Please do not leave blank.");
   }

   if(isNaN(employees)){
    employees = prompt("How many employees do you currently have??. Please use only numbers! ");
}












var hires = prompt ("How many")