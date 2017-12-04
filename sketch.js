// monos
var mono = [];
var numMono = 1;

// bananos
var ban = [];
var numBanInicial = 20;
var numBanFinal = 0;

// tomate
var tom = [];
var numTom = 10;

var estado = 0;

var INTRO = 1;
var INST = 2;
var JUEGO = 3;
var OUTRO = 4;
var FINAL = 5;

var img;

function preload() {

  //bananos image
  img = loadImage('Images/bananos.png');

  //mono image

  imgMono = loadImage('Images/monkey1.png');

  // tomate image
  imgtom = loadImage('Images/tomate1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  estado = INTRO;

  for (var i = 0; i < numBanInicial; i = i + 1) {
    ban[i] = new Bananos();

  }

  for (var i = 0; i < numMono; i = i + 1) {
    mono[i] = new Monito();

  }

  for (var i = 0; i < numTom; i = i + 1) {
    tom[i] = new Tomaton();
  }

}

function draw() {
  background(255);


  if (estado == INTRO) {
    tint(255, 100);
    imageMode(CENTER);
    image(img, windowWidth / 2, windowHeight / 2);
    stroke(0);
    strokeWeight(5);
    fill(255, 244, 0);
    textAlign(CENTER);
    textSize(60);
    text("HUNGRY MONKEY", width / 2, height / 2);


  } else if (estado == INST) {
    tint(255, 100);
    imageMode(CENTER);
    image(img, windowWidth / 2, windowHeight / 2);
    stroke(0);
    fill(255, 244, 0);
    textAlign(CENTER);
    textSize(60);
    text("INSTRUCCIONES", width / 2, height / 3);
    fill(0)
    strokeWeight(2);
    textSize(30);
    text("1) Par ganar comete todos los bananos", width / 2, height / 3 + 50);
    text("2) Evita el ataque de los tomates", width / 2, height / 3 + 90);
    text("dandole click a la pantalla", width / 2, height / 3 + 120);

  } else if (estado == OUTRO) {
    tint(255, 100);
    imageMode(CENTER);
    image(img, windowWidth / 2, windowHeight / 2);
    stroke(0);
    fill(255, 244, 0);
    textAlign(CENTER);
    textSize(60);
    text("Perdiste :'(", width / 2, height / 2);

  } else if (estado == FINAL) {
    tint(255, 100);
    imageMode(CENTER);
    image(img, windowWidth / 2, windowHeight / 2);
    stroke(0);
    fill(255, 244, 0);
    textAlign(CENTER);
    textSize(60);
    text("Ganaste!!", width / 2, height / 2);

  } else if (estado == JUEGO) {
    background(255);
    noTint();

    for (var i = 0; i < numBanInicial; i = i + 1) {
      ban[i].dibujarse();
      ban[i].moverse();

      for (var j = 0; j < numMono; j = j + 1) {

        if (dist(mono[j].x, mono[j].y, ban[i].x, ban[i].y) < 50) {

          ban[i].morir();
          numBanFinal = numBanFinal +1;
        }
      }
    }

    for (var t = 0; t < numTom; t = t + 1) {
      tom[t].dibujarse();
      tom[t].moverse();


      for (var i = 0; i < touches.length; i++) {
        if (dist(touches[i].x, touches[i].y, tom[t].x, tom[t].y) < 50) {
          tom[t].morir();

        }
      }
    }


    for (var i = 0; i < numMono; i = i + 1) {
      mono[i].dibujarse();
      mono[i].moverse();

      for (var q = 0; q < numTom; q = q + 1) {
        if (dist(mono[i].x, mono[i].y, tom[q].x, tom[q].y) < 20) {
          estado = OUTRO;

        }
      }
    }

      if (numBanFinal == numBanInicial) {
        estado = FINAL;
      }
  }
}



function touchEnded() {
  if (estado == INTRO) {
    estado = INST;
  } else if (estado == INST) {
    estado = JUEGO;
  }

  return false;

}


// familia Bananos

function Bananos() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = windowWidth / 23;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      image(img, this.x, this.y, this.tamano, this.tamano);

    }
  }
  this.moverse = function() {
    this.x = constrain(this.x, this.tamano / 2, width - this.tamano / 2);
    this.y = constrain(this.y, this.tamano / 2, height - this.tamano / 2);
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  this.morir = function() {
    this.viva = false;
    this.x = -2000;
    this.y = -2000;
  }
}

// familia Monos

function Monito() {
  this.x = width / 2;
  this.y = height / 2;
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = windowWidth / 12;
  this.velx = 0;
  this.vely = 0;



  this.dibujarse = function() {
    image(imgMono, this.x, this.y, this.tamano, this.tamano);
  }

  this.moverse = function() {

    this.x = this.x + this.velx;
    this.y = this.y + this.vely;


    this.vely = map(rotationX, -90, 90, -8, 8);

    this.velx = map(rotationY, -90, 90, -8, 8);


    this.x = constrain(this.x, this.tamano / 2, width - this.tamano / 2);
    this.y = constrain(this.y, this.tamano / 2, height - this.tamano / 2);

  }
}

// familia Tomates
function Tomaton() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = windowWidth / 15
  this.viva = true;


  this.dibujarse = function() {
    if (this.viva == true) {
      image(imgtom, this.x, this.y, this.tamano, this.tamano);
    }

    this.moverse = function() {
      if (this.x >= width || this.x <= 0) {
        this.dirX = -this.dirX;

      }
      if (this.y >= height || this.y <= 0) {
        this.dirY = -this.dirY;

      }

      this.x = this.x + (this.dirX * random(0, 6));
      this.y = this.y + (this.dirY * random(0, 6));
    }
  }

  this.morir = function() {
    this.viva = false;
    this.x = -2000;
    this.y = -2000;
  }
}