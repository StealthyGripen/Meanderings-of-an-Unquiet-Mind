//Carl Strümpfer (2018)
var speed = 35;
var diameter = 5;
var mouseIsClicked = false;
var initialX1;
var initialY1;
var fade = 80;
var clickNext = 0;

//Improve FPS
p5.disableFriendlyErrors = true;


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    x = width / 2;
    y = height / 2;
    background(255);
    clickNext = -1;
    initialX1 = mouseX;
    initialY1 = mouseY;
}

function draw() {
    if ((clickNext / 1) == 1) {
        textFont("EB Garamond");
        stroke(0);
        strokeWeight(3);
        fill(255);
        rect(initialX1 - 5, initialY1 - 10, 200, 40);
        fill(0);
        strokeWeight(3);
        stroke(0, 0, 0, 0);
        textSize(30);
        text("One to another", initialX1 + 7, initialY1 + 20);
        initialX1 = initialX1 + random(-speed, speed);
        initialY1 = initialY1 + random(-speed, speed);
        diameter = diameter - 0.1;
        mouseIsClicked = false;
        fade = fade - 0.1;
        speed = speed + 0.1;
    }

    if (clickNext / 2 == 1) {
        fill(0);
        rect(initialX1 - 5, initialY1 - 10, 400, 40);
        fill(2550);
        stroke(0, 0, 0, 0);
        textSize(30);
        text("Thoughts falling slowly like leaves", initialX1 + 7, initialY1 + 20);
        initialX1 = initialX1 + random(-speed, speed);
        initialY1 = initialY1 + random(-speed, speed);
        diameter = diameter - 0.1;
        mouseIsClicked = false;
        fade = fade - 0.1;
        speed = speed + 0.1;
        // fill(0);
        // rect(mouseX - 5, mouseY - 10, 400, 40);
        // fill(255);
        // stroke(0, 0, 0, 0);
        // textSize(30);
        // text("Thoughts falling slowly like leaves", mouseX + 7, mouseY + 20);
    }

    if (clickNext / 3 == 1) {
        textFont("EB Garamond");
        fill(255);
        rect(initialX1 - 5, initialY1 - 30, 220, 40);
        fill(0);
        stroke(0, 0, 0, 0);
        textSize(30);
        text("In the wintertime", initialX1, initialY1);
        initialX1 = initialX1 + random(-speed, speed);
        initialY1 = initialY1 + random(-speed, speed);
        diameter = diameter - 0.1;
        mouseIsClicked = false;
        fade = fade - 0.1;
        speed = speed + 0.1;
        // fill(255);
        // rect(mouseX - 5, mouseY - 30, 220, 40);
        // fill(0);
        // stroke(0, 0, 0, 0);
        // textSize(30);
        // text("In the wintertime", mouseX, mouseY);
    }
}

function mouseClicked() {
    if (mouseX > width / 100 * 6) {
        mouseIsClicked = true;
        diameter = 100;
        //reset initial 1
        initialX1 = mouseX;
        initialY1 = mouseY;
        clickNext = clickNext + 1;
        if (clickNext >= 4) {
            clickNext = 1;
        }
    }
}