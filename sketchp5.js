function setup() {
  createCanvas(windowWidth,windowHeight)
  noFill()
  stroke(255)
  background(0)
}

function draw() {
  background(220);

  // Calculate the coordinates.
  // A noise value is always between 0 and 1

  /* We can write it both ways:
  
  let x = noise(0.005 * frameCount);
  x = map(x,0,1,0,600)
  
  or:
  
  let y = 600 * noise(0.005 * frameCount); */

  let x = 600 * noise(0.005 * frameCount);
  let y = 600 * noise(0.005 * frameCount + 10000);
  // we add 10000 to give a little offset value to y, otherwise the circle would move moves f(x)=x function.
  // Because the noise is a pre-generated range!!! not like random.

  // Draw the point.
  circle(x,y,50);
}