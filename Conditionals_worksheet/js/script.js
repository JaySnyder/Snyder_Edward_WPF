/*
Jay Snyder
Conditionals_worksheet
6/17/14
*/

//alert("testing"); Test was successful

    var tankCap = prompt ("How many gallons does your tank hold? ");

    var milesDriven = prompt ("How many miles have you driven? ");

    var galUsed = prompt ("How many gallons of gas have you used? ");

    var galLeft = tankCap - galUsed;

    var mpg = milesDriven / galUsed ;


    alert("You're getting this many mpg: " + mpg);

    alert("You have this many gallons left:  " + galLeft);

    var milesLeft = galLeft * mpg;

   alert ("Miles you can drive:  " + milesLeft);


     if(milesLeft > 200){
      alert("You can make the next gas station!");
       }
        else{
            alert("You need to stop for gas!")
        }