let canvas;
let dracula;
let scaleratio;
let draculaWidth;
let draculaHeight;
let draArr1;
let draArr2;
let fVals;
let font;
let frame;
let animFrame;
let isSmashed;
let isFlipped;
let xVelocity;
let yVelocity;
let glass;
let brokenglass;
let gf1;
let gf2;
let gf3;
let gf4;
let ygf;
let ygfhigh;
let xDrac;
let yDrac;
let xHand;
let yHand;
let xGlass;
let yGlass;
let xGF1;
let yGF1;
let xGF2;
let yGF2;
let xGF3;
let yGF3;
let xGF4;
let yGF4;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight*.96); //creates a canvas which conforms to the width and height of the website.
  background(16, 16, 16);
  angleMode(DEGREES);

  draArr1 = [];
  for(i = 0; i <= 8; i++){
    draArr1[i] = loadImage('/Images/Dracula/DraculaThrow_' + encodeURIComponent(i) + encodeURIComponent('.png'));
  }
  draArr2 = [];
  for(i = 9; i <= 27; i++){
    draArr1[i] = loadImage('/Images/Dracula/DraculaThrow_' + encodeURIComponent(i) + encodeURIComponent('.png'));
  }
  glass = loadImage('/Images/GlassAnim/glass_0.png');
  brokenglass = loadImage('/Images/GlassAnim/glass_1.png');
  gf1 = loadImage('/Images/GlassAnim/glass_2.png');
  gf2 = loadImage('/Images/GlassAnim/glass_3.png');
  gf3 = loadImage('/Images/GlassAnim/glass_4.png');
  gf4 = loadImage('/Images/GlassAnim/glass_5.png');

  animFrame = 0;
  fVals = [60, 40, 6, 6, 73, 6, 20, 60, 1, 6, 6, 6, 6, 12, 6, 6, 12, 1, 1, 1, 1, 1, 1, 1, 1,0,0]; 

  dracula = loadImage('/Images/Dracula/DraculaThrow_19.png');
  draculaWidth = 200;
  draculaHeight = 0;
  isSmashed = false;

  font = loadFont('/Fonts/SymphonyoftheNightfont.ttf'); /*font and text stuff*/
  fill(255);
  stroke(0);
  textFont(font);
  textSize(32);
  strokeWeight(4);

  xVelocity = 5;
  yVelocity = -3;
  ygf = -2;
  ygfhigh = -1;
  xDrac = 0;
  yDrac = window.innerHeight-1333;
  xHand = xDrac + 58;
  yHand = yDrac + 1196;
  xGlass = xHand;
  yGlass = yHand;


  //starts the frame count
  frame = 0;
  setInterval(function(){frame++;}, 17);
}



function draw() {
  background(16, 16, 16);
  draculaHeight = draculaWidth * dracula.height / dracula.width;
  

  if(frame >= fVals[animFrame]){ //sets frame values to the next frame of the animation once the value has been reached
    animFrame++;
    if(animFrame > 8 && !isSmashed){
      animFrame = 8;
      
      
      if(yGlass >= yDrac + draculaHeight - 100){
        //image(brokenglass, xGlass, yGlass, 24, 24);
        isSmashed = true;
        xGF1 = xGlass - 20;
        yGF1 = yGlass - 20;
        xGF2 = xGlass - 20;
        yGF2 = yGlass - 20;
        xGF3 = xGlass - 20;
        yGF3 = yGlass - 20;
        xGF4 = xGlass - 20;
        yGF4 = yGlass - 20;
      } else { 
        image(glass, xGlass, yGlass, 24, 24);
        xGlass+=xVelocity;
        yGlass += yVelocity;
        if(frame % 4 == 1){
        yVelocity++;}
      }
    } else { frame = 0;}

    

    if(animFrame > 26){
      animFrame = 26;
    }
  }

  image(draArr1[animFrame], 0, yDrac, draculaWidth, draculaHeight);

  if (isSmashed){
      push();
      rotate(90);
      image(brokenglass, yGlass, -xGlass, 24, 24);
      pop();
      
      if(yGF1 >= yDrac + draculaHeight - 100){
        
      } else {
        if (frame % 4 == 1){
          ygf++;
        }
        yGF1 += ygf;
        xGF1 += 3;
        yGF2 += ygf;
        xGF2 -= 3;
        image(gf1, xGF1, yGF1, 24, 24);
        image(gf2, xGF2, yGF2, 24, 24);
      }

      if(yGF3 >= yDrac + draculaHeight - 100){
        
      } else {
        if (frame % 4 == 1){
          ygfhigh++;
        }
        yGF3 += ygfhigh;
        xGF3 += 3;
        yGF4 += ygfhigh;
        xGF4 -= 3;
        image(gf3, xGF3, yGF3, 24, 24);
        image(gf4, xGF4, yGF3, 24, 24);
      }
    }
  
  //parseInt(frame / 15)
  
  text(frame, 50, 50);
}