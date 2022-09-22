let x = 200;
let y = 50;
let speed = 5;
let d = 25;
let a = 5;
let b = 5;
let k = 2;
let q = 2;
let m;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;
  if (keyIsDown(UP_ARROW)) y -= 5;
  fill(140, 245, 120);
  ellipse(x, y, 50, 50);
  borderCheck1();
  fill(200, 12, 46);
  circle(k, q, 50);
  k += a;
  q += b;
  bordercheck2();
  collision();
}

function borderCheck1() {
  if (k + d / 2 >= width) {
    a = -speed;
    b = 1;
  }
  if (k - d / 2 <= 0) {
    a = speed;
    b = 5;
  }
  if (q + d / 2 >= height) {
    a = 2;
    b = -speed;
  }
  if (q - d / 2 < 0) {
    a = 3;
    b = speed;
  }
}
function bordercheck2() {
  if (x + d / 2 >= width) {
    x = width - d / 2;
  }
  if (x - d / 2 <= 0) {
    x = width + d / 2;
  }
  if (y + d / 2 >= height) {
    y = height - d / 2;
  }
  if (y - d / 2 < 0) {
    y = height - d / 2;
  }
}
function collision() {
  m = dist(x, y, k, q);
  if (m < d / 2);
}
