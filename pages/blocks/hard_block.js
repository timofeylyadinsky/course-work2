var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const g = 9.81; //Gravitational acceleration constanta

const lengthOfRope = 200;


var blockFirst = {
    x: canvas.width / 2 - 100,
    y: 60,
    radius: 50,
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius/2-5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x-this.radius, this.y-this.radius);
        ctx.lineTo(this.x+this.radius, this.y-this.radius);
        ctx.strokeStyle = "#4D4B4B";
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
      }
};

var blockSecond = {
    x: canvas.width / 2 + 100,
    y: 60,
    radius: 50,
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius/2-5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x-this.radius, this.y-this.radius);
        ctx.lineTo(this.x+this.radius, this.y-this.radius);
        ctx.strokeStyle = "#4D4B4B";
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
      }
};

var moveableBlock = {
    x: canvas.width / 2,
    y: blockFirst.y + lengthOfRope,
    radius: 50,
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius/2-5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y+this.radius);
        ctx.strokeStyle = "black";
        ctx.closePath();
        ctx.stroke();
      }
};

var topLine = {
    x: 20,
    y: 10,
    xEnd:  canvas.width - 20,
    draw: function() {
        let tmpX = this.x;
        while(tmpX < this.xEnd){
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.moveTo(tmpX, this.y);
            tmpX+=10;
            ctx.lineTo(tmpX, 1);
            ctx.strokeStyle = "#4D4B4B";
            ctx.closePath();
            ctx.stroke();
        };
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xEnd, this.y);
        ctx.strokeStyle = "black";
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = "black";
       
    }
};


var ropeFirst = {
    x: blockFirst.x - blockFirst.radius,
    y: blockFirst.y,
    yEnd: blockFirst.y + lengthOfRope,
    draw: function(){
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.yEnd);
        ctx.fillStyle = "black";
        ctx.closePath();
        ctx.stroke();
    }
}
var ropeSecond = {
    x: blockFirst.x + blockFirst.radius,
    y: blockFirst.y,
    yEnd: blockFirst.y + lengthOfRope,
    draw: function(){
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.yEnd);
        ctx.fillStyle = "black";
        ctx.closePath();
        ctx.stroke();
    }
}
var ropeThird = {
    x: blockSecond.x - blockSecond.radius,
    y: blockSecond.y,
    yEnd: blockSecond.y + lengthOfRope,
    draw: function(){
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.yEnd);
        ctx.fillStyle = "black";
        ctx.closePath();
        ctx.stroke();
    }
}
var ropeFourth = {
    x: blockSecond.x + blockSecond.radius,
    y: blockSecond.y,
    yEnd: blockSecond.y + lengthOfRope,
    draw: function(){
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.yEnd);
        ctx.fillStyle = "black";
        ctx.closePath();
        ctx.stroke();
    }
}





var loadFirst = {
    x: ropeFirst.x,
    y: ropeFirst.yEnd,
    size: 20,
    m: 5,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x - 2 * this.size, this.y, 4 * this.size, 4 * this.size,);
        
        ctx.closePath();
    }
} 

var loadSecond = {
    x: moveableBlock.x,
    y: moveableBlock.y + moveableBlock.radius,
    size: 20,
    m: 10,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(this.x - 2 * this.size, this.y, 4 * this.size, 4 * this.size,)
        ctx.closePath();
    }
} 
var loadThird = {
    x: ropeFourth.x,
    y: ropeFourth.yEnd,
    size: 20,
    m: 5,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x - 2 * this.size, this.y, 4 * this.size, 4 * this.size,);
        
        ctx.closePath();
    }
} 

drawElements();

function drawElements(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    blockFirst.draw();
    blockSecond.draw();
    topLine.draw();
    ropeFirst.draw();
    ropeSecond.draw();
    ropeThird.draw();
    ropeFourth.draw();
    loadFirst.draw();
    loadSecond.draw();
    loadThird.draw();
    moveableBlock.draw();
    /*block.draw();
    topLine.draw();
    ropeLeft.draw();
    ropeRight.draw();
    ropeThird.draw();
    loadLeft.draw();
    loadRight.draw();
    moveableBlock.draw();*/
}

let v1 = 0, v2 = 0, v3 = 0,  a1 = 0, a2 = 0, a3 = 0;
let yInvisible = blockSecond.y + blockSecond.radius;
function start(){
    a1 = (g * (1.5 * loadSecond.m - 2 * loadFirst.m - 2 * loadThird.m + (0.5 * loadSecond.m * loadFirst.m)/loadThird.m))/(2*loadFirst.m + 0.5 * loadSecond.m - (0.5 * loadFirst.m * loadSecond.m)/loadThird.m);
    a3 = (g*(loadFirst.m - loadThird.m)+loadFirst.m * a1)/loadThird.m;
    a2 = 0.5 * (a1 + a3);
    a1 *= -1;
    a3 *= -1;
    v1+=(a1/10);
    v2+=(a2/10);
    v3+=(a3/10);
    if((loadFirst.y == yInvisible && a1<=0)||(loadThird.y == yInvisible && a3<=0)||(moveableBlock.y - moveableBlock.radius == topLine.y && a2<=0)){
        v1 = 0;
        v2 = 0; 
        v3 = 0;
        return;
    }
    if(loadFirst.y + v1 <= yInvisible || loadThird.y + v3 <= yInvisible){
        if(loadFirst.y + v1 <= yInvisible){
            loadFirst.y = yInvisible;
            ropeFirst.yEnd = loadFirst.y;
        }else{
            loadFirst.y += v1;
            ropeFirst.yEnd += v1;
        }
        if(loadThird.y + v3 <= yInvisible){
            loadThird.y = yInvisible;
            ropeFourth.yEnd = yInvisible;
        }else{
            loadThird.y += v3;
            ropeFourth.yEnd += v3;
        }
        loadSecond.y += v2;
        moveableBlock.y += v2;
        ropeSecond.yEnd += v2;
        ropeThird.yEnd += v2;
        drawElements();
        v1 = 0;
        v2 = 0; 
        v3 = 0;
        return;
    }else if(moveableBlock.y - moveableBlock.radius + v2 <= topLine.y){
        moveableBlock.y = topLine.y + moveableBlock.radius;
        loadSecond.y = moveableBlock.y + moveableBlock.radius;
        ropeSecond.yEnd = moveableBlock.y;
        ropeThird.yEnd = moveableBlock.y;

        loadFirst.y += v1;
        ropeFirst.yEnd += v1;
        loadThird.y += v3;
        ropeFourth.yEnd += v3;
        drawElements();
        v1 = 0;
        v2 = 0; 
        v3 = 0;
        return;
    }else{
        loadFirst.y += v1;
        ropeFirst.yEnd += v1;
        loadThird.y += v3;
        ropeFourth.yEnd += v3;

        moveableBlock.y += v2;
        loadSecond.y += v2;
        ropeSecond.yEnd += v2;
        ropeThird.yEnd += v2;
    }
    drawElements();
    requestAnimationFrame(start);
}

function validate(){
    let weight1 = parseFloat(document.getElementById("weight1").value);
    let weight2 = parseFloat(document.getElementById("weight2").value);
    let weight3 = parseFloat(document.getElementById("weight3").value);
    if(!isNaN(weight1)){
        if(weight1 > 999 || weight1 < 0) alert("Incorrect weight of blue load")
        else loadFirst.m = weight1;
    }
    if(!isNaN(weight2)){
        if(weight2 > 999 || weight2 < 0) alert("Incorrect weight of red load")
        else loadSecond.m = weight2;
    }
    if(!isNaN(weight3)){
        if(weight3 > 999 || weight3 < 0) alert("Incorrect weight of orange load")
        else loadThird.m = weight3;
    }
    start();
}
