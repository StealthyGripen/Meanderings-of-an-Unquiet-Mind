//Carl Strümpfer (2018)
var xspacing = 17; // Distance between each horizontal location
var w; // Width of entire wave
var theta = 0.0; // Start angle at 0
var amplitude; // Height of wave
var initamp = 50.0; //Initial amplitude
var period = 300.0; // How many pixels before the wave repeats
var dx; // Value for incrementing x
var yvalues; // Using an array to store height values for the wave

var easing = 0.05;

//Improve FPS
p5.disableFriendlyErrors = true;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    w = width + 16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w / xspacing));
}

function draw() {

    background(255);
    calcWave();
    renderWave();
    fill(255);
    rect(0, 0, width / 3, height);
    rect(width / 3 * 2, 0, width / 3, height);
}

function calcWave() {
    // Increment theta (try different values for 
    // 'angular velocity' here)
    theta += 0.00;
    amplitude = 50;
    amplitude = ((height / 2) - mouseY) / ((height / 2) / initamp);
    theta += ((width / 2) - mouseX) / ((width / 2) / 0.5 * PI);


    // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x) * amplitude;
        x += dx;
    }
}

function renderWave() {
    noStroke();
    fill(0);
    // A simple way to draw the wave with an ellipse at each location
    for (var x = 0; x < yvalues.length; x++) {
        ellipse(x * xspacing, height / 2 + yvalues[x], 5, 5);
        ellipse(x * xspacing, height / 2 + yvalues[x] + height / 8, 5, 5);
        ellipse(x * xspacing, height / 2 + yvalues[x] + height / 8 * 2, 5, 5);
        ellipse(x * xspacing, height / 2 + yvalues[x] - height / 8, 5, 5);
        ellipse(x * xspacing, height / 2 + yvalues[x] - height / 8 * 2, 5, 5);


    }
}