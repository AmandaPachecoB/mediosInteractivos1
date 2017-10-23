
var peacock;
var x = 0;
var y = 0;


function preload() {
  peacock = loadImage('Peacock2.jpg');
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  peacock.loadPixels();
  var pix = peacock.get(x, y);

  fill(pix[0], pix[1], pix[2], pix[3]);
  strokeWeight(0);
  ellipse(x, y, 10, 10);
  

  x += 10
  if (x > 800) {
    x = 0
    y += 10
  }


}
