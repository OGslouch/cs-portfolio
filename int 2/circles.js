/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var random = Math.floor((Math.random() * 10) + 1);
var random2 = Math.floor((Math.random() * 10) + 1);
var random3 = Math.floor((Math.random() * 10) + 1);

var xPos = 200;
var yPos = 0;
var weight = .5;
var girth = 1

draw = function() {
    //heck1
    strokeWeight(weight ++ );
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(xPos+random^2,yPos+random2^random3+200 ,girth+random,girth+random);
    yPos = yPos^2 +random3;

};   
 
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
