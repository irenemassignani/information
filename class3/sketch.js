//variabili globali 
let xMax = 400;
let yMax = 600;

let xRazzo = xMax/2;
let yRazzo = yMax*0.6;

let table;
let star_img;

let scaladibase = 1;
let tempo = 1;
let ruota2 = 1;

let stars_valid = [];

function filterstarsizes(star_value){;
  return star_value > 0; 
}

//creare asset prima che la pagina venga visualizzata
function preload(){
 table = loadTable("stars.csv", "csv", "header");
 star_img = loadImage("star.png");
}

function setup() {
  createCanvas(xMax, yMax);
  frameRate(30);

  for(let i=0; i < table.getRowCount(); i++){
    let stars_value = table.getNum(i, "starSize");
    if(filterstarsizes(stars_value)){
      stars_valid.push(stars_value);

    }
  }
}

function drawsinglestarfromfile(index, xMax, yMax) {
  let starsize = table.getNum(index, "starSize")
  image(star_img, xMax, yMax, starsize, starsize);
}

function drawstarsfromfile(){
  for(let k = 0; k < table.getRowCount(); k++){
    let starX = (k*37) % width + (k%3) * 5;
    let starY = (k*73) % height + (k%7);

    drawsinglestarfromfile(k, starX, starY);
  }
}


function drawsinglestar(i, starX, starY, random_transparency, random_size){
   if(i % 2 ==0){
      //stella tipo a
    fill(255, 255, 150,random_transparency);
    ellipse(starX,starY,random_size);
    //per ogni i che è divisibile per 3
    }else if(i % 3 ==0){
      //stella b
    fill(200, 100, 255, random_transparency);
    ellipse(starX,starY,random_size);
    }else{
      //stella c
    fill(255, 255, 100, random_transparency);
    ellipse(starX,starY,random_size);
    }
    
    return;
}

function drawstar(num_stars=120){
   for(let i=0; i < num_stars; i++){
    let starX = random (0, xMax);
    let starY = random (0, yMax);
    //operatore di modulo %
    //stella a quando i è pari
    
    random_transparency = random (150, 255);
    random_size = random (6.8, 15.0);

    drawsinglestar(i, starX, starY, random_transparency,random_size);
  }
}

 function drawrazzo(xRazzo, yRazzo, scalaB=1, ruota=30) {
  push();
  translate(xRazzo, yRazzo);
  rotate(ruota);
  translate(-xRazzo, -yRazzo);
  //scalare
  scale(scalaB);

  fill(200);
  stroke(40);
  //alternativa di disegno
  rectMode(CENTER);
  rect(0, 0+30, 80, 180,20);
  
  //cerchio
  fill(40, 150, 220);
  stroke(225);
  strokeWeight(3);
  ellipse(0, 30, 48, 48);
  //circle( 250, 250, 30, 30)

  //triangolo
  fill(200, 40,40);
  stroke(40);
  strokeWeight(1);
  triangle(0-40, 0-60, 0+40, 0-60, 0, 0-120);

  fill(200, 40,40);
  triangle(0-40, 0+100, 0-60, 0+100, 0-40, 0+10);
  triangle(0+40, 0+100, 0+60, 0+100, 0+40, +10);
  pop();
  return;
  }

  function volo(yRazzo, step=1){
  yRazzo = yRazzo - step;
  //quando la yrazzo sarà oltre una certa soglia allora resettare la yrazzo
  let soglia = - (yMax*0.6);
  if(yRazzo < soglia){
   yRazzo = yMax;
  }

  return yRazzo;
  }


function draw() {
  background(250);
  //mostrare un testo di colore bianco che dice le coordinate del mouse sul foglio
  fill(255); //bianco
  textSize(20);
  //stringa, x,y
  text("mouseX: " + mouseX + ", mouseY: " + mouseY,20,20);
  noStroke();
  frameRate(5); 
  image(star_img,50,50,min(stars_valid), min(stars_valid));
  image(star_img,100,100,max(stars_valid), max(stars_valid));
  //drawstarsfromfile();
  /*let variazionescala = scaladibase * Math.abs(sin(tempo));
  drawrazzo(xRazzo, yRazzo, variazionescala, ruota2);
  yRazzo = volo(yRazzo);
  tempo += 1;
  ruota2 +=1 */
}

/*function mousePressed(){
  //stop e go animazione tramite clic
  if(isLooping()){
  noLoop();
  }else{
    loop();
  }
} */
