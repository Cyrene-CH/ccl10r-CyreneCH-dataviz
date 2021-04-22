let data

function preload() {
  data = loadJSON("./pose.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //angleMode(DEGREES)
}

function draw() {
  background(0);
  fill(0);
  for (let p of data.bodypoints){
    let c=p.x
    let d=p.y
    let x0 = data.bodypoints[9].x;
    let y0= data.bodypoints[9].y;
    let x1 = data.bodypoints[10].x
    let y1 = data.bodypoints[10].y
    let x3=data.bodypoints[7].x
    let y3=data.bodypoints[7].y
    let x4=data.bodypoints[8].x
    let y4=data.bodypoints[8].y
    

    let r=dist(x1, y1, x4, y4)
    let angle = atan2(y1 - y4, x1 - x4);
    angle += 0.9 * sin(frameCount / 15);
	x1 = x4 + r * cos(angle);
	y1 = y4 + r * sin(angle);
  line(x1, y1, x4, y4)

    circle(x1,y1,2)
  
  
    push()
    fill(240, 213, 192)
    noStroke()
    let ag=0
ag=ag+sin(frameCount /15)
let i=x4+12*cos(ag)
let j=y4+12*sin(ag)
    circle(i-10,j-1,20)
    pop()


    let r2=dist(x0, y0, x3, y3)
    let angle2 = atan2(y0 - y3, x0- x3);
    angle2 += 1.1 * sin(frameCount / 10);
	x0 = x3 + r2 * cos(angle2);
	y0 = y3+ r2 * sin(angle2);
  line(x0, y0, x3, y3)    
  circle(x0, y0, 2);
    push()
    fill(240, 213, 192)
    noStroke()
    let ag2=0
ag2=ag2+sin(frameCount /10)
let g=x3+12*cos(ag2)
let f=y3+12*sin(ag2)
    circle(g-10,f,20)
    pop()
    // textSize(5); 
    // text(p.part, c,d);
  }
  fill(255)
  beginShape()
  vertex(data.bodypoints[6].x,data.bodypoints[6].y);
  vertex(data.bodypoints[11].x,data.bodypoints[11].y);
  vertex(data.bodypoints[13].x,data.bodypoints[13].y);
  vertex(data.bodypoints[15].x,data.bodypoints[15].y);
  vertex(data.bodypoints[16].x,data.bodypoints[16].y);
  vertex(data.bodypoints[14].x,data.bodypoints[14].y);
  vertex(data.bodypoints[12].x,data.bodypoints[12].y);
  vertex(data.bodypoints[6].x,data.bodypoints[6].y);

  endShape(CLOSE)

  beginShape()
  vertex(data.bodypoints[5].x,data.bodypoints[5].y)
  vertex(data.bodypoints[11].x,data.bodypoints[11].y)
  vertex(data.bodypoints[12].x,data.bodypoints[12].y)
  vertex(data.bodypoints[5].x,data.bodypoints[5].y)
  endShape(CLOSE)

strokeWeight(2)
stroke(255)
push()
noStroke()

fill(240, 213, 192)
ellipse(305,95,40)
fill("red")
ellipse(299,102,9)
pop()

}
function mousePressed() {
	console.info("Mouse posiiton:");
	console.info([mouseX, mouseY]);
}