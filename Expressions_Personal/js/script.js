/*
JaySnyder
6/10/2014
Expressions_Personal
 */
<!DOCTYPE html>
    <html>
        <head lang="en"></head>
        <body>
            <meta charset="UTF-8">
                <title>Personal Expression Building a Raised Bed</title>

                <script type="text/javascript">
                //I'm going to build a raised bed garden.  The dimensions are going to be L:72" W:36" D:10"
                // I want to know how many cu. ft. of dirt i'm going to need//

                var length = prompt("Enter in inches the length of your garden bed");//72
                var width = prompt("Enter in inches the width of your garden bed");//36
                var depth = prompt("Enter in inches the depth of your garden bed");//10

                var cubicFeet = length * width * depth /1728;//divided by 1728 to get cubic feet

                prompt("Cubic feet of dirt needed is " + cubicFeet);






                </script>


            </body>

        </html>
