var b1x = 20;
var by = 20;
var by2 = 440;
var btam = 40;
var btam2 = 460;

var b2x = 80;
var b3x = 140;
var b4x = 200;
var b5x = 260;
var b6x = 320;
var b7x = 380;
var b8x = 440;
var b9x = 500;
var b10x = 560;
var b11x = 620;

var colorsel = 01;
var herramienta = 0;

function setup() {
  createCanvas(680, 500);
  background(220);

}

//estrella
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}

function draw() {
  noStroke();

  // botones colores
  noStroke();
  fill(220);
  rect(0, 0, 680, 60);
  rect(620, 0, 60, 500);

  //boton negro
  fill(0);
  rect(b1x, by, btam, btam);

  //boton 2
  fill(33, 90, 99);
  rect(b2x, by, btam, btam);

  // boton 3
  fill(48, 132, 143);
  rect(b3x, by, btam, btam);

  //boton 4
  fill(53, 148, 162);
  rect(b4x, by, btam, btam);

  //boton 5
  fill(63, 172, 188);
  rect(b5x, by, btam, btam);

  //boton 6
  fill(92, 187, 201);
  rect(b6x, by, btam, btam);

  //boton 7
  fill(126, 201, 211);
  rect(b7x, by, btam, btam);

  //boton 8
  fill(152, 211, 220);
  rect(b8x, by, btam, btam);

  //boton 9
  fill(188, 227, 233);
  rect(b9x, by, btam, btam);

  //boton 10
  fill(222, 241, 243);
  rect(b10x, by, btam, btam);


  // botones herramientas

  noStroke();
  fill(220);
  rect(0, 440, 680, 60);

  //boton 
  stroke(0)
  fill(255);
  rect(b1x, by2, btam, btam);
  line(b1x, by2, b1x + btam, by2 + btam);

  //boton 2
  rect(b2x, by2, btam, btam);
  fill(0);
  ellipse(100, 460, 40, 20);

  // boton 3
  fill(255);
  rect(b3x, by2, btam, btam);
  line(b3x + btam, by2, b3x, by2 + btam);

  //boton 4
  rect(b4x, by2, btam, btam);
  fill(0)
  triangle(b4x, by2 + btam, b4x + btam, by2 + btam, b4x + 20, by2 + 2)

  //boton 5
  fill(255);
  rect(b5x, by2, btam, btam);

  //boton 6
  rect(b6x, by2, btam, btam);
  push();
  fill(0);
  translate(b6x + 20, by2 + 20);
  star(0, 0, 10, 20, 5);
  pop();

  //boton 7
  rect(b7x, by2, btam, btam);
  curve(b7x,by2,410,450,390,460,b7x+40,by2+40);

  //boton 8
  rect(b8x, by2, btam, btam);
  line(b8x, by2 + 20, b8x + 40, by2 + 20);

  //boton 9
  rect(b9x, by2, btam, btam);
  fill(0);
   arc(b9x+20,by2+20, 40, 40, 0, PI + HALF_PI, PIE);

  //boton 10
  fill(255);
  rect(b10x, by2, btam, btam);
  fill(0);
  
  //botton borrar
  noStroke();
  fill(255);
  rect(b11x, by, btam, btam2);


  if (mouseIsPressed) {


    //b1
    if (mouseX > b1x && mouseX < b1x + btam && mouseY > by && mouseY < by + btam) {

      colorsel = 1;
    }


    //b2
    if (mouseX > b2x && mouseX < b2x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 2;
    }

    //b3
    if (mouseX > b3x && mouseX < b3x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 3;
    }

    //b4
    if (mouseX > b4x && mouseX < b4x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 4;
    }

    //b5
    if (mouseX > b5x && mouseX < b5x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 5;
    }

    //b6
    if (mouseX > b6x && mouseX < b6x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 6;
    }

    //b7
    if (mouseX > b7x && mouseX < b7x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 7;
    }

    //b8
    if (mouseX > b8x && mouseX < b8x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 8;
    }

    //b9
    if (mouseX > b9x && mouseX < b9x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 9;
    }

    //b10
    if (mouseX > b10x && mouseX < b10x + btam && mouseY > by && mouseY < by + btam) {
      colorsel = 10;
    }



    //b11
    if (mouseX > b1x && mouseX < b1x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 1;
    }


    //b12
    if (mouseX > b2x && mouseX < b2x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 2;
    }


    //b13
    if (mouseX > b3x && mouseX < b3x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 3;
    }


    //b14
    if (mouseX > b4x && mouseX < b4x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 4;
    }


    //b15
    if (mouseX > b5x && mouseX < b5x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 5;
    }


    //b16
    if (mouseX > b6x && mouseX < b6x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 6;
    }


    //b17
    if (mouseX > b7x && mouseX < b7x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 7;
    }

    //b18
    if (mouseX > b8x && mouseX < b8x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 8;
    }


    //b19
    if (mouseX > b9x && mouseX < b9x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 9;
    }


    //b20
    if (mouseX > b10x && mouseX < b10x + btam && mouseY > by2 && mouseY < by2 + btam) {
      herramienta = 10;
    }

    //b21
    if (mouseX > b11x && mouseX < b11x + btam && mouseY > by && mouseY < by + btam2) {
      herramienta = 11;
    }


    //colores
    if (colorsel == 1) {
      fill(0);
      stroke(0);
    }
    if (colorsel == 2) {
      fill(33, 90, 99);
      stroke(33, 90, 99);
    }
    if (colorsel == 3) {
      fill(48, 132, 143);
      stroke(48, 132, 143);
    }
    if (colorsel == 4) {
      fill(53, 148, 162);
      stroke(53, 148, 162);
    }
    if (colorsel == 5) {
      fill(63, 172, 188);
      stroke(63, 172, 188);
    }
    if (colorsel == 6) {
      fill(92, 187, 201);
      stroke(92, 187, 201);
    }
    if (colorsel == 7) {
      fill(126, 201, 211);
      stroke(126, 201, 211);
    }
    if (colorsel == 8) {
      fill(152, 211, 220);
      stroke(152, 211, 220);
    }
    if (colorsel == 9) {
      fill(188, 227, 233);
      stroke(188, 227, 233);
    }
    if (colorsel == 10) {
      fill(222, 241, 243);
      stroke(222, 241, 243);
    }

    //herramientas

    if (herramienta == 1) {
      line(200, 200, mouseX, mouseY);
    }


    if (herramienta == 2) {
      ellipse(mouseX - 10, mouseY - 10, 50, 20);
    }

    if (herramienta == 3) {
      line(mouseY, mouseX, 300, 300);

    }

    if (herramienta == 4) {
      triangle(mouseX, mouseY, mouseX + 40, mouseY, mouseX + 20, mouseY - 40);
    }

    if (herramienta == 5) {
      translate(mouseX, mouseY);
      noStroke();
      for (var i = 0; i < 10; i++) {
        ellipse(0, 30, 20, 60);
        rotate(PI / 5);
      }
    }

    if (herramienta == 6) {
      push();
      translate(mouseX, mouseY);
      star(0, 0, 20, 40, 5);
      pop();
    }

    if (herramienta == 7) {
      noFill();
      for (var u = 0; u < 200; u += 50) {
        bezier(mouseX - (u / 2), mouseY + u, 300, 250, 350, 260, mouseX - (u / 8.0), mouseY + (u / 8.0));
      }
    }


    if (herramienta == 8) {
      line(mouseX, mouseY, mouseX + 30, mouseY);
    }

    if (herramienta == 9) {
      arc(mouseX, mouseY, 40, 40, 0, PI + HALF_PI, PIE);
    }


    if (herramienta == 10) {
      translate(mouseX, mouseY);
      for (var j = 0; j < 10; j++) {
        ellipse(0, 30, 5, 10);
        rotate(PI / 5);
      }
    }

    if (herramienta == 11) {
      noStroke();
      fill(220);
      rect(0, 60, 620, 380);
    }
  }

      //logoflor  
  
  translate(280, 460);
  noStroke();
  fill(0);
  for (var t = 0; t < 10; t++) {
    ellipse(0, 5, 8, 30);
    rotate(PI / 5);
  }
//     //logo puntos
  
//   translate(520, 460);
//   fill(0);
//   for (var j = 0; j < 10; j++) {
//     ellipse(0, 15, 5, 10);
//     rotate(PI / 5);
//   }



}