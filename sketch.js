let canvas;
let dracula;
let scaleratio;
let draculaWidth;
let draculaHeight;
let font;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight*.96); //creates a canvas which conforms to the width and height of the website.
  background(16, 16, 16);

  //dracula = []

  dracula = loadImage('/Images/DraculaAnimsFix/DraculaThrow_19.png');
  draculaWidth = 200;

  font = loadFont('/Fonts/SymphonyoftheNightfont.ttf'); /*font and text stuff*/
  fill(255);
  stroke(0);
  textFont(font);
  textSize(32);
  strokeWeight(4);
}

function draw() {
  background(16, 16, 16);
  
  draculaHeight = draculaWidth * dracula.height / dracula.width; /*dracula height calculation*/

  image(dracula, 1, -400, draculaWidth, draculaHeight);
  
  
  
  text(draculaHeight, 50, 50);
}