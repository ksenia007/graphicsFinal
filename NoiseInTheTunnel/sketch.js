/*
NOTE:
Inspired by Jacob Joaquin "Solar Flare" Processing 3.3 code:
https://gist.github.com/jacobjoaquin/615a11ed2e8d2ff704a368e692d74ce0
*/

//variables for the 
var xOffset = 0;       // Perlin x-offset
var yOffset = 0;       // Perlin y-offset
var offsetInc = 0.007; // Perlin offset increment
var inc = 5;           // Perin increment
var s = 1;             // Start size of perlin ring

var col=255;           // color control for the formation
var cnv;

function setup() {
  cnv=createCanvas(700, 700);
  background(255);
  frameRate(20);
  noFill();
}

function draw() {
    // translate the shape to the middle
  translate(width * 0.5, height * 0.5);

  // Create a series of perlin rings 
  for (var nTimes = 0; nTimes < 5; nTimes++) {
    // points in the ring
    nPoints = 200;
    // Create ring
    beginShape();
    for (var i = 0; i < nPoints; i++) {
      // note - TAU is 2 PI
      var a = i / nPoints * TAU; //offset angle
      var p = p5.Vector.fromAngle(i / nPoints * TAU); //form a vector
      var n = noise(xOffset + p.x * inc, yOffset + p.y * inc) * s; //length
      p.mult(n);
      vertex(p.x, p.y);
    }
    endShape(CLOSE);

    // Increment perlin offset for next ring
    xOffset += offsetInc;
    yOffset += offsetInc;
    nPoints += 50;
    s += 1;
    //set the color
    stroke(col);
    col -= 0.25;
  }

  if (s > 3000) {
    //reset the animation to the start
    background(255);
    xOffset = 0;       // Perlin x-offset
    yOffset = 0;       // Perlin y-offset
    offsetInc = 0.007; // Perlin offset increment
    inc = 5;           // Perin increment
    s = 1;             // Start size of perlin ring
    m = 1.005;         // Size multiplier
    col=255;
    //save canvas
    //save(cnv, "myCanvas.jpg");
  }
}