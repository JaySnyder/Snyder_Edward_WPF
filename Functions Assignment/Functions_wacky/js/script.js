/*
JaySnyder_WPF
Test
6/10/2014
 */

//alert("testing"); Test ran successfully



      var aTotal = prompt ("How many people chose apple pie? ");//Apple pie eaters

        while(isNaN(aTotal) || (aTotal==="")) {

            aTotal = prompt("How many people chose apple pie? ");//number & fill-in prompts - loop
        }

   var cTotal = prompt ("How many people chose cherry pie? ");//cherry pie eaters

      while(isNaN(cTotal) || (cTotal==="")) {

            cTotal = prompt ("How many people chose cherry pie? ");//number & fill in prompts - loop

        }

       var bTotal = prompt ("How many people chose blueberry pie? ");//blueberry pie eaters

      while(isNaN(bTotal) || (bTotal==="")) {

             bTotal = prompt ("How many people chose blueberry pie? ");//number & fill in - loop

        }

       var pTotal = prompt ("How many people chose peach pie? ");//peach pie eaters

       while(isNaN(pTotal) || (pTotal==="")) {

             pTotal = prompt ("How many people chose peach pie?");//number & fill in - loop

        }

       var part1 = Number(aTotal) + Number(cTotal);//total number of apple and cherry eaters

       var part2 = Number(bTotal) + Number(pTotal);//total number of blueberry and peach

       var total = Number(part1) + Number(part2);//total number of participants

        alert("There are " + total + " participants.");//alert - participants

        var piesNeeded = total * 3.5;//participants * 3.5 (avg # of pies 1 contestant can eat

        alert ("You need a total of " + piesNeeded + " pies.");//alert noting the number of pies needed based on partic.


        //var totalPies = apple + cherry + blueberry + peach;
        //Normal function set up
       function pies1(){

                  var apple = 50;//apple pies on hand
                  var cherry = 32;//cherry pies on hand
                  var blueberry = 12;//blueberry pies on hand
                  var peach = 12;//peach pies on hand

           var piesOnhand = apple + cherry + blueberry + peach;

                  alert("You have " + piesOnhand + " pies on hand.");

                      }
                      pies1();


          var result = (Number(piesNeeded) > Number(pies1)) ? ("You need more pies.") : ("You have enough pies.");

         alert(result);//Ternary statement







