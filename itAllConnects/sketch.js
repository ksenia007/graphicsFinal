var snakeArray=[];
var snake=[];
var directions=[];

var step=10;
var points=0;

var sizeR=10;

var right=true;
var left=false;
var up=false;
var down=false;
var ateFruit=false;

var speed=10;



function setup(){
    createCanvas(500, 500);


    for (var v=0; v<10; v++){
        directions.push([true, false, false, false]);
        snakeTemp=intializeSnake();
        snakeArray.push(snakeTemp);
    }

    imageMode(CENTER);
    rectMode(CENTER);

}

function draw(){ 
    // Set the background to white 
    
    background(255);
    fill(0);
    var len=snakeArray.length
    for (var i=0; i<len; i++){
        drawSnake(snakeArray[i]);
        checkBorders(i*20, snakeArray[i], directions[i]);
        updateSnake(snakeArray[i],directions[i]);
        ateFruit=false;
    }
    
    if(frameCount%600==0){
        //restart if the frame count is high
        background(255);
        snakeArray=[];
        for (var v=0; v<10; v++){
            directions.push([true, false, false, false]);
            snakeTemp=intializeSnake();
            snakeArray.push(snakeTemp);
        }
    }

}

function updateSnake(snake, directions){

     // Update snake
     if (directions[0]){
        snake.unshift(createVector(snake[0].x+speed, snake[0].y));
    }
    else if (directions[1]){
        snake.unshift(createVector(snake[0].x-speed, snake[0].y));
    }
    else if (directions[2]){
        snake.unshift(createVector(snake[0].x, snake[0].y-speed));
    }
    else if (directions[3]){
        snake.unshift(createVector(snake[0].x, snake[0].y+speed));
    }

    if (!ateFruit){
        snake.pop();
    }
}

function drawSnake(snake){
    for (var i=0; i<snake.length; i++){
        rect(snake[i].x, snake[i].y, sizeR, sizeR);
    }
}

function checkBorders(border, snake, dir){
    border=border+20;
    if (snake[0].x<border && dir[1]){
        ateFruit=true;
        //turn down if in the upper part
        dir[1]=false;
        if (snake[0].y<height/2){
            dir[3]=true;
        }
        else{
            dir[2]=true;
        }

    }
    else if (snake[0].x>width-border-sizeR/2 && dir[0]){
        dir[0]=false;
        ateFruit=true;

        if (snake[0].y<height/2){
            dir[3]=true;
        }
        else{
            dir[2]=true;
        }
    }
    else if (snake[0].y<border && dir[2]){
        ateFruit=true;

        //turn right
        dir[2]=false;
        if (snake[0].x<width/2){
            dir[0]=true;
        }
        else{
            dir[1]=true; 
        }
    }
    else if (snake[0].y>(height-border-sizeR/2) && dir[3]){
        ateFruit=true;

        //turn right if we are in the left corner
        dir[3]=false;
        if (snake[0].x<width/2){
            dir[0]=true;
        }
        else{
            dir[1]=true; 
        }
    }
}


function intializeSnake(){
    var x=floor(random()*width/10)*10;
    var y=floor(random()*height/10)*10;
    return [createVector(x, y)];
}

function randomGridXY(){
    var x=floor(random(border,(width-border)/10))*10;
    var y=floor(random(border,(height-border)/10))*10;
    return [x,y];
}
