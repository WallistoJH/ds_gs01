let sourceText;
let poem;


let img;
let size = 12
let startx = 0
let starty = 0
let startx2 = 0
let starty2 = 0
let startx3 = 0
let starty3 = 0
let asciiDiv;
var vScale = 16;

let startIndex = 0;



function preload() {
  // createCanvas(1920/2, 1080/2);
    maskImage = loadImage('mask02.png');
    sourceText = loadStrings("dummy.txt"); // 샘플 더미 텍스트

}

function setup() {
  var canvas = createCanvas(1920, 1080);
  canvas.parent('sketch-container');
  pixelDensity(1);
  img = createCapture(VIDEO);
  img.size(windowWidth,windowHeight);
  img.hide();
  
    asciiDiv = createDiv();
}


function draw() {
  // clear();
  // background('#0068FF');
  img.loadPixels();
  loadPixels();
  
  
  
  clear();
  background(0);
  
  push();
  var1(rotate(0.2), translate(windowWidth*0.05,0));
  pop();
  
  push();
  var2(rotate(-0.2), translate(-windowWidth*0.05,windowHeight*0.15));
  pop();

  push();
  var4(
    rotate(-0.1),
    translate(-windowWidth*0.07,windowHeight*0.09)
    // scale(random(1,1.2))
  );
  pop();

  
 push();
  var5(rotate(0.2), translate(windowWidth*0.12,-windowHeight*0.16));
  pop();
  
    
  // push();
  // var3(translate(0));
  // pop();
  
  
}




function var1 () {
  let size = floor(map(mouseX, 0, width, 10, 20));
  
  for (var starty = 0; starty < img.height/2; starty++) {
    for (var startx = 0; startx < img.width/2; startx++) {
      var index = (startx + starty * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b));
      noStroke();
      // stroke(1);

      if (bright < 63.75) {
        fill(25,random(0),0);
        rect(startx, starty, size/1, size/1);
        // fill(255);
        ellipse(startx-5, starty, size/2, size/2);


      } else if (bright >= 63.75 && bright < 127.5) {
        fill(85);
      } else if (bright >= 127.5 && bright <= 191.25) {
        fill(170);
      } else if (bright >= 191.25 && bright <= 255) {
        fill(255);
      }
      rect(startx, starty, size/1, size/1);
      
      fill(bright);
      // rect(startx, starty, size, size);
      startx = startx + size -1;
    }
    starty = starty + size -1;
    // push()
    // rotate(20);
    
   push();
  pop();
  }
}







function var2 () {
    let size2 = floor(map(0, 0, width, 30, 50));
  
  

  for (var starty = 0; starty < img.height/2; starty++) {
    for (var startx = windowWidth/2; startx < img.width/2 + windowWidth/2; startx++) {
      var index = (startx + starty * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b));
      noStroke();

      if (bright < 63.75) {
        fill('#FFEB3B');
        rect(startx, starty, size2, size2);
        
        fill('#D60F0F');
        // rect(startx, starty, size2/1.2, size2/1.2);
        ellipse(startx, starty, size/0.5, size/0.5);
      } else if (bright >= 63.75 && bright < 127.5) {
        fill('#FFEB3B');
        rect(startx, starty, size2, size2);
    
        
        fill('#0FD67A');
        ellipse(startx, starty, size2/1.5, size2/1.5);
      } else if (bright >= 127.5 && bright <= 191.25) {
        fill('#FFEB3B');
        rect(startx, starty, size2, size2);
        
        
        fill('#BB00FF');
        // ellipse(startx, starty, size/1, size/1);
        triangle(startx, starty, startx + (size2 / 3), starty + size2/1.5, startx + size2/1.5, starty); //위에서 아래 삼각형
      } else if (bright >= 191.25 && bright <= 255) {
        fill('#FFEB3B');
        rect(startx, starty, size2, size2);
      }
      fill('rgba(0,0,0,0)');
      // rec#3866A8x, starty, size, size);
      startx = (startx) + size2 -1;
    }
    starty = starty + size2 -1;
  }
    // updatePixels();

  
}







function var4 () {
    for (var starty = windowHeight/2; starty < img.height + windowHeight/2; starty++) {
    for (var startx = 0; startx < img.width/2; startx++) {
  
      var index = (startx + starty * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b));
      noStroke();

      if (bright < 63.75) {
        fill('#B40C00');
        rect(startx, starty, size/1.8, size/0.8);
        fill('#0068FF');
        ellipse(startx, starty, size/8, size/8);      
      } else if (bright >= 63.75 && bright < 127.5) {
        fill(63);
        rect(startx, starty, size/1.8, size/0.8);
        fill('#0068FF');
        ellipse(startx, starty, size/8, size/8);  
      } else if (bright >= 127.5 && bright <= 191.25) {
        fill('#00B486');
        rect(startx, starty, size/1.8, size/0.8);
        fill('#0068FF');
        ellipse(startx, starty, size/8, size/8); 
      } else if (bright >= 191.25 && bright <= 255) {
        fill(255);     
        rect(startx, starty, size/1.8, size/0.8);
        fill('#0068FF');
        // ellipse(startx, starty, size/8, size/8);  
      }
      fill(r,g,b);
        // ellipse(startx, starty, size/.8, size/.8);
      // rotate(0,12);
      // rect(startx, starty, size, size);
      startx = startx + size -1;
    }
    starty = starty + size -1;
  }
  
  
//     let size2 = floor(map(mouseX, 0, width, 20, 30));

//   for (var starty = windowHeight/2; starty < img.height + windowHeight/2; starty++) {
//     for (var startx = 0; startx < img.width/2; startx++) {
//       var index = (startx + starty * img.width) * 4;
//       var r = img.pixels[index + 0];
//       var g = img.pixels[index + 1];
//       var b = img.pixels[index + 2];
//       var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b));
//       noStroke();

//       if (bright < 63.75) {
//         fill('#D60F0F');
//         rect(startx, starty, size2/1.2, size2/1.2);
       
//         // ellipse(startx, starty, size/1, size/1);
//       } else if (bright >= 63.75 && bright < 127.5) {
//         fill('#0FD67A');
//         ellipse(startx, starty, size2/1.5, size2/1.5);
//       } else if (bright >= 127.5 && bright <= 191.25) {
//         fill('#BB00FF');
//         // ellipse(startx, starty, size/1, size/1);
//         triangle(startx, starty, startx + (size2 / 3), starty + size2/1.5, startx + size2/1.5, starty); //위에서 아래 삼각형
//       } else if (bright >= 191.25 && bright <= 255) {
//         rect(startx, starty, size2, size2);
//       }
//       fill('#0068FF');
//       // rect(startx, starty, size, size);
//       startx = (startx) + size2 -1;
//     }
//     starty = starty + size2 -1;
//   }
  
  
}







function var5 () {
   
  
  
  
  
  
  let size = floor(map(mouseX, 0, width, 20, 30));

 for (var starty = windowHeight/2; starty < img.height/2 + windowHeight/2; starty++) {
    for (var startx = windowWidth/2; startx < img.width/2 + windowWidth/2; startx++) {
      var index = (startx + starty * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b));
      noStroke();

      if (bright < 63.75) {
        fill('#333');
        rect(startx, starty, size, size);
        
        fill('#0B3B09');
        rect(startx, starty, size/.8, size/.8);
        // ellipse(startx, starty, size/1, size/1);
      } else if (bright >= 63.75 && bright < 127.5) {
        fill('#333');
        rect(startx, starty, size, size);
        
        fill('#0F93D6');
        ellipse(startx, starty, size/1.5, size/1.5);
      } else if (bright >= 127.5 && bright <= 191.25) {
        fill('#333');
        rect(startx, starty, size, size);
        
        fill(170);
        ellipse(startx, starty, size/0.8, size/0.8);
      } else if (bright >= 191.25 && bright <= 255) {
        fill('#333');
        rect(startx, starty, size, size);
        
        fill(255);
      }
      fill(bright);
      // rect(startx, starty, size, size);
      startx = startx + size ;
    }
    starty = starty + size;
  }
  
  
}







  