let data

function preload() {
  data = loadJSON("./pose.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(0);
  for (let p of data.bodypoints){
    let x = p.x;
    let y = p.y;
    //circle(x, y, 2);
    textSize(5);
    //text(p.part, x, y);
  }
  fill(255)
  beginShape()
  vertex(data.bodypoints[5].x,data.bodypoints[5].y)
  vertex(data.bodypoints[11].x,data.bodypoints[11].y);
  vertex(data.bodypoints[13].x,data.bodypoints[13].y);
  vertex(data.bodypoints[15].x,data.bodypoints[15].y);
  vertex(data.bodypoints[16].x,data.bodypoints[16].y);
  vertex(data.bodypoints[14].x,data.bodypoints[14].y);
  vertex(data.bodypoints[12].x,data.bodypoints[12].y);
  vertex(data.bodypoints[6].x,data.bodypoints[6].y);
  vertex(data.bodypoints[5].x,data.bodypoints[5].y)
  endShape(CLOSE)

strokeWeight(2)
stroke(255)
line(data.bodypoints[8].x,data.bodypoints[8].y,data.bodypoints[10].x,data.bodypoints[10].y)
line(data.bodypoints[7].x,data.bodypoints[7].y,data.bodypoints[9].x,data.bodypoints[9].y)
push()
noStroke()
// beginShape()
// vertex(data.bodypoints[17].x,data.bodypoints[17].y)
// vertex(data.bodypoints[1].x,data.bodypoints[1].y);
// vertex(data.bodypoints[3].x,data.bodypoints[3].y);
// vertex(data.bodypoints[0].x,data.bodypoints[0].y);
// vertex(data.bodypoints[4].x,data.bodypoints[4].y);
// vertex(data.bodypoints[2].x,data.bodypoints[2].y);
// vertex(data.bodypoints[17].x,data.bodypoints[17].y)
// endShape(CLOSE)
fill(240, 213, 192)
ellipse(305,95,30)
ellipse(238,224,20)
ellipse(428,157,20)
fill(255)
ellipse(203,262,5)
ellipse(483,179,5)
pop()

}
function mousePressed() {
	console.info("Mouse posiiton:");
	console.info([mouseX, mouseY]);
}