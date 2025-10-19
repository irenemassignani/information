let xmax = 600;
let ymax = 600;

let xcar = 0;
let ycar = 340;
let angle = 0;

let xnuvola1 = 100;
let xnuvola2 = 400;

function setup() {
  createCanvas(xmax, ymax);
  frameRate(30);
}

function draw() {
  background(100, 100, 200);
  noStroke();
  fill(255);
  textSize(20);
  text("mouseX: " + mouseX + ", mouseY: " + mouseY, 20, 20);

  paesaggio();
  nuvole();
  drawcar1();
  alberi();
  movimentocar();
}

function drawcar1() {
  // carrozzeria
  fill(255, 0, 0);
  noStroke();
  arc(xcar + 60, ycar + 2, 100, 100, PI, 0, PIE);
  rect(xcar, ycar, 150, 50, 20);

  // ruote che girano
  push();
  translate(xcar + 20, ycar + 50);
  rotate(angle);
  fill(50);
  ellipse(0, 0, 40, 40);
  stroke(255);
  ellipse(0, 0, 20, 0);
  pop();

  push();
  translate(xcar + 120, ycar + 50);
  rotate(angle);
  fill(50);
  ellipse(0, 0, 40, 40);
  stroke(255);
  ellipse(0, 0, 20, 0);
  pop();

  // finestrini
  noStroke();
  fill(100, 200, 255);
  arc(xcar + 55, ycar + 2, 70, 70, PI, 3 * PI / 2, PIE);
  arc(xcar + 65, ycar + 2, 70, 70, 3 * PI / 2, 0, PIE);
}

function alberi() {
  
  function disegnaAlbero() {
     fill(120, 70, 20);
    rect(-10, 0, 20, 80); // tronco

    fill(0, 150, 0);
    triangle(-60, 0, 0, -90, 60, 0);

    fill(0, 170, 0);
    triangle(-50, -30, 0, -110, 50, -30);

    fill(0, 190, 0);
    triangle(-40, -60, 0, -130, 40, -60);
  }

  push();
  translate(110, 440);
  scale(1);
  disegnaAlbero();
  pop();

  push();
  translate(200, 450);
  scale(0.9);
  disegnaAlbero();
  pop();

  push();
  translate(500, 430);
  scale(1.2);
  disegnaAlbero();
  pop();

  push();
  translate(550, 420);
  scale(0.8);
  disegnaAlbero();
  pop();

  push();
  translate(50, 430);
  scale(0.7);
  disegnaAlbero();
  pop();
}

function nuvole() {
  function disegnaNuvola() {
    noStroke();
    fill(255);
    ellipse(0, 0, 60, 40);
    ellipse(25, 0, 50, 35);
    ellipse(-25, 0, 50, 35);
  }

  push();
  translate(xnuvola1, 100);
  scale(1.2);
  disegnaNuvola();
  pop();

  push();
  translate(xnuvola2, 150);
  scale(0.8);
  disegnaNuvola();
  pop();

  xnuvola1 += 0.3;
  xnuvola2 += 0.2;

  if (xnuvola1 > width + 50) xnuvola1 = -50;
  if (xnuvola2 > width + 50) xnuvola2 = -50;
}

function paesaggio() {
  // montagne
  push();
  fill(180, 180, 180, 180);
  triangle(100, 400, 350, 180, 600, 400);

  fill(120, 120, 120);
  triangle(-100, 400, 200, 100, 500, 400);

  fill(150, 150, 150);
  triangle(300, 400, 550, 150, 750, 400);
  pop();

  // suolo e strada
  fill(100, 400, 100);
  rect(0, 400, 600, 200);

  fill(100, 100, 100);
  rect(0, 400, 600, 50);

  fill(255);
  for (let i = 0; i < 6; i++) {
    rect(i * 100, 415, 50, 10);
  }
}

function movimentocar() {
  xcar += 3;
  if (xcar > width) {
    xcar = -110;
  }
  angle += 0.1;
}
