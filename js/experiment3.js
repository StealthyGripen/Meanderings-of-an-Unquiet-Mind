//Experiment 3 - Perlin Lines
//Draws lines defined by Perlin noise fields

//Original code by Daniel Schiffman
//Adapted by Carl Strümpfer (2018)

var inc = 0.1;
var scl = 30;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

//Improve FPS
p5.disableFriendlyErrors = true;

function setup() {
    //Create canvas size equal to window size
    var canvas = createCanvas(windowWidth, windowHeight);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    //Set width equals to width of window
    width = windowWidth;
    //Set height equals to height of window
    height = windowHeight;
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('');

    flowfield = new Array(cols * rows);

    for (var i = 0; i < 200; i++) {
        particles[i] = new Particle();
    }
    background(255);
    fill(0);
    rect(width / 2 - width / 3 / 2, 0, width / 3, height);
}

function draw() {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = x + y * cols;
            var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
        }
        yoff += inc;

        zoff += 0.0003;
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
}