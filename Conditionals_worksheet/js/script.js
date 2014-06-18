/*
JaySnyder
Conditionals_worksheet
6/17/2014
 */

//alert("testing"); Test was successful//

   var tankCap = prompt ("How many gallons does your tank hold? ");

   var milesDriven = prompt ("How many miles have you driven? ");

   var gasUsed = prompt ("Percentage of gas used? ");

   var milesPergal = milesDriven / gasUsed;

   alert("You're getting this many mpg: " + milesPergal);

   var gasLeft = tankCap - gasUsed;

   alert("You have this many more gallons left:  " + tankCap - gasUsed );

   alert("You can go this many more miles:  " + mpg / gasLeft);



   //var traveled = prompt ("How many miles have you traveled? ");

   //var mpg = traveled / x;

   //alert('Your Miles Per Gallon= ' + mpg);





//if(milesLeft > 200);{
      //alert("You can make the next gas station!");}else
//{
  //alert("You better stop for gas!");

//}