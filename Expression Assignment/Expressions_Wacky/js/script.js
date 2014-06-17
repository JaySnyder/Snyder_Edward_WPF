/*
JaySnyder
6/10/2014
Expressions_Wacky
 */

//Some college kids are purchasing a keg of beer for friends



   var costOfkeg =prompt ("How much will your keg cost in dollars?");//cost of a "full" keg of beer

   var collected =  [12, 6, 13];

   var total = collected [0] + collected [1] + collected [2];

   alert ("Money already on hand " + total);

   var whatsLeft = costOfkeg - total;

   alert ("Revised cost of keg " + whatsLeft);

   var splits = prompt("How many people are you splitting this between?");//number of people contributing


   var remainder = whatsLeft / splits;

   alert ("Your part of the cost " + remainder );//tells each person how much they'll have to pay


   var howManycups = 1984 / splits; //1984 are the oz's in a full keg / the number of people (split between)


   alert ("You can have this many 12oz cups: " + howManycups / 12 );//number of cups / 12 (ozs per cup)




