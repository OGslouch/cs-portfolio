/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var random1 = Math.floor((Math.random() * 10) + 1);
var random2 = Math.floor((Math.random() * 10) + 1);
var random3 = Math.floor((Math.random() * 10) + 1);


background(255,255,255);

    for(var i = 0; i < width; i+=30){
        for(var j = 0; j < height; j+=30){
        var size = random(30);
        for(var k = 0; k<255; k+=1)
        fill(k,k,k);
        ellipse(i,j,size,size);
        }
    }
    

draw = function(){

    for(var s =0; s < height; s-=-30){
    for(var i = 0; i < width; i+=30){
        for(var j = 0; j < height; j+=30){
        var size = random(30);
        for(var k = 0; k<255; k+=1)
        fill(0+j,0+k-j,0+j+k,i*random1);
        ellipse(i,j,size,size);
        
        rect(s,j,30,30);
        rect(j,s,30,30);
        
        rect(j+360,j,size,size);
        rect(j+300,j,size,size);
        rect(j+240,j,size,size);
        rect(j+180,j,size,size);
        rect(j+120,j,size,size);
        rect(j+60,j,size,size);
        rect(j,j,size,size);
        rect(j-60,j,size,size);
        rect(j-120,j,size,size);
        rect(j-180,j,size,size);
        rect(j-240,j,size,size);
        rect(j-300,j,size,size);
        rect(j-360,j,size,size);
        }
    }
}
    
    
    
    
}
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
