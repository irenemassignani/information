let xmax = 600;
let ymax= 600;

let xcar= 0;
let ycar= 340;

function setup() {
  createCanvas(xmax, ymax);
  frameRate(30);
}

function draw() {
  background(100, 100, 200);
  //mostrare un testo di colore bianco che dice le coordinate del mouse sul foglio
  fill(255); //bianco
  textSize(20);
  //stringa, x,y
  text("mouseX: " + mouseX + ", mouseY: " + mouseY,20,20);
  
  push();
  //montagne
  fill(180, 180, 180, 180);
  triangle(100, 400, 350, 180, 600, 400);

  fill(120, 120, 120);
  triangle(-100, 400, 200, 100, 500, 400);

  fill(150, 150, 150);
  triangle(300, 400, 550, 150, 750, 400);

  //suolo
  fill(100, 400, 100);
  rect(0, 400, 600, 200);
  fill(100, 100, 100);
  rect(0, 400, 600, 50);
  fill(255);
  for (let i = 0; i < 6; i++) {
    rect(i * 100, 415, 50, 10);
  }

   //macchina
    fill(1000, 10, 0);
    noStroke();
    arc(xcar+60, ycar+2, 100, 100, PI, 0, PIE);
	rect(xcar, ycar, 150, 50, 20);
	fill(50);
	ellipse(xcar+20, ycar +50, 40, 40);
	ellipse(xcar + 120, ycar +50, 40, 40);

  pop();
   
  push();
  //finestrini
  fill(100,200,700);
  arc(xcar+55, ycar+2, 70, 70, PI, 3 * PI / 2, PIE);
  arc(xcar + 65, ycar + 2, 70, 70, 3 * PI / 2, 0, PIE);
  
  //albero 1
  fill(120, 70, 20);
  rect(100, 410, 20, 80); 

  fill(0, 150, 0);
  triangle(50, 440, 110, 350, 170, 440);

  fill(0, 170, 0);
  triangle(60, 410, 110, 320, 160, 410);

  fill(0, 190, 0);
  triangle(70, 380, 110, 290, 150, 380);

  //albero 2
  fill(120, 70, 20);
  rect(180, 420, 20, 80);

  fill(0, 150, 0);
  triangle(130, 455, 190, 350, 250, 455);

  fill(0, 170, 0);
  triangle(140, 425, 190, 320, 240, 425);

  fill(0, 190, 0);
  triangle(150, 395, 190, 295, 230, 395);

   xcar += 3;
   if (xcar > width) {
    xcar = -110;
    }

  pop();
}