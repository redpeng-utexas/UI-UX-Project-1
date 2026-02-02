let canvas;
let bgimage;
let bgimageratio;
let alucardidle;
let altest;
let scaleratio;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight-60); //creates a canvas which conforms to the width and height of the website.
  background(220);
  bgimage = loadImage('/Images/Long Library 2.png');
  alucardidle = Image[1];
  for (i = 0; i > 0; i++){
    alucardidle[i] = loadImage('/Images/Alucard Idle/AlucardIdle_' + i + '.png');
  }
  altest = loadImage('/Images/Alucard Idle/AlucardIdle_0.png')
}

function draw() {
  //set bg color to background of library
  background(144, 112, 1);
  bgimageratio = (bgimage.height / bgimage.width);
  scaleratio = bgimage.width / innerWidth;
  image(bgimage, 0, innerHeight / 5, window.innerWidth, ( bgimageratio * innerWidth));
  image(altest, mouseX, 250, 75, 50);
}