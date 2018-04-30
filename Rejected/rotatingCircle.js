
var arrayCircles=[]; //array of custom defined classes


var i=0;

function setup(){
    cnv=createCanvas(600, 600);
    var col1=color(255);
    var col2=color("#52616D");
    for (var j=0; j<29; j++){
        var tempCircle=new CircleSystem(300, 300, 600-20*j, col1, col2, 2*PI*random(), random(0,0.1));
        arrayCircles.push(tempCircle);
    }


}

function draw(){ 
    // Set the background to white 

    background(255);
    noStroke();

    for (var k=0; k<arrayCircles.length;k++){
        arrayCircles[k].drawCircle();
        arrayCircles[k].updateCircle();
    }
}

class CircleSystem {
    constructor(centerX, centerY, radius, color1, color2, theta, speedC) {
        this.centerX=centerX;
        this.centerY=centerY;
        this.radius=radius;
        this.color1=color1;
        this.color2=color2;
        this.theta=theta;
        this.speedC=speedC;
    }
    updateCircle(){
        if(this.theta>2*PI+0.01){
            this.theta=0;
        }
        else{
            this.theta=this.theta+this.speedC;
        }
    }
    drawCircle(){
        fill(this.color1);
        ellipse(this.centerX, this.centerY, this.radius, this.radius);
        fill(this.color2);
        arc(this.centerX, this.centerY, this.radius, this.radius, this.theta, this.theta+PI, OPEN);
    }
}