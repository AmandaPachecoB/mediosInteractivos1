var peacock;
var x;
var y;

function preload() {
  peacock = loadImage('Peacock2.jpg');
}


function setup() { 
  createCanvas(800, 450);
  background (0);
  
} 

function draw() {
  peacock.loadPixels();
  var pix = peacock.get(mouseX, mouseY);

  fill(pix[0], pix[1], pix[2], pix[3]);
  strokeWeight(0);
 ellipse(mouseX, mouseY,15,15);



}
