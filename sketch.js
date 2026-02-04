let canvas;
let dracula;
let scaleratio;
let draculaWidth;
let draculaHeight;
let draArr;
let font;
let frame;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight*.96); //creates a canvas which conforms to the width and height of the website.
  background(16, 16, 16);

  draArr = [];
  for(i = 0; i <= 25; i++){
    draArr[i] = loadImage('/Images/Dracula/DraculaThrow_' + encodeURIComponent(i) + encodeURIComponent('.png'));
  }

  dracula = loadImage('/Images/Dracula/DraculaThrow_19.png');
  draculaWidth = 200;

  font = loadFont('/Fonts/SymphonyoftheNightfont.ttf'); /*font and text stuff*/
  fill(255);
  stroke(0);
  textFont(font);
  textSize(32);
  strokeWeight(4);



  //starts the frame count
  frame = 0;
  setInterval(function(){frame++;}, 17);
}

function draw() {
  background(16, 16, 16);
  
  draculaHeight = draculaWidth * dracula.height / dracula.width; /*dracula height calculation*/

  image(draArr[15], 0, -400, draculaWidth, draculaHeight);
  
  //parseInt(frame / 15)
  
  text(frame, 50, 50);
}