/*
JaySnyder
6/10/2014
Expressions_Wacky
 */



var costOfkeg =prompt ("How much will your keg cost in dollars?");//cost of a "full" keg of beer

var splitBetween = prompt("How many people are you splitting this between?");//number of people contributing

var costPerperson = costOfkeg / splitBetween;//finding out how much each person will have to pay

prompt ("Your part of the cost" + costPerperson);//tells each person how much they'll have to pay

var howManycups = 1984 / splitBetween  ;//1984 are the oz's in a full keg / the number of people (split between)


alert ("You can have this many 12oz cups: " + howManycups / 12 );//number of cups / 12 (ozs per cup)



