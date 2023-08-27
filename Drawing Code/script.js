var s = 10;
var r, g, b, a;
r = g = b = 0;
a = 255;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	textFont("Helvetica");
	textSize(s);
	var c = color(r, g, b, a);
	fill(c);
	if (mouseIsPressed) {
		text('code', mouseX, mouseY);
	}
}

function keyPressed () {
	// if r is pressed, color is red
	if (keyCode === 82) {
		r = 255; g = b = 0;
	} 
	// if g is pressed, color is green
	if (keyCode === 71) {
		r = 0; g = 255;  b = 0;
	} 
	// if b is pressed, color is blue
	if (keyCode === 66) {
		r = 0; g = 0;  b = 255;
	}
	// if c is pressed, color is cyan
	else if (keyCode === 67) {
		r = 0; g = 255;  b = 255;
	}
	// if m is pressed, color is magenta
	else if (keyCode === 77) {
		r = 255; g = 0;  b = 255;
	}
	// if y is pressed, color is yellow
	else if (keyCode === 89) {
		r = 255; g = 255;  b = 0;
	}
	// if k is pressed, color is black
	else if (keyCode === 75) {
		r = 0; g = 0;  b = 0;
	}
	// if space is pressed, color is white
	else if (keyCode === 32) {
		r = 255; g = 255;  b = 255;
	}
	// if right key is pressed, type size is increased
	else if (keyCode === RIGHT_ARROW) {
		s = s + 4;
	}
	// if left key is pressed, type size is decreased
	else if (keyCode === LEFT_ARROW) {
		s = s - 4;
	}
	// if return is pressed, refresh screen
	else if (keyCode === RETURN) {
		createCanvas(windowWidth, windowHeight);
		background(255);
	}
	
	for(var i = 1; i < 10; i ++) {
	// number key matches opacity percentage
		if (keyCode === 48+i) {
			a = 255*(i/10);
		} else if(keyCode === 48) {
			a = 255;
		}
	} 

	
			
}