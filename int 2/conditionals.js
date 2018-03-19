/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
            
        var random = Math.floor((Math.random() * 200) + 1);
        var random2 = Math.floor((Math.random() * 400) + 1);
        var random3 = Math.floor((Math.random() * 400) + 1);
            
        var size = 3 + sizebase;
        var sizebase = 1;
            
        var fill1 = 0;
        var fill2 = 255;
            
            
            
            
            
            
        //heck1
        draw = function() {
            background(255, 255, 255);
            fill(0, 0, 0);
            rect(mouseX - 20, mouseY - 20, 40, 40);
            strokeWeight();
            stroke(0, 0, 0);
                
            if (mouseX-50<random&mouseY<random2) {
                fill(255, 0, 0);
            }
            else {
                fill(0, 242, 255);
            }
            ellipse(mouseX, mouseY, 30, 30);
            ellipse(random,random2,30,30);
            line(mouseX-20,mouseY-20,mouseX-30,mouseY);
            line(mouseX-20,mouseY+20,mouseX-30,mouseY);
            line(mouseX-20,mouseY-20,mouseX-50,mouseY);
            line(mouseX-20,mouseY+20,mouseX-50,mouseY);
        };
            
            
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
