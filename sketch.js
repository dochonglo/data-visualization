function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(180);
  translate(200, 200);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(0);
  stroke(255, 100, 150);
  //noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);
  
  strokeWeight(4);
  stroke(219, 219, 219); 
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, end2);
  
  strokeWeight(8);
  stroke(206, 10, 36);
  let end3 = map(hr%12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);
  
}