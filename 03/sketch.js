var mic;
var song;
var circles = [];


function preload() {
  song = loadSound('Godzilla.mp3');
}

function setup() {
  createCanvas(500,400);
 
  song.play();
  
  mic=new p5.AudioIn();
  mic.start();

  
}


function draw() { 
  background(0);
  var vol = mic.getLevel();
   

//jumping circles
  
 if (millis()>4800 && millis()<11500)

{

  // circulo naranja
  fill(230, 100,50);
  ellipse(300,100,vol*500,vol*500);
  
  noStroke()
  fill(255)
  ellipse(300,100,vol*300,vol*300);
  
  // circulo verde
  fill(30, 100,50)
  ellipse(400,200,vol*500,vol*500);
  
  noStroke()
  fill(255)
  ellipse(400,200,vol*300,vol*300);
  
    // circulo azul
  fill(30, 100,200)
  ellipse(100,300,vol*700,vol*700);
  
  noStroke()
  fill(255)
  ellipse(100,300,vol*300,vol*300);
  
}
  
  if (millis()>8000 && millis()<11500){
    
  // circulo naranja
  fill(230, 100,50);
  ellipse(100,100,vol*500,vol*500);
  
  noStroke()
  fill(255)
  ellipse(100,100,vol*300,vol*300);
  
  // circulo verde
  fill(30, 100,50)
  ellipse(200,200,vol*500,vol*500);
  
  noStroke()
  fill(255)
  ellipse(200,200,vol*300,vol*300);
  
    // circulo azul
  fill(30, 100,200)
  ellipse(300,300,vol*700,vol*700);
  
  noStroke()
  fill(255)
  ellipse(300,300,vol*300,vol*300);
    
  }

  //circulos blancos
  
  if (millis()>11500 && millis()<20000){
    ellipse(0,0,400,200)}
  
  if (millis()>12500 && millis()<20000){
    ellipse(500,400,300,500)}    
  
    
  if (millis()>13500 && millis()<20000){
    ellipse(500,0,300,200)}  
  
  if (millis()>13500 && millis()<20000){
    ellipse(0,400,600,200)}  
  
  if (millis()>14500 && millis()<20000){
    ellipse(300,0,600,200)}  
  
  if (millis()>15500 && millis()<20000){
    ellipse(0,200,300,300)}  
  
  if (millis()>16500 && millis()<20000){
    ellipse(200,400,600,400)}  
  
  if (millis()>17500 && millis()<20000){
    ellipse(500,200,300,200)}  
  
  if (millis()>17500 && millis()<20000){
    ellipse(150,200,300,200)}  
  
  if (millis()>18500 && millis()<20000){
    ellipse(350,200,300,200)}  
  
  if (millis()>19500 && millis()<20000){
    ellipse(250,100,500,200)}  
  
  


// rect verdes
  if (millis()>20000){
    
for (var h = 5; h < 45; h+=10){
  
  noStroke()
  fill(181,230,59)
  rect(h*10, 10, 50,120);
}}


if (millis()>21000){

for (var h = 5; h < 45; h+=10){
  
  noStroke()
  fill(181,230,59)
  rect(h*10, 130, 50,120);
}}
  
  if (millis()>22000){
for (var h = 5; h < 45; h+=10){
  
  noStroke()
  fill(181,230,59)
  rect(h*10, 250, 50,120);
}}
  
// rect morados
    
    if (millis()>23000){
  for (var t=10;t<50;t+=10){
    
    noStroke()
    fill(207,48,191)
    rect(t*10,10,50,120)
  }}
  
      if (millis()>24000){
    for (var t=10;t<50;t+=10){
    
    noStroke()
    fill(207,48,191)
    rect(t*10,130,50,120)
  }}
  
  if (millis()>25000){
    for (var t=10;t<50;t+=10){
    
    noStroke()
    fill(207,48,191)
    rect(t*10,250,50,120)
  }}
  
  
//parar cancion
  if (millis()>26500)
  {
    song.stop()
  }

  
  
 // random circles
  
if (millis()>0 && millis()<4805){
  
for (var c=0;c<25;c++){
    
  var circle = {
    x:random(width),
    y:random(height),
    r:30
    };
    
    var overlapping=false
    for (var j=0; j<circles.length; j++){
    var other = circles[j];
    var d = dist (circle.x, circle.y, other.x, other.y);
    if (d< circle.r + other.r){
      // they are overlapping
      overlapping=true
      break;
    }
    }
    
    if(!overlapping){
    circles.push(circle);
  }
  
for (var c=0; c<circles.length; c++){
    
    fill(230,0,50);
    noStroke();
    ellipse(circles[c].x,circles[c].y,circles[c].r*2,circles[c].r*2);
  }
}
  

  console.log(vol)
}}