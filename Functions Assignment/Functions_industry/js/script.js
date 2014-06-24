/*
JaySnyder
Functions_industry
6/20/2014
 */

//alert("testing");//Test successful

   var perPersonsqFt = 150;

   var currentSpace = prompt("What is your current square footage?: ");

  if(currentSpace==="") {

    currentSpace = prompt("What is your current square footage?. Please do not leave blank.");
   }

  if(isNaN(currentSpace)){
    currentSpace = prompt("What is your current square footage?. Please use only numbers! ");
   }

   var employees = prompt("How many employees do you currently have? ");

  if(employees==="") {

    employees = prompt("How many employees do you currently have?. Please do not leave blank.");
   }

  if(isNaN(employees)) {
      employees = prompt("How many employees do you currently have?. Please use only numbers! ");
   }


   var newHires = prompt ("How many people are you looking to hire? ");

  if(newHires==="") {

    newHires = prompt("How many people are you looking to hire?. Please do not leave blank.");
   }

  if(isNaN(newHires)) {

    newHires = prompt("How many people are you looking to hire?. Please use only numbers! ");

   }


 






  //var spaceNeeded = function (newHires, employees, perPersonsqFt){
//
  //                 var spaceNeeded = newHires + employees * perPersonsqFt;
//
  //}
   //var a = spaceNeeded(newHires,employees, perPersonsqFt);
     //alert("You need this many square feet: " = a);



//var spaceNeeded = Number(newHires) + Number(employees) * Number(perPersonsqFt);

//alert("Space needed is; " + spaceNeeded);

