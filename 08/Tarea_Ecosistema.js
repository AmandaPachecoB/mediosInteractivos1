// circulos
var circ=[];
var numcirc = 10;

// flechasmalas
var flechas = [];
var numflechas =  6;

// flechasbuenas
var Bflechas = [];
var numBflechas = 4;

// cuadrados
var cuadrados = [];
var numCuad = 1 ;

// circulos finales
var finalC= [];
var numfinalC = 2;

function setup(){
  createCanvas(700,700);
  
//Los Circulos
  for (var i=0; i < numcirc; i= i +1){
    circ[i] = new Circulos();
    
  }
  
 // Las Flechas malas
 for (var i = 0; i < numflechas; i = i+1){
   flechas[i] =  new Arma();
 }
 
 // Las Flechas buenas
 for (var i = 0; i < numBflechas; i = i+1){
   Bflechas[i] =  new Reproductor();
 }
 
 
 // Cuadrados
 for (var i = 0; i < numCuad; i = i+1){
   cuadrados[i] =  new Bloque();
 }


// Final 
 for (var i = 0; i < numfinalC; i = i+1){
   finalC[i] =  new Bomba();
 }
}

function draw() {
  background (0);


  if (numcirc > 300){
  for (var i = 0; i < numfinalC; i = i+1){
    
    finalC[i].dibujarse();
    finalC[i].moverse(); 
  }
  }
  
  for (var i = 0; i < numCuad; i = i+1){
    cuadrados[i].dibujarse();
    cuadrados[i].moverse(); 
  }
  
 for (var i = 0; i < numflechas; i = i+1){
    flechas[i].dibujarse();
    flechas[i].moverse(); 
  }
  
    
 for (var i = 0; i < numBflechas; i = i+1){
    Bflechas[i].dibujarse();
    Bflechas[i].moverse();
    
 for (var w = 0 ; w < numflechas; w = w + 1){
    var disCCentro =  dist(flechas[w].x, flechas[w].y, Bflechas[i].x, Bflechas[i].y);
    
    if(disCCentro < 5){
      numCuad = numCuad + 1;
      cuadrados[cuadrados.length] = new Bloque();
      
    }
  }   
    
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
 
//flechas hacen circulos
    for (var u = 0 ; u < numBflechas; u =  u + 1){
    var disCentroB =  dist(Bflechas[u].x, Bflechas[u].y, circ[i].x, circ[i].y);
    
    if(disCentroB < 10){
      numcirc++;
      circ[circ.length] = new Circulos();
    }
  }
  
// cuadrados comen circulos 
  for (var q = 0 ; q < numCuad; q = q+1){
    var disQCentro =  dist(cuadrados[q].x, cuadrados[q].y, circ[i].x, circ[i].y);
    
    if(disQCentro < 40){
      circ[i].morir();
    }
  }
 

if (numcirc > 300){
  for (var t = 0 ; t < numfinalC; t = t+1){
    var distCentro =  dist(finalC[t].x, finalC[t].y, circ[i].x, circ[i].y);
    
    if(distCentro < 80){
      circ[i].morir();
    }
  }
}
}

}


// familia Circulos

function Circulos(){
  this.x = random(0,width);
  this.y = random(0,height);
  this.tamano = 20;
  this.viva = true;
  
  this.dibujarse = function(){
    if(this.viva == true){
      fill(255);
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
  
  this.dibujarse = function(){
    fill(100,150,50);
    triangle(this.x, this.y, this.x- this.tamano, this.y - (this.tamano/2), this.x - this.tamano, this.y + (this.tamano/2));
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
}



// familia Reproductor
function Reproductor (){
  this.x = random(0,width);
  this.y = random(0,height);
  this.dirX =  1;
  this.dirY =  1;
  this.tamano = 40;
  
  
   this.dibujarse = function(){
    fill(200,150,50);
    triangle(this.x, this.y, this.x + this.tamano, this.y - (this.tamano/2), this.x + this.tamano, this.y + (this.tamano/2));
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
}

// familia Bloque
function Bloque (){
  this.x = random(0,width);
  this.y = random(0,height);
  this.dirX =  1;
  this.dirY =  1;
  this.tamano = 40;
  
  
   this.dibujarse = function(){
    fill(200,0,0);
    rect(this.x, this.y, 40, 40);
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
}

// familia Bomba
function Bomba (){
  this.x = random(0,width);
  this.y = 0;
  this.dirX =  1;
  this.dirY =  1;
  this.tamano = 100;
  
  
   this.dibujarse = function(){
    fill(0,0,200);
    ellipse(this.x, this.y, this.tamano, this.tamano);
  }
  
  this.moverse = function (){
    if (this.x >= width || this.x <= 0){
    this.dirX = -this.dirX;
  
    }
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
    
    }

    this.x = this.x + (this.dirX*random(0, 5));
    this.y = this.y + (this.dirY*random(0, 5));
  }
}