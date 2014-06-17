/*
JaySnyder
6/10/2014
Expressions_Personal
 */
//alert("Test Test");
//I'm going to build a raised bed garden.  The dimensions are going to be L:72" W:36" D:10"
// I want to know how many cu. ft. of dirt i'm going to need//

var length = prompt("Enter in inches the length of your garden bed");//asking for length in inches
var width = prompt("Enter in inches the width of your garden bed");//asking for width in inches
var depth = prompt("Enter in inches the depth of your garden bed");//asking for depth of garden, in inches

var cubicFeet = length * width * depth /1728;//divided by 1728 to get cubic feet

alert("Cubic feet of dirt needed is: " + cubicFeet);//this will give the user the answer in Cu.Ft.
console.log ("Cubic feet of dirt needed is: " + cubicFeet);//this will give the user the answer in Cu.Ft.





