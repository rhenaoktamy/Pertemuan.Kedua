let j;
function setup() {
  // put setup code here
createCanvas(400,400);
j=0;
}

function draw() {
  // put drawing code here
  strokeWeight(5)
  stroke(0,128,0)
  background(200);
  
  point(350,190)
  line(100,100,200,200)
  line(100,100,50,150)
  line(100,100,150,150)
line(0,200,400,200)

  strokeWeight(4)
  stroke(0,0,0)
  fill(191,0,255)
  rect(150,20,20,100) 
  fill(255,20,147)
  ellipse(150,120,20,50)

  strokeWeight(2)
  fill(0,0,255)
  triangle(20,20,40,40,60,20)
  fill(255,255,0)
  arc(70,50,40,40, radians(0), radians(270))

  
  
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(250,50)
  vertex(200,100)
  vertex(300,50)
  endShape();

  for (var i=0; i<=400; i++){
    x = i
    y = 300 + 30*Math.sin(PI*x/50)
    point(x,y)
  }
  j+=1
  var y = 220 + 20*Math.sin(PI*j/50)
  var r = 50 + 20*Math.sin(PI*j/50)
  ellipse(350,y,r,r)
}