//Particle.js - called by experiment3.js
//Creates particles that react to the Perlin noise

//Original code by Daniel Schiffman
//Adapted by Carl Strümpfer (2018)

function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 4;
    this.h = 0;
    this.op = 25;

    this.prevPos = this.pos.copy();

    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.follow = function (vectors) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.show = function () {
        stroke(this.h, this.h, this.h, this.op);
        strokeWeight(1);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0; //Reset X-position (0)
            this.updatePrev();
            this.h = 0; //Set colour to black
            this.op = 25; //Set opacity to 25%
        }
        if (this.pos.x < 0) {
            this.pos.x = width; //Reset Y-position (window width)
            this.updatePrev();
            this.h = 0; //Set colour to black
            this.op = 25; //Set opacity to 25%
        }
        if (this.pos.y > height) {
            this.pos.y = 0; //Reset Y-position (0)
            this.updatePrev();
            this.h = 0; //Set colour to black
            this.op = 25; //Set opacity to 25%
        }
        if (this.pos.y < 0) {
            this.pos.y = height; //Reset Y-position (window height)
            this.updatePrev();
            this.h = 0; //Set colour to black
            this.op = 25; //Set opacity to 25%
        }
        //Change colour and opacity if over black center block
        if (this.pos.x > (width / 2 - width / 3 / 2)) {
            if (this.pos.x < (width / 2 + width / 3 / 2)) {
                if (this.pos.y > 0) {
                    if (this.pos.y < height) {
                        this.h = 255; //Set colour to white
                        this.op = 15; //Set opacity to 15%
                    }
                }
            }
        }

        //Reset colour and opacity if not over black center block
        //If larger than third
        if (this.pos.x > (width / 2 + width / 3 / 2)) {
            this.h = 0; //Set colour to black
            this.op = 25; //Set opacity to 25%
        }

        //Reset colour and opacity if not over black center block
        //If smaller than second third
        if (this.pos.x < (width / 2 - width / 3 / 2)) {
            this.h = 0; //Set colour to black
            this.op = 25; //Set opacity to 25%
        }
    }
}