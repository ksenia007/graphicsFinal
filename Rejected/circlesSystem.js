
var arrayCircles=[]; //array of custom defined classes


var i=0;

function setup(){
    cnv=createCanvas(600, 600);

    // for (var j=0; j<10; j++){
    //     var tempCircle=new CircleSystem(50+100*j,50+100*j,100,90,90,0);
    //     arrayCircles.push(tempCircle);
    // }
    var col1=color("#E5E1D1");
    var col2=color("#52616D");
    var tempCircle=new CircleSystem(100,100,100,col1,col2,0);
    arrayCircles.push(tempCircle);
    var col1=color("#E5E1D1");
    var col2=color("#C44741");
    var tempCircle=new CircleSystem(350,170,200,col1,col2,0);
    arrayCircles.push(tempCircle);
    var col1=color("#E5E1D1");
    var col2=color("#52616D");
    var tempCircle=new CircleSystem(250,400,250,col1,col2,0);
    arrayCircles.push(tempCircle);
    var col1=color("#E5E1D1");
    var col2=color("#52616D");
    var tempCircle=new CircleSystem(450,300,100,col1,col2,0);
    arrayCircles.push(tempCircle);
    var col1=color("#E5E1D1");
    var col2=color("#F0942B");
    var tempCircle=new CircleSystem(150,200,50,col1,col2,0);
    arrayCircles.push(tempCircle);
    var col1=color("#E5E1D1");
    var col2=color("#52616D");
    var tempCircle=new CircleSystem(450,450,30,col1,col2,0);
    arrayCircles.push(tempCircle);
    var col1=color("#E5E1D1");
    var col2=color("#C44741");
    var tempCircle=new CircleSystem(550,400,50,col1,col2,0);
    arrayCircles.push(tempCircle);


}

function draw(){ 
    // Set the background to white 

    background(255);
    noStroke();

    for (var k=0; k<arrayCircles.length;k++){
        arrayCircles[k].drawCircle();
    }

    arrayCircles[i].drawCircle();
    arrayCircles[i].updateCircle(0.1);


    if(arrayCircles[i].theta>PI-0.03){
        if(i<arrayCircles.length){
            i=i+1;
        }
    }
}

class CircleSystem {
    constructor(centerX, centerY, radius, color1, color2, theta) {
        this.centerX=centerX;
        this.centerY=centerY;
        this.radius=radius;
        this.color1=color1;
        this.color2=color2;
        this.theta=theta;
    }
    updateCircle(speed){
        if(this.theta>2*PI+0.01){
            this.theta=0;
        }
        else{
            this.theta=this.theta+speed;
        }
    }
    drawCircle(){
        fill(this.color1);
        ellipse(this.centerX, this.centerY, this.radius, this.radius);
        fill(this.color2);
        arc(this.centerX, this.centerY, this.radius, this.radius, this.theta, this.theta+PI, OPEN);
    }
}