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

  var totalEmployees = Number(employees) + Number(newHires);

  var totalEmployees = prompt ("You will have "+ Number(totalEmployees) + " employees after your hirings." );


 // var perPersonsqFt = 150;


 /* var totalSpace = function (employees, 150){
           var totalSpace = Number(employees) * 150;

           alert (totalSpace);

  }
