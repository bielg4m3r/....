
var animação, animação1;


function preload() {
    
    animação1= loadAnimation("pixil-frame-0","pixil-frame-1")
    
    

}

function setup() {
    createCanvas(600, 200);
    
    
    

    

    
   animação = createSprite( 300, 300 ,50 ,50) 
    
    animação.addAnimation("a",animação1)
    
     animação.scale = 1

}

function draw() {
    background("white");





}