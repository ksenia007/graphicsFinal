var theta1=0;
var theta2=0;

var speed1=.1;
var speed2=5;
var r1=50;
var r2=250;


var c1;
var cnv;

function setup(){
    cnv=createCanvas(1700, 1700);
    background(255);
    c1=width/2;
   // draw();
}

function draw(){ 
    // Set the background to white 

    
    var x = c1 + r1*cos(theta1);
    var y = c1 + r1*sin(theta1);
    theta1=theta1+speed1;


    var x1 = c1 + r2*cos(theta2);
    var y1 = c1 + r2*sin(theta2);
    theta2=theta2+speed2;

    if(frameCount<201){
        r2=350;
        colorR = color(66, 100+floor(60*random()), 244, floor(100*random()));
    }
    else if(frameCount<402){
        r1=100;
        //clear();
        colorR = color(66, 100+floor(60*random()), 244, floor(120*random()));

    }

    else if(frameCount<702){
        r1=150;
        //clear();
        colorR = color(66, 100+floor(60*random()), 244, floor(180*random()));

    }

    else if(frameCount<1200){
        r1=250;
        r2=450;
        //clear();
        colorR = color(66, 100+floor(60*random()), 244, floor(200*random()));

    }

    else if(frameCount<1600){
        r1=350;
        //r2=450;
        //clear();
        colorR = color(66, 100+floor(60*random()), 244, floor(230*random()));
    }

    else if(frameCount<2000){
        r1=450;
        r2=650;
        //clear();
        colorR = color(66, 110+floor(60*random()), 244, floor(random(100, 255)));
    }

    else if(frameCount<2500){
        r1=550;
        //r2=450;
        //clear();
        colorR = color(66, 110+floor(60*random()), 244, floor(random(150, 255)));
    }
    
    
    //from = color(66, 130, 244, 0.7 * 255);
    //to = color(244, 149, 66, 0.7 * 255);
    //colorR = color(66, 100+floor(40*random()), 244, floor(244*random()));
   // c = color(65); // Update 'c' with grayscale value
    stroke(colorR); // Use updated 'c' as fill color
    line(x,y,x1,y1);
    

    if(frameCount==2000){
        save(cnv, 'myCanvas.jpg');
    }

    
}
