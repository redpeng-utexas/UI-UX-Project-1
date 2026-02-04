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
let futureX;
let yDrac;
let xHand;
let yHand;
let xGlass;
let yGlass;
let frame2;
let xGF1;
let yGF1;
let xGF2;
let yGF2;
let xGF3;
let yGF3;
let xGF4;
let yGF4;
let textProg1;
let textp1p;
let textProg2;
let textp2p;
let text1;
let text2;
let intro;
let frame3;
let animFrame2;


let voice1;
let voice2;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight*.96); //creates a canvas which conforms to the width and height of the website.
  background(16, 16, 16);
  angleMode(DEGREES);

  

  draArr1 = [];
  for(i = 0; i <= 27; i++){
    draArr1[i] = loadImage('./Images/Dracula/DraculaThrow_' + encodeURIComponent(i) + encodeURIComponent('.png'));
  }
  glass = loadImage('./Images/GlassAnim/glass_0.png');
  brokenglass = loadImage('./Images/GlassAnim/glass_1.png');
  gf1 = loadImage('./Images/GlassAnim/glass_2.png');
  gf2 = loadImage('./Images/GlassAnim/glass_3.png');
  gf3 = loadImage('./Images/GlassAnim/glass_4.png');
  gf4 = loadImage('./Images/GlassAnim/glass_5.png');
  dracula = loadImage('./Images/Dracula/DraculaThrow_19.png');

  
  fVals = [40, 30, 8, 6, 63, 6, 12, 40, 1, 6, 6, 4, 4, 6, 110, 6, 10, 1, 8, 5, 1, 5, 8, 1, 1,1,1]; 

  
  draculaWidth = 200;
  draculaHeight = 0;

  futureX = Math.floor(Math.random() * (window.innerWidth));
  
    isFlipped = false;
    if(futureX > window.innerWidth/2){
      isFlipped = true;
    }

  font = loadFont('./Fonts/SymphonyoftheNightfont.ttf'); /*font and text stuff*/
  fill(255, 255, 255, 180);
  stroke(0);
  textFont(font);
  textSize(32);
  strokeWeight(4);


  
  
  text1 = "Q. What is a man?";
  text2 = "A. A miserable little pile of secrets!";

  resetDracula();

  voice1 = createAudio('./Voices/WhatIsAManHQ.mp3');
  voice2 = createAudio('./Voices/WhatIsAMan2HQ.mp3');


  

  //starts the frame count
  
  setInterval(function(){
    frame++; }, 17);
  setInterval(function(){
    if(frame2 > -1){frame2++;} }, 17);
  setInterval(function(){
    if(frame3 > -1){frame3++;} }, 17);

    intro = -1;
    frame3 = -1;
}

function resetDracula(){
  frame = 0;
  frame2 = -1;

  animFrame = 0;
  animFrame2 = 0;

  textProg1 = "";
  textp1p = -1;
  textProg2 = "";
  textp2p = 0;

  isSmashed = false;

  xVelocity = 3;
  yVelocity = -4;
  ygf = -2;
  ygfhigh = -1;
  xDrac = futureX;
  yDrac = window.innerHeight-1333;
  if(!isFlipped){xHand = xDrac + 58;} else{
    xHand = xDrac - 58;
  }
  yHand = yDrac + 1196;
  xGlass = xHand;
  yGlass = yHand;
}


function draw() {
  background(16, 16, 16);
  draculaHeight = draculaWidth * dracula.height / dracula.width;
  

  if(frame >= fVals[animFrame]){ //sets frame values to the next frame of the animation once the value has been reached
    animFrame++;
    if(animFrame == 7){
      voice1.play();
      frame2 = 0;
      textp1p = 0; 
    }
    if(animFrame > 8 && !isSmashed){
      animFrame = 8;
      intro = -1;
      
      
      if(yGlass >= yDrac + draculaHeight - 100){
        push();
        rotate(90);
        if(isFlipped){
          scale(-1, 1);
          image(brokenglass, -yGlass, -xGlass, 24, 24);
        } else{
          image(brokenglass, yGlass, -xGlass, 24, 24);}
        
        pop();
        isSmashed = true;
        if(!isFlipped){
          xGF1 = xGlass - 20;
          xGF2 = xGlass - 20;
          xGF3 = xGlass - 20;
          xGF4 = xGlass - 20;
        } else{
          xGF1 = xGlass + 20;
          xGF2 = xGlass + 20;
          xGF3 = xGlass + 20;
          xGF4 = xGlass + 20;}
        
        yGF1 = yGlass - 20;
        yGF2 = yGlass - 20;
        yGF3 = yGlass - 20;
        yGF4 = yGlass - 20;
        voice2.play();
      } else { 
        
        push();
        if(isFlipped){
          scale(-1, 1);
          xGlass-=xVelocity;
          image(glass, -xGlass, yGlass, 24, 24);
        } else{image(glass, xGlass, yGlass, 24, 24); xGlass+=xVelocity;}
        pop();
        
        yGlass += yVelocity;
        if(frame % 4 == 1){
        yVelocity++;}
      }
    } else { frame = 0;}

    

    if(animFrame > 26){
      animFrame = 26;
    }
  }

  push();
  if(isFlipped){
    scale(-1, 1);
    image(draArr1[animFrame], -xDrac, yDrac, draculaWidth, draculaHeight);
  } else{image(draArr1[animFrame], xDrac, yDrac, draculaWidth, draculaHeight);}
  pop();

  if (isSmashed){
      if(frame % 3 == 0 && textProg2.length < text2.length){
     textProg2 += text2[textp2p];
     textp2p++;
  }
  
  text(textProg2, 50, 75);
      
      if(yGF1 >= yDrac + draculaHeight - 100){
        
      } else {
        if (frame % 4 == 1){
          ygf++;
        }
        
        yGF1 += ygf;
        xGF1 += 3;
        yGF2 += ygf;
        xGF2 -= 3;
        if(!isFlipped){
          image(gf1, xGF1, yGF1, 24, 24);
          image(gf2, xGF2, yGF2, 24, 24);
        } else{
          image(gf1, -xGF1, yGF1, 24, 24);
          image(gf2, -xGF2, yGF2, 24, 24);
        }
        
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
        if(!isFlipped){
          image(gf3, xGF3, yGF3, 24, 24);
          image(gf4, xGF4, yGF3, 24, 24);
        } else{
          image(gf3, -xGF3, yGF3, 24, 24);
          image(gf4, -xGF4, yGF3, 24, 24);
        }
        
      }
    }
  
  //parseInt(frame / 15)
  if(textp1p >= 0){
  if(frame % 3 == 0 && textProg1.length < text1.length){
    textProg1 += text1[textp1p];
    textp1p++;
  }
  
  }
  text(textProg1, 50, 50);



  if(animFrame > 24 && mouseIsPressed && intro < 0){
    intro = 0;
    futureX = Math.min(mouseX + 50, window.innerWidth);
    frame3 = 0;
    isFlipped = false;
    if(futureX > window.innerWidth/2){
      isFlipped = true;
    }
    
  }

  if(intro > -1){
    
    switch (intro){
      case 0:
        animFrame2 = 25;
        image(draArr1[25], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 1:
        animFrame2 = 24;
        image(draArr1[24], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 2:
        animFrame2 = 23;
        image(draArr1[23], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 3:
        animFrame2 = 22;
        image(draArr1[22], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 4:
        animFrame2 = 21;
        image(draArr1[21], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 5:
        animFrame2 = 22;
        resetDracula();
        image(draArr1[22], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 6:
        animFrame2 = 23;
        image(draArr1[23], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 7:
        animFrame2 = 24;
        image(draArr1[24], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 8:
        animFrame2 = 25;
        image(draArr1[25], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);
        break;
      case 9:
        animFrame2 = -1;
        frame3 = -1;
        image(draArr1[26], futureX-(105 * isFlipped), yDrac, draculaWidth, draculaHeight);

    }
    if(frame3 >= fVals[animFrame2]){
      intro++
    }
  }
}