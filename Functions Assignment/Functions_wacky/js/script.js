/*
JaySnyder_WPF
Test
6/10/2014
 */

//alert("testing"); Test ran successfully


   //var apple = 100;

   //var cherry = 100;

   //var blueberry = 100;

   //var peach = 100;

   var aTotal = prompt ("How many people chose apple pie? ");

        while(isNaN(aTotal) || (aTotal==="")) {

            aTotal = prompt("How many people chose apple pie? ");
        }

   var cTotal = prompt ("How many people chose cherry pie? ");

      while(isNaN(cTotal) || (cTotal==="")) {

            cTotal = prompt ("How many people chose cherry pie? ")

        }

   var bTotal = prompt ("How many people chose blueberry pie? ");

      while(isNaN(bTotal) || (bTotal==="")) {

             bTotal = prompt ("How many people chose blueberry pie? ")

        }

       var pTotal = prompt ("How many people chose peach pie? ");

       while(isNaN(pTotal) || (pTotal==="")) {

             pTotal = prompt ("How many people chose peach pie?")

        }

        var part1 = Number(aTotal) + Number(cTotal);

        var part2 = Number(bTotal) + Number(pTotal);

        var total = Number(part1) + Number(part2);

        alert("There are " + total + " participants.");

        var piesNeeded = total * 3.5;

        alert ("You need a total of " + piesNeeded + " pies.");


        //var totalPies = apple + cherry + blueberry + peach;

       function piesOnhand(){

                  var apple = 50;
                  var cherry = 32;
                  var blueberry = 12;
                  var peach = 12;

                var piesOnhand = apple + cherry + blueberry + peach;

                console.log(piesOnhand);

          }























var answer = (totalPies < piesNeeded) ? ("You need more pies!") : ("You have enough pies");

              alert(answer);




