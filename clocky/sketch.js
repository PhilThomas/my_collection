function wheel(r, f) {
	let img = createGraphics(1000, 1000);
	img.translate(img.width/2, img.height/2);
	img.angleMode(DEGREES);
	//img.rotate(-90);
	img.background(0, 0);
	img.fill(255, 150, 0);
	img.smooth();
	img.noStroke();
	img.textSize(32);
	img.textFont('Papyrus');
	for (let i = 0; i < 60; i++) {
		img.text(nf(f(i), 2, 0), r, 0);
		img.rotate(360/60);
	}

	return img;
}

function wedge() {
		let img = createImage(1000, 1000);
		img.loadPixels();
		for (let x = 0; x < img.width; x++) {
			for (let y = 0; y < img.height; y++) {
				let theta = atan2(x-img.width/2, y-img.height/2);
				let alpha = pow(map(sin(-theta), -1, 1, 0, 1), 0.25) * 255;
				img.set(x, y, color(0, alpha));
			}
		}
		img.updatePixels();
		return img;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	img1 = wheel(420, function(i) { return i; });
	img2 = wheel(360, function(i) { return i; });
	img3 = wheel(300, function(i) { return (i % 12) == 0 ? 12 : (i % 12); });
	w = wedge();
}

function draw() {
	background(0);
	imageMode(CENTER);
	translate(width/2, height/2);
	scale(2);
	translate(-500, 0);

	push();
	rotate(-map(second(), 0, 60, 0, 360));
	image(img1, 0, 0);
	pop();

	push();
	rotate(-map(minute(), 0, 60, 0, 360));
	image(img2, 0, 0);
	pop();

	push();
	rotate(-map(hour() % 12, 0, 60, 0, 360));
	image(img3, 0, 0);
	pop();

	image(w, 0, 0);
}
