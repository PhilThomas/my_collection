/*
var rows;
var cols;
const w = 1400;
const h = 1200;
const scl = 20;

function setup() {
	createCanvas(600, 600, WEBGL);
	rows = floor(w / scl);
	cols = floor(h / scl);
}

function draw() {
	translate(0, 50);
	rotateX(-PI/3);
	translate(-w/2, -h/2);

	background(0);

	fill(0);
	stroke(255);

	for (let y = 0; y < rows; y++) {
		beginShape(TRIANGLE_STRIP);
		for (let x = 0; x < cols; x++) {
			vertex(x*scl, y*scl, 100); //,     noise(x/100, y/100) * 50);
			vertex(x*scl, (y+1)*scl, 100); //, noise(x/100, (y+1)/100) * 50);
		}
		endShape();
	}
}
*/

/*
var cols, rows;
var scl = 20;
var w = 2000;
var h = 2000;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

  flying -= 0.25;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(0);
  translate(width/2, height/2+50);
  rotateX(PI/3);
	translate(-w/2, -h/2);
	push();
	colorMode(HSB);
	stroke(255);
	strokeWeight(1);
  for (var y = 0; y < rows-1; y++) {
		fill(255, 255, map(y, 0, rows-1, 0, 255), 25);
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
	pop();
}
*/

const amp = 300;
const speed = 1/50;
const smoothness = 1000;

function setup() {
	createCanvas(600, 600, WEBGL);
}

function draw() {
	background(0);

	fill(50, 255);
	stroke(255);
	strokeWeight(1);
	rotateX(PI/3);
	translate(0, 100);
	for (let y = -height/2; y <= height/2; y += 20) {
		beginShape(TRIANGLE_STRIP);
		for (let x = -width/2; x <= width/2; x += 20) {
			vertex(x, y, x*x/200 + map(noise(x/smoothness, y/smoothness - frameCount*speed), 0, 1, -amp, amp));
			vertex(x, y+20, x*x/200 + map(noise(x/smoothness, (y+20)/smoothness - frameCount*speed), 0, 1, -amp, amp));
		}
		endShape();
	}
}
