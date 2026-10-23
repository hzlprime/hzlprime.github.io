let col

function setup() {
  createCanvas(windowWidth,windowHeight)
  noStroke()
  
  background(0)
  colorMode(HSB)
  col = color(random(25,150),100,100)
}

function draw() {

  let x = 600 * noise(0.005 * frameCount);
  let y = 600 * noise(0.005 * frameCount + 1000);
  fill(col)
  circle(x,y,20);
}

function keyReleased(){
  col=color(random(25,255),50,100)
}