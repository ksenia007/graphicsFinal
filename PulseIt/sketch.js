var yoff = 0.0;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  var xoff = yoff; 

  for (var lines = 0; lines < 100; lines+=5) {
    beginShape();
    // Iterate over horizontal pixels
    for (var x = 0; x <= width; x+=4) {
      // Calculate a y value according to noise, map to height
      var y = map(noise(xoff, yoff), 0, 1, 150, 300);

      // Set the vertex, separate based on the lines count
      vertex(x, y+3*lines);
      // Increment x dimension for noise
      xoff += 1;
    }
    // increment y dimension for noise
    yoff += 0.0005;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }
}
