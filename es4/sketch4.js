// variabili globali
let tableA;
let tableB;
let tableC;

function preload(){
  tableA = loadTable("drone_alfa_data.csv", "csv", "header");
  tableB = loadTable("drone_bravo_data.csv", "csv", "header");
  tableC = loadTable("drone_charlie_data.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function draw() {
  background(0);

  fill(255);
  textSize(30);
  textStyle(BOLD);
  text("Confronto droni", 50, 30);

  let gHeight = height / 4; // altezza dinamica grafico

  drawLineGraph(tableA, tableB, tableC, "timestamp", "x_pos",40, 80, 80 + gHeight, "Tempo", "Posizione");

  drawLineGraph(tableA, tableB, tableC, "timestamp", "x_vel",40, 120 + gHeight, 120 + gHeight*2, "Tempo", "Velocità");

  drawLineGraph(tableA, tableB, tableC, "x_vel", "x_pos",40, 160 + gHeight*2, 160 + gHeight*3, "Velocità", "Posizione");

  drawLegend();
}

function drawLineGraph(tableA, tableB, tableC, colX, colY, xMin, yMin, yMaxGraph, labelX, labelY){
  
  stroke(255);
  line(xMin, yMaxGraph, width-40, yMaxGraph);
  line(xMin, yMaxGraph, xMin, yMin);

  noStroke();
  fill(255);
  textSize(30);
  text(labelX, width/2, yMaxGraph + 30);

  push();
  translate(xMin - 20, (yMin + yMaxGraph)/2);
  rotate(-HALF_PI);
  text(labelY, 0, 0);
  pop();

  drawOneLine(tableA, colX, colY, xMin, yMin, yMaxGraph, color(255,0,0));
  drawOneLine(tableB, colX, colY, xMin, yMin, yMaxGraph, color(0,255,0));
  drawOneLine(tableC, colX, colY, xMin, yMin, yMaxGraph, color(0,0,255));
}

function drawOneLine(table, colX, colY, xMin, yMin, yMaxGraph, col){

  let xValues = [];
  let yValues = [];

  for(let i=0; i < table.getRowCount(); i++){
    xValues.push(table.getNum(i, colX));
    yValues.push(table.getNum(i, colY));
  }

  let minX = min(xValues);
  let maxX = max(xValues);

  let minY = min(yValues);
  let maxY = max(yValues);

  noFill();
  stroke(col);
  beginShape();
  for(let i=0; i < xValues.length; i++){
    let xPos = map(xValues[i], minX, maxX, xMin, width-40);
    let yPos = map(yValues[i], minY, maxY, yMaxGraph, yMin);
    vertex(xPos, yPos);
  }
  endShape();
}

function drawLegend(){
  fill(255);
  noStroke();
  textSize(30);

  // Alfa rosso
  fill(255,0,0);
  rect(50, height - 130, 15, 15);
  fill(255);
  text("Drone Alfa", 70, height - 110);

  // Bravo verde
  fill(0,255,0);
  rect(50, height - 100, 15, 15);
  fill(255);
  text("Drone Bravo", 70, height - 80);

  // Charlie blu
  fill(0,0,255);
  rect(50, height - 70, 15, 15);
  fill(255);
  text("Drone Charlie", 70, height - 50);
}
