function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)

  if(mouseX<250){
  circle (200,200,100)
  fill(0,255,0);

  }
  if(mouseX>250){
  square (175,175,100)
  fill(200,0,39);

  if(mouseY<200){
    triangle(200,150,250,250,150,250)
    fill(0,037);
  }
}
}


