console.log("I believe I can do it!");

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255, 255, 60);
  fill(25);
  circle(100, 70, 20);
  fill(255, 120, 60);
  circle(100, 100, 50);
  fill(20);
  circle(110, 100, 10);
  circle(90, 100, 10);

  circle(110, 100 - 14, 10);
  circle(90, 100 - 14, 10);

  circle(110, 100 + 14, 10);
  circle(90, 100 + 14, 10);
}
