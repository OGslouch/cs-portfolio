/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(880, 580);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        //random number generators
        var random1 = Math.floor((Math.random() * 10) + 1);
        var random2 = Math.floor((Math.random() * 10) + 1);
        var random3 = Math.floor((Math.random() * 10) + 1);
        var randomclick = Math.floor((Math.random() * 2) + 1);

        //variables
        var spacer = 0

        //objects
        target = function(){
        strokeWeight(2);
        if (mouseX<=35||mouseX>=width-40||mouseY<=35||mouseY>=height-40){
                fill(255,255,255,0);
                stroke(255,255,255);
            }
            else{
            fill(0, 242, 255);
            }
                    quad(mouseX,540,mouseX+15,580,mouseX,560, mouseX-15, 580);

                    quad(mouseX,35,mouseX+15,-5,mouseX,15, mouseX-15, -5);

                    quad(840,mouseY,880,mouseY+15,860,mouseY, 880, mouseY-15);

                    quad(40,mouseY,0,mouseY+15,20,mouseY, 0, mouseY-15);
                    

                    stroke(255,255,255);
                    line(mouseX,540,mouseX,35); 
                    line(840,mouseY,40,mouseY); 
                    stroke(0,0,0);
                    
                    ellipse(mouseX,mouseY,30,30);
        }
        
        //shootpoint
        punct = function(){
            fill(255,0,0);
            ellipse(mouseX,mouseY,30,30);
        }

        draw = function() {
            spacer = 0;
            background(0, 0, 0);
            for (var j = 0; j < height; j += random1 + 30) {
                for (var s = 0; s < width; s += random2 + 30) {
                    fill(255, 255, 255, random(30));
                    //background stars
                    strokeWeight(1);
                    rect(j + 4 + spacer, s - 4, 2, 10);
                    rect(j + spacer, s, 10, 2);
                    spacer = spacer + 1
                    //targeting
                    target();
                }
            }
        }
        mouseClicked = function(){
            punct();
        }

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
