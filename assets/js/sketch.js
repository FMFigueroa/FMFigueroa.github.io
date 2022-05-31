

function setup() {
  // put setup code here
  var canvas = createCanvas(360, 350, WEBGL);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  const theme = localStorage.getItem('selected-theme')
  if (theme === 'dark') {
    background(30);
  } else {
    background(255);
  }

  rotateX(60);
  noFill();
  stroke(255);

  for (let i = 0; i < 50; i++) {

    const r = map(sin(frameCount / 2), -1, 1, 100, 200);
    const g = map(i, 0, 50, 100, 200);
    const b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);

    beginShape()
    for (let j = 0; j < 360; j += 60) {
      let rad = i * 3; // radius
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 5 + i * 5) * 50;

      vertex(x, y, z);

    }
    endShape(CLOSE);

  }

}
