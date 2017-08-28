function setup() { 
  createCanvas(1060, 380);
  background(208,204,192);

// circulo amarillo
  fill(148,146,168,150)
  noStroke()
  ellipse(100,150,140,140)
  fill(106,150,170,100)
  noStroke()
  ellipse(100,150,110,110)
  fill(255)
  noStroke()
  ellipse(100,150,80,80)
  
  fill(215,186,54)
  stroke(0)
  ellipse(100,150,80,80)
  
  // cuadrado rojo
  fill(131,14,32)
  strokeWeight(3)
  stroke(0)
  rect(995,315,40,40)
  
  strokeWeight(2)
  line(1015,330,1050,330)
  
  strokeWeight(3)
  line(1015,335,1050,335)

// triangulo amarillo
  strokeWeight(1)
  stroke(0,100)
  beginShape()
  fill(199,168,67,200)
  vertex(915,130)
  vertex(960, 270)
  vertex(835,245)
  vertex(915,130)
  endShape(CLOSE)
  
  fill(111,121,110,200)
  ellipse(945,280,122,122)
  
  
  // circulo azul
  fill(215,186,54,90)
  noStroke()
  ellipse(400,295,120,120)
  fill(230,178,150,150)
  stroke(0,20)
  ellipse(395,290,100,100)
  fill(255)
  noStroke()
  ellipse(392,285,75,75)
  
  fill(40,93,138,220)
  stroke(0)
  ellipse(392,285,75,75)
  
  strokeWeight(1)
  line(250,370,430,220)
  
   strokeWeight(2)
  line(200,330,460,170)
  
// lineas arriba C.A
  
   strokeWeight(1)
  line(430,215,560,215)
  
    strokeWeight(1)
  line(433,240,565,240)
  
//circulo morado
  fill(120,92,160,200)
  ellipse(780,230,60,60)
  
  
  strokeWeight(1)
  line(740,230,890,230)
  
  strokeWeight(1.3)
  line(760,310,910,310)
  
// lineas esquina derecha
  
  strokeWeight(2)
  line(870,0,1100,350)
  
  beginShape()
  strokeWeight(2)
  fill(131,80,27)
  vertex(890,0)
  vertex(950,90)
  vertex(895,0)
  endShape(close)
  
  beginShape()
  strokeWeight(1)
  fill(131,80,27)
  vertex(910,0)
  vertex(925,25)
  vertex(913,0)
  endShape(close)
  
  beginShape()
  strokeWeight(1)
  fill(131,80,27)
  vertex(960,0)
  vertex(970,15)
  vertex(962,0)
  endShape(close)
  
// semi circulos blancos
  noFill()
  stroke(0)
  strokeWeight(5)
  ellipse(490,130,80,80)
  fill(255,230)
  stroke(130,126,146)
  strokeWeight(3)
  ellipse(490,130,80,80)
  
  noFill()
  stroke(0)
  strokeWeight(5)
  ellipse(575,130,80,80)
  fill(255,230)
  stroke(213,192,87)
  strokeWeight(3)
  ellipse(575,130,80,80)
  
  noFill()
  stroke(0)
  strokeWeight(5)
  ellipse(660,130,80,80)
  fill(255,230)
  stroke(181,41,35)
  strokeWeight(3)
  ellipse(660,130,80,80)
  
  noFill()
  stroke(0)
  strokeWeight(5)
  ellipse(745,130,80,80)
  fill(255,230)
  stroke(205,197,189)
  strokeWeight(3)
  ellipse(745,130,80,80)
  
  noStroke()
  fill(208,204,192)
  rect(440,130,400,50)
  
  stroke(0)
  strokeWeight(2)
  line(740,0,800,350)

  line(520,0,465,295)
  
  strokeWeight(4)
  line(730,0,950,280)

//semicirculos abajo
  
  noFill()
  stroke(208,175,172)
  strokeWeight(3)
  ellipse(540,170,80,80)

   noFill()
  stroke(0)
  strokeWeight(.5)
  ellipse(540,170,80,80)
  
    noFill()
  stroke(216,207,200)
  strokeWeight(3)
  ellipse(620,170,80,80)
  
  noFill()
  stroke(0)
  strokeWeight(.5)
  ellipse(620,170,80,80)
  
  noStroke()
  fill(208,204,192)
  rect(495,168,200,50)
  
  noFill()
  stroke(216,207,200)
  strokeWeight(5)
  ellipse(670,220,100,100)
  noFill()
  stroke(0)
  strokeWeight(.5)
  ellipse(670,220,100,100)
  
 noStroke()
  fill(208,204,192)
  rect(615,240,110,60)

  noFill()
  stroke(188,184,152)
  strokeWeight(5)
  ellipse(700,290,100,100)
    noFill()
  stroke(0)
  strokeWeight(.5)
  ellipse(700,290,100,100)
  
 noStroke()
  fill(208,204,192)
  rect(600,300,155,60)
  
// linea horizontal
  
  stroke(0)
  strokeWeight(2)
  line(300,130,915,130)
  
// lineas diagonales
   strokeWeight(1)
  line(700,0,600,180)
     strokeWeight(2)
  line(705,0,605,182)
     strokeWeight(1)
  line(710,0,610,184)
  
     strokeWeight(2)
  line(700,135,610,280)
     strokeWeight(2)
  line(705,135,615,280)
     strokeWeight(1)
  line(710,135,620,280)
  
// linea vertical
  strokeWeight(2)
  line(620,400,620,100)
  
  strokeWeight(15)
  stroke(183,190,103)
  line(760,0,770,15)
  
} 