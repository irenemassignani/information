let xMax = 400;
let yMax = 600;

let xRazzo = xMax/2;
let yRazzo = yMax*0.6;



function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(20, 24, 40);
  //mostrare un testo di colore bianco che dice le coordinate del mouse sul foglio
  fill(255); //bianco
  textSize(20);
  //stringa, x,y
  text("mouseX: " + mouseX + ", mouseY: " + mouseY,20,20);
  
  //contesto di disegno
  
  
  //disegnare 120 stelle ellipse
  push();

  //for(let i=0; i < 40; i++){
    //let starX =(i*37) % width +(i%3) * 5;
    //let starY = ((i*73) % height) + (i%7);
    //fill(255, 255, 150);
    //ellipse(starX,starY,5);}
  noStroke();

  //for(let i=0; i < 120; i++){
    //let starX =(i*37) % width +(i%3) * 5;
    //let starY = ((i*73) % height) + (i%7);
    //operatore di modulo %
    //stella a quando i è pari
    //if(i % 2 ==0){
      //stella tipo a
    //fill(255, 255, 150);
    //ellipse(starX,starY,1);
    //per ogni i che è divisibile per 3
    //}else if(i % 3 ==0){
      //stella b
    //fill(200, 100, 255);
    //ellipse(starX,starY,1.5);
    //}else{
      //stella c
    //fill(255, 255, 100);
    //ellipse(starX,starY,2.8);
    //}
  //}
    
    
 frameRate();
  for(let i=0; i < 120; i++){
    let starX = random (0, xMax);
    let starY = random (0, yMax);
    //operatore di modulo %
    //stella a quando i è pari
    if(i % 2 ==0){
      //stella tipo a
    fill(255, 255, 150);
    ellipse(starX,starY,1);
    //per ogni i che è divisibile per 3
    }else if(i % 3 ==0){
      //stella b
    fill(200, 100, 255);
    ellipse(starX,starY,1.5);
    }else{
      //stella c
    fill(255, 255, 100);
    ellipse(starX,starY,2.8);
    }
  }
  

  pop();

  push();
  fill(200);
  stroke(40);
  //alternativa di disegno
  rectMode(CENTER);
  rect(xRazzo, yRazzo+30, 80, 180,20);
  
  //cerchio
  fill(40, 150, 220);
  stroke(225);
  strokeWeight(3);
  ellipse(xRazzo, yRazzo+30, 48, 48);
  //circle( 250, 250, 30, 30)

  //triangolo
  fill(200, 40,40);
  stroke(40);
  strokeWeight(1);
  triangle(xRazzo-40, yRazzo-60, xRazzo+40, yRazzo-60, xRazzo, yRazzo-120);

  fill(200, 40,40);
  triangle(xRazzo-40, yRazzo+100, xRazzo-60, yRazzo+100, xRazzo-40, yRazzo+10);
  triangle(xRazzo+40, yRazzo+100, xRazzo+60, yRazzo+100, xRazzo+40, yRazzo+10);

  //finire il contesto
  pop();

  yRazzo = yRazzo -1;
  //quando la yrazzo sarà oltre una certa soglia allora resettare la yrazzo
  let soglia = - (yMax*0.6);
  if(yRazzo < soglia){
    yRazzo = yMax;
  }
}



