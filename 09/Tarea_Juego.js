var r,g,b;

// circulos
var circ=[];
var numcirc = 15;

// flechasmalas
var flechas = [];
var numflechas =  10;



function setup(){
  createCanvas(700,700);
  r = random(255);
  g = random(255);
  b = random(255);
  
//Los Circulos
  for (var i=0; i < numcirc; i= i +1){
    circ[i] = new Circulos();
    
  }
  
 // Las Flechas malas
 for (var i = 0; i < numflechas; i = i+1){
   flechas[i] =  new Arma();
 }
}
 


function draw() {
  background (200);
  fill(0);
  textSize(20);
  text("Spacebar = agregar circulos", 20,20)
  text("Click = matar triangulos", 20,40)
  
 for (var i = 0; i < numflechas; i = i+1){
    flechas[i].dibujarse();
    flechas[i].moverse(); 
      
 //for (var q = 0 ; q < numflechas; q = q + 1){
 //     var disC =  dist(mouseX, mouseY, flechas[q].x, flechas[q].y);
    
 //   if(disC < 100){
 //     flechas[q].morir();
 //   }

 }
      

 
  for (var i = 0;  i < numcirc; i = i+1){
    circ[i].dibujarse();
    circ[i].moverse();
  
// flechas comen circulos
  for (var j = 0 ; j < numflechas; j = j + 1){
    var disCentro =  dist(flechas[j].x, flechas[j].y, circ[i].x, circ[i].y);
    
    if(disCentro < flechas[j].tamano){
      circ[i].morir();
    }
  }
  }
}

 function mouseClicked() {
    for (var j = 0 ; j < numflechas; j = j + 1){
  var d = dist(mouseX,mouseY, flechas[j].x,flechas[j].y);
  if (d < 50){
     flechas[j].morir();
     
  } } 
 }

// familia Circulos

function Circulos(){
  this.x = random(0,width);
  this.y = random(0,height);
  this.tamano = 20;
  this.viva = true;
  
  this.dibujarse = function(){
    if(this.viva == true){
      fill(r, g, b);
      ellipse(this.x,this.y,this.tamano, this.tamano);
    }
  }
    this.moverse = function(){
      this.x=this.x + random(-2,2);
      this.y = this.y + random(-2,2);
    }
    
    this.morir = function(){
      this.viva = false;
    }
}


// familia Armas
function Arma (){
  this.x = random(0,width);
  this.y = random(0,height);
  this.dirX =  1;
  this.dirY =  1;
  this.tamano = 40;
  this.viva = true;
  
  this.dibujarse = function(){
    if (this.viva == true){
    fill(200,0,100);
    triangle(this.x, this.y, this.x- this.tamano, this.y - (this.tamano/2), this.x - this.tamano, this.y + (this.tamano/2));
  }
  }
  
  this.moverse = function (){
    if (this.x >= width || this.x <= 0){
    this.dirX = -this.dirX;
  
    }
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
    
    }

    this.x = this.x + (this.dirX*random(0, 4));
    this.y = this.y + (this.dirY*random(0, 4));
  }
  
      this.morir = function(){
      this.viva = false;
    }
}
    
function keyReleased() {
  if (keyCode == 32) {
   numcirc++ ;
   circ[circ.length] = new Circulos();
    r = random(255);
    g = random(255);
    b = random(255);
  }
}