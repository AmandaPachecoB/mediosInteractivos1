var peacock;
var angle = 0;
var r = 10;


var spin = 0.05;
var grow = spin;


function preload() {
  peacock = loadImage('Assets/Peacock2.jpg');
}

function setup() {
  createCanvas(800, 450);
  background(240);
}

function draw() {
  var x = cos(angle) * r;
  var y = sin(angle) * r;
  peacock.loadPixels();


  strokeWeight(0)
  angle += spin;
  r = r + grow;

  var pix = peacock.get(x, y);
  translate(0, -20)
  ellipse(x, y, 10, 10);


  fill(pix[0], pix[1], pix[2], pix[3]);

}