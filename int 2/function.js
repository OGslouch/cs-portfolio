/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var random1 = Math.floor((Math.random() * 10) + 1);
        var random2 = Math.floor((Math.random() * 10) + 1);
        var random3 = Math.floor((Math.random() * 10) + 1);
        var randomclick = Math.floor((Math.random() * 2) + 1);




        background(0, 0, 0);
        var xPos = 0;



        draw = function() {
            for (var j = 0; j < height; j += random1 + 30) {
                for (var s = 0; s < width; s += random2 + 30) {
                    fill(255, 255, 255, random(30));

                    rect(j + 4 + xPos, s - 4, 2, 10);
                    rect(j + xPos, s, 10, 2);
                    xPos = xPos + 1
                }
            }
        }



var size = random(50);
    drawship = function(x, y) {
        fill(random(255),random(255),random(255));
        ellipse(x, y,100,100);
        ellipse(x+90, y+90,100,100);
        rect(x,y,50,50);
        rect(x+40,y+40,50,50);
        ellipse(x+45, y+45,50,50);
    }


    mouseClicked = function() {
        drawship(mouseX, mouseY);
    }


    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
