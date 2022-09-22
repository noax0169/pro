let x;
let justHitRightWall;
let xspeed = 3;
let y;
let yspeed = 3;

function setup() { 
  createCanvas(400, 400);
  y = width / 2;
} 

function draw() { 
  background(220);
  
  /* if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  } */
  if(y > -25 + height || y < 0 + 25 ){
yspeed *= -1;
  }
 
  //Move
  y += yspeed;
  ellipse(width/2, y, 50, 50);
}
