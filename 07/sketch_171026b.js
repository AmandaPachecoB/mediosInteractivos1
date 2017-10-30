var x = 0

function setup() {
createCanvas(321,207);
frameRate(4);


  }

function draw() {
  background (230);

  //sol
  strokeWeight(1);
  stroke(255); 
  fill(255);
ellipse(300,20,30,30);

line(280,10,270,10);
line(280,22,270,25);
line(288,35,278,43);
line(300,40,300,50);
line(310,38,315,45);

//nubes

ellipse( 100, 50, 30,10);
ellipse( 110, 45, 30,10);
ellipse( 110, 55, 30,10);
ellipse( 120, 50, 30,10);

ellipse( 200, 60, 30,10);
ellipse( 210, 55, 30,10);
ellipse( 210, 65, 30,10);
ellipse( 220, 60, 30,10);

//montanas
noStroke();
beginShape();
fill(220);
vertex(0, 120);
vertex(20, 100);
vertex(120, 190);
vertex(0,190);
endShape();

beginShape();
fill(215);
vertex(95, 165);
vertex(170, 100);
vertex(250, 190);
vertex(120,190);
endShape();

beginShape();
fill(200);
vertex(45, 120);
vertex(90, 90);
vertex(144, 122);
vertex(95,165);
endShape();

beginShape();
vertex(197, 130);
vertex(280, 80);
vertex(321, 100);
vertex(321,190);
vertex(250,190);
endShape();

fill(180);
rect(-1,190,322,17);

x =  x +3

//globo
noStroke();
ellipse(x,50,50,50);
rect(x - 13,50,26,30);

stroke(180);
line(x-13,80,x-13,90);
line(x+12,80,x+12,90);

beginShape();
fill(180);
vertex(x-13, 90);
vertex(x+12, 90);
vertex(x+7, 105);
vertex(x-8,105);
endShape();

stroke(100);
line(x,85,x,88);

strokeWeight(5);
point(x,85);

  
if (frameCount < 70){
saveCanvas("flipbook,jpg");
  
}

}