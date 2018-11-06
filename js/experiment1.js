//Experiment 1 - Sine Wave Circle
//Draws a circle made of random sine waves 
//Carl Strümpfer, 2018

var cRad = 300; //Circle radius
var xC; //X-value of circle centre
var yC; //Y-value of circle centre
var theta = 0; //Theta angle
var step; //Theta step increment
var variation = 0; //Variation in circle
var increment; //Variation increment
var ang = 0; //Angle of variation
var angPlus; //Ang increment

function setup() {
  //Create canvas size equal to window size
  var canvas = createCanvas(windowWidth, windowHeight);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder-1');
  background(255); //Set background to white
  step = (2 * PI) / random(10, 250); //Set random step size
  increment = random(10, 30); //Set random increment
  angPlus = random(0.01, 2); //Set random angle modifier
  xC = width / 2; //Set xC to half window width
  yC = height / 2; //Set yC to half window width
}

function draw() {
  noStroke(); //Remove stroke
  fill(0, 0, 0, random(50, 100)); //Set fill to black with random opacity

  variation = sin(ang) * increment; // Set variation

  //Draw ellipse
  ellipse(
    //Find x-coordinate on circumference
    xC + (cRad + variation) * cos(theta),
     //Find y-coordinate on circumference
    yC + (cRad + variation) * sin(theta),
    4,
    4
  );

  theta = theta + step; //Add step to previous theta
  
  ang = ang + angPlus; //Add angPlus to previous angle

  //Check if a full circle has been drawn
  //rad(2*Pi) = 360 degrees
  if (theta >= 2 * PI) {
    angPlus = random(0.01, 2); //Choose random angPlus value
    step = (2 * PI) / random(10, 250); //Choose randow step size
  }
}