function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable mon for en type?
  if ((key == 'a') || (key == 'A')) { line(30, 100, 60, 20), 
line(60,20,90,100),
line(45,60,75,60);}

  if ((key == 'v') || (key == 'V')) { line(60, 100, 90, 30),
line(30,30,60,100); } 
 }
/*
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
*/
}