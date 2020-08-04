let rockLeft, paperLeft, scissorsLeft, rockRight, paperRight, scissorsRight;
let stage, computerChoice, scoreYou, scoreComputer, randNum;
stage = 0
scoreYou = 0
scoreComputer = 0

function computerHand() {
    randNum = Math.floor(random(0,3))
    console.log(randNum)

    if (randNum == 0) {
        computerChoice = 'rock'
    }
    else if (randNum == 1) {
        computerChoice = 'paper'
    }
    else if (randNum == 2) {
        computerChoice = 'scissors'
    }
}

function preload() {
    rockLeft = loadImage("images/rockLeft.png");
    paperLeft = loadImage("images/paperLeft.png");
    scissorsLeft = loadImage("images/scissorsLeft.png");
    rockRight = loadImage("images/rockRight.png");
    paperRight = loadImage("images/paperRight.png");
    scissorsRight = loadImage("images/scissorsRight.png");
}

function setup() {
    createCanvas(1000,1000);
    background(128,128,128);
    noStroke();
    fill (252,234,78);
    rect (0,0,200,200);
    rect (200,0,200,200);
    rect (400,0,200,200);
    rect (550,300,300,300);
    rect (50,300,300,300);
}

function draw() {
    image(rockLeft,25,25,150,150);
    image(paperLeft,225,25,150,150);
    image(scissorsLeft,425,25,150,150);
    
    stroke(0,0,0);
    fill(200);
    ellipse(500,500,20,20);
 
 
 if (stage == 'rock'){
     image(rockLeft,50,300,300,300)
    }
 if (stage == 'paper'){
     image(paperLeft,50,300,300,300)
    }
 if (stage == 'scissors'){
     image(scissorsLeft,50,300,300,300)
    }

    if (computerChoice == 'rock'){
        image(rockRight,550,300,300,300);
       }
    if (computerChoice == 'paper'){
    image(paperRight,550,300,300,300);
       }
    if (computerChoice == 'scissors'){
    image(scissorsRight,550,300,300,300);
       }
}


function mouseClicked(){

    if (mouseX < 200 && mouseX > 0 && mouseY > 0 && mouseY<200){
       stage = 'rock'
       image(rockLeft,50,300,300,300)
    }
    if (mouseX > 200 && mouseX < 400 && mouseY > 0 && mouseY<200){
        stage = 'paper'
       image(paperLeft,50,300,300,300)
     }
    if (mouseX < 600 && mouseX > 400 && mouseY > 0 && mouseY<200){
        stage = 'scissors'
        image(scissorsLeft, 50,300,300,300)
     }

    
    computerHand();

        if (stage == computerChoice) {
        }
       if (stage == 'rock' && computerChoice == 'paper') {
           scoreComputer+= 1
       }
       else if (stage == 'rock' && computerChoice == 'scissors') {
           scoreYou+= 1
       }
       else if (stage == 'paper' && computerChoice == 'rock') {
           scoreYou+= 1
       }
       else if (stage == 'paper' && computerChoice == 'scissors') {
           scoreComputer += 1
       }
       else if (stage == 'scissors' && computerChoice == 'rock') {
           scoreComputer +=1
       }
       else if (stage == 'scissors' && computerChoice == 'paper') {
           scoreYou+= 1
       
       }
       fill(128,128)
       fill(255,0,0)
       textSize(32);
       text('YOU: '  + scoreYou, 650, 150)
       text('COMPUTER: '  + scoreComputer, 650, 200)

   }
// i fixed it we were missing stuff in image()
// lol wow, GOAT
