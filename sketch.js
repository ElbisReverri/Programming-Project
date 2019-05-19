var diam1=50; //this is the variable for diameter
var cc=50; //this is the variable for the text & shape fill
function setup() {
  createCanvas(700,700); //creates my canvas is constantly repeated
}

function draw() {
	background("#84b0f7"); //color for shape, background, and text
	fill(cc,150,200,200);
	stroke("#5e83a8"); //allows us to read our text and see our shape since they are the same color as the background
	strokeWeight(2);
	ellipse(mouseX,mouseY,diam1,diam1); //mouseX, mouseY allow the shape to follow cursor; we also see our first use of the diam1 variable
	textSize(50);
	textFont("Georgia");
	textStyle(ITALIC);
	textAlign(CENTER);
	text("issabluecircle",350,50) //my image name, it was a placeholder but now it holds the place forever
}

function mousePressed() {
	cc=cc + 50	//every click is +50 in the color wheel
	if (cc>300) { //if the color change get larger than 300 it will reset itself back to 0 allowing the process to restart
		cc=0
	}
	diam1=diam1 + 25 //every click makes the shape size +25
	if (diam1>300) { //if the shape is larger than 300px it will reset its size to 0 allowing the process to restart
		diam1=0
	}
	
}
