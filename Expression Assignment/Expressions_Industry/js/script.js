/*
JaySnyder
6/10/2014
Expressions_Industry
 */


//calculating the cost per copy for client and any sub-clients, then
//divide equally between clients and sub-clients. Final result will be an accurate client billing.//

var colorCopies = prompt ("How many color copies were made?");//color copies made
console.log(colorCopies);
var regularCopies = prompt ("How many black and white copies were made?");//black and white copies
console.log(regularCopies);
var result = Number(colorCopies) + Number(regularCopies);//need for total number of copies

alert ("Total number of copies " + result);//total number of copies displayed to use
console.log("Total number of copies " + result);
var x =  result * .003; //total number of copies @.003 to get cost for client

alert ("Cost to Client: " + x);//cost to client if no sub-clients, vendors, freelance

var y = prompt ("Number of sub-clients to be billed?");//any sub-client billing

alert ("Cost to each sub-client " + x / y);//final cost to subclients.
console.log("Cost to each sub-client " + x / y);