let x = 100;
let y = 100;
let f = 100;
let g = 100;
function setup() {
  createCanvas(600, 600);
  fill(255, 0, 0);
}
function draw() {
  background(150);
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;
  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;
  ellipse(x, y, 50, 50);
  if (keyIsDown("w")) g -= 5;
  if (keyIsDown("s")) g += 5;
  if (keyIsDown("a")) f -= 5;
  if (keyIsDown("d")) f += 5;
  square(f, g, 50);
}
