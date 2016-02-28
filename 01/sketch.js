var spinerino = 10;
var timer = 0;

function setup() {
  createCanvas(700, 700);
  background(0);
  rectMode(CENTER);
}

function draw() {
  push();
  translate(width/2, height/2);
  push();
  push();
  push();
  sun();

  pop();
  pop();
  pop();
  pop();
}

function sun() {
  rotate(radians(frameCount));
  fill(255);
  stroke(0);
  var sunSizeX = sin(frameCount)* 5;
  var sunSizeY = cos(frameCount)* 5;
  sunSizeX = -sin(timer * 0.01) * 200;
  sunSizeY = cos(timer * 0.01) * 200;
  timer = timer + 5;
  
  rect(0, 0, 100 + sunSizeX, 100 + sunSizeY);
    
    
    
    mars();
    earth();  
}
function earth() {
  var A = 0;
   while(A < 3) {
     var B = 0;
      while(B < 3) {
      translate(250, 0);
      rotate(radians(frameCount * 2));
      fill(255);
      stroke(0);
      strokeWeight(2);
      rect(0 + (A * 1 ), 0 + (B * 1), width/20, height/20);
      B++;
     }
     A++;
   } 

}

function mars() {
  var marSizeX = sin(frameCount)* 50;
  var marSizeY = -cos(frameCount)* 50;
  translate(300, 0);
  rotate(radians(frameCount * 2));
  fill(255);
  stroke(0);
  rect(0, 0, width/20 + marSizeX, height/20 + marSizeY);
}