//Experiment 5 - Inkdrops
//Draws random inkdrops that run down the canvas

//Carl Strümpfer(2018)

var variation = 1.2; //Variation in x-values

//Inkdrops 1 variables
var diameter1; //Create diameter of Inkdrop 1
var X1; //Create x-position of Inkdrop 1
var Y1; //Create x-position of Inkdrop 1
var fade1 = 100; //Create x-position of Inkdrop 1
var fadeVal1 = 0.1; //Create x-position of Inkdrop 1
var diaMin1 = 0.01; //Create x-position of Inkdrop 1

//Inkdrops 2 variables
var diameter2; //Create diameter of Inkdrop 2
var X2; //Create x-position of Inkdrop 2
var Y2; //Create x-position of Inkdrop 2
var fade2 = 100; //Create x-position of Inkdrop 2
var fadeVal2 = 0.1; //Create x-position of Inkdrop 2
var diaMin2 = 0.01; //Create x-position of Inkdrop 2

//Inkdrops 3 variables
var diameter3; //Create diameter of Inkdrop 3
var X3; //Create x-position of Inkdrop 3
var Y3; //Create x-position of Inkdrop 3
var fade3 = 100; //Create x-position of Inkdrop 3
var fadeVal3 = 0.1; //Create x-position of Inkdrop 3
var diaMin3 = 0.01; //Create x-position of Inkdrop 3

//Inkdrops 4 variables
var diameter4; //Create diameter of Inkdrop 4
var X4; //Create x-position of Inkdrop 4
var Y4; //Create x-position of Inkdrop 4
var fade4 = 100; //Create x-position of Inkdrop 4
var fadeVal4 = 0.1; //Create x-position of Inkdrop 4
var diaMin4 = 0.01; //Create x-position of Inkdrop 4


//Improve FPS
p5.disableFriendlyErrors = true;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    width = windowWidth;
    height = windowHeight;
    X1 = X2 = X3 = X4 = width / 2;
    Y1 = Y2 = Y3 = Y4 = 0;
    background(255);
    X1 = random(0, width);
    X2 = random(0, width);
    X3 = random(0, width);
    X4 = random(0, width);
    frameRate(500);
}

function draw() {
    if (diameter1 < 3) {
        diameter1 = random(10, 35);
        X1 = random(0, width);
        Y1 = 0;
        fade1 = 100;
        diaMin1 = random(0.01, 0.05);
        fadeVal1 = 100 / ((diameter1 / diaMin1) - (3 / diaMin1));
    }

    if (diameter1 > 3, Y1 > 1080) {
        diameter1 = random(10, 35);
        X1 = random(0, width);
        Y1 = 0;
        fade1 = 100;
        diaMin1 = random(0.01, 0.05);
        fadeVal1 = 100 / ((diameter1 / diaMin1) - (3 / diaMin1));

    }

    if (diameter2 < 3) {
        diameter2 = random(10, 35);
        X2 = random(0, width);
        Y2 = 0;
        fade2 = 100;
        diaMin2 = random(0.01, 0.05);
        fadeVal2 = 100 / ((diameter2 / diaMin2) - (3 / diaMin2));

    }

    if (diameter2 > 3, Y2 > windowHeight) {
        diameter2 = random(10, 35);
        X2 = random(0, width);
        Y2 = 0;
        fade2 = 100;
        diaMin2 = random(0.01, 0.05);
        fadeVal2 = 100 / ((diameter2 / diaMin2) - (3 / diaMin2));
    }

    if (diameter3 < 3) {
        diameter3 = random(10, 35);
        X3 = random(0, width);
        Y3 = 0;
        fade3 = 100;
        diaMin3 = random(0.01, 0.05);
        fadeVal3 = 100 / ((diameter3 / diaMin3) - (3 / diaMin3));
    }

    if (diameter3 > 3, Y3 > windowHeight) {
        diameter3 = random(10, 35);
        X3 = random(0, width);
        Y3 = 0;
        fade3 = 100;
        diaMin3 = random(0.01, 0.05);
        fadeVal3 = 100 / ((diameter3 / diaMin3) - (3 / diaMin3));
    }

    if (diameter4 < 3) {
        diameter4 = random(10, 35);
        X4 = random(0, width);
        Y4 = 0;
        fade4 = 100;
        diaMin4 = random(0.01, 0.05);
        fadeVal4 = 100 / ((diameter4 / diaMin4) - (3 / diaMin4));
    }

    if (diameter4 > 3, Y4 > windowHeight) {
        diameter4 = random(10, 35);
        X4 = random(0, width);
        Y4 = 0;
        fade4 = 100;
        diaMin4 = random(0.01, 0.05);
        fadeVal4 = 100 / ((diameter4 / diaMin4) - (3 / diaMin4));
    }


    //ink one
    fill(0, 0, 0, fade1);
    stroke(0, 0, 0, 0);
    ellipse(X1, Y1, diameter1, diameter1);
    X1 = X1 + random(-variation, variation);
    Y1 = Y1 + random(0.8, 2);
    diameter1 = diameter1 - diaMin1;
    fade1 = fade1 - fadeVal1;
    // dots = dots + 1;

    //ink two
    fill(0, 0, 0, fade2);
    ellipse(X2, Y2, diameter2, diameter2);
    X2 = X2 + random(-variation, variation);
    Y2 = Y2 + random(0.7, 2.1);
    diameter2 = diameter2 - diaMin2;
    fade2 = fade2 - fadeVal2;
    // dots = dots + 1;

    //ink three
    fill(0, 0, 0, fade3);
    ellipse(X3, Y3, diameter3, diameter3);
    X3 = X3 + random(-variation, variation);
    Y3 = Y3 + random(0.6, 2.2);
    diameter3 = diameter3 - diaMin3;
    fade3 = fade3 - fadeVal3;
    // dots = dots + 1;

    //ink four
    fill(0, 0, 0, fade4);
    ellipse(X4, Y4, diameter4, diameter4);
    X4 = X4 + random(-variation, variation);
    Y4 = Y4 + random(0.5, 2.3);
    diameter4 = diameter4 - diaMin4;
    fade4 = fade4 - fadeVal4;
    // dots = dots + 1;
}

function windowResized() {
    resizeCanvas(width, height);
    X1 = X2 = X3 = X4 = width / 3.2;
    Y1 = Y2 = Y3 = Y4 = 0;
    background(255);
    X1 = random(0, width);
    X2 = random(0, width);
    X3 = random(0, width);
    X4 = random(0, width);
    fill(0);
    text(width, 200, 700);
    text(width, 200, 800);
}