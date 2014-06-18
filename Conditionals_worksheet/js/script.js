/*
Jay Snyder
Conditionals_worksheet
6/17/14
*/

//alert("testing"); Test was successful

    var tankCap = prompt ("How many gallons does your tank hold? ");

    var milesDriven = prompt ("How many miles have you driven? ");

    var gasUsed = prompt ("Percentage of gas used? ");

    var galUsed = gasUsed - tankCap;

    var mpg = milesDriven / galUsed;

    alert("You're getting this many mpg: " + mpg);

    var galLeft = tankCap - gasUsed;

    alert("You have this many more gallons left:  " + galLeft);

    var milesLeft =  galLeft / mpg;

   //alert ("Miles you can drive:  " + milesLeft);

   //if(milesLeft > 200){
      //console.log("You can make the next gas station!");
       //}else
      // {
      // console.log("You better stop for gas!");
      // }