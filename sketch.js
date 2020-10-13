
function setup() {
  noStroke();
}



function draw() {
  createCanvas(windowWidth, windowHeight);
  background("#5D5179");


//conditions to change the grid color
  if (mouseX > 0 && mouseX < windowWidth / 4 && mouseY < windowHeight / 2) {
    col = "#92C9B1"
  } else if (mouseX > windowWidth / 4 && mouseX < windowWidth / 2 && mouseY < windowHeight / 2) {
    col = "#FAF4D3"
  } else if (mouseX > windowWidth / 2 && mouseX < 3 / 4 * windowWidth && mouseY < windowHeight / 2) {
    col = "#D1AC00"
  } else if (mouseX > 3 / 4 * windowWidth && mouseX && mouseY < windowHeight / 2) {
    col = "#F6BE9A"
  } else if (mouseX > 0 && mouseX < windowWidth / 4 && mouseY > windowHeight / 2) {
    col = "#F6BE9A"
  } else if (mouseX > windowWidth / 4 && mouseX < windowWidth / 2 && mouseY > windowHeight / 2) {
    col = "#D1AC00"
  } else if (mouseX > windowWidth / 2 && mouseX < 3 / 4 * windowWidth && mouseY > windowHeight / 2) {
    col = "#FAF4D3"
  } else if (mouseX > 3 / 4 * windowWidth && mouseX && mouseY > windowHeight / 2) {
    col = "#92C9B1"
  } else {
    col = "HoneyDew"
  }

//function to draw the grid
  gridTexture(a = windowWidth / 8, b = windowHeight / 4, d = 7);
  gridTexture(a = windowWidth / 40, b = windowHeight / 20, d = 1);


  textSize(20);
  text("move your pointer!", 50, windowHeight - 50);


}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// function to create a grid of irregular lines, obtained by using ellipses

let iterator = 0.0;
let col = "HoneyDew";


function gridTexture(a, b, d) {
  fill(col);
  for (j = 0; j < windowHeight; j += a) {
    for (i = 0; i < windowWidth; i++) {
      iterator = iterator + 0.01;
      let l = 100 * noise(iterator);
      ellipse(i, j + l, d);
    }
  }

  for (n = 0; n < windowWidth; n += b) {
    for (m = 0; m < windowHeight; m++) {
      iterator = iterator + 0.01;
      let p = 100 * noise(iterator);
      ellipse(n + p, m, d);
    }
  }
}
