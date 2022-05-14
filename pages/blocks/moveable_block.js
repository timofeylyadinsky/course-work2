var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const g = 9.81; //Gravitational acceleration constanta

var block = {
    x: canvas.width / 2,
    y: 60,
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
        ctx.lineTo(this.x-this.radius, this.y-this.radius);
        ctx.lineTo(this.x+this.radius, this.y-this.radius);
        ctx.strokeStyle = "#4D4B4B";
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
      }
};

var moveableBlock = {
    x: block.x + 2 * block.radius,
    y: block.y + 250,
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
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(moveableBlock.x + moveableBlock.radius, this.y, 10, 0, Math.PI, false);
       // ctx.strokeStyle = "#4D4B4B";
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = "black";
       
    }
};


var ropeLeft = {
    x: block.x -block.radius,
    y: block.y,
    yEnd: block.y + 250,
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
var ropeRight = {
    x: block.x + block.radius,
    y: block.y,
    yEnd: block.y + 250,
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
    x: moveableBlock.x + moveableBlock.radius,
    y: topLine.y,
    yEnd: block.y + 250,
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

var loadLeft = {
    x: ropeLeft.x,
    y: ropeLeft.yEnd,
    size: 20,
    m: 5,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x - 2 * this.size, this.y, 4 * this.size, 4 * this.size,);
        
        ctx.closePath();
    }
} 

var loadRight = {
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
drawElements();

function drawElements(){
    block.draw();
    topLine.draw();
    ropeLeft.draw();
    ropeRight.draw();
    ropeThird.draw();
    loadLeft.draw();
    loadRight.draw();
    moveableBlock.draw();
}

let a = 0, aTemp = 1;
let yInvisible = block.y + block.radius;
function start(){
    validate();
    if(2 * loadLeft.m != loadRight.m){
        aTemp = (g * (2 * loadLeft.m - loadRight.m)/(2 * loadLeft.m + loadRight.m));
        aTemp /= 5;
        a+=aTemp;
        if(loadRight.y-a <= yInvisible || loadLeft.y+a <= yInvisible) {
            if(loadRight.y < loadLeft.y && loadRight.y > yInvisible){
                ctx.clearRect(0,0,innerWidth,innerHeight);
                ropeLeft.yEnd+=loadRight.y-yInvisible;
                loadLeft.y+=loadRight.y-yInvisible;
                ropeRight.yEnd=block.y;
                ropeThird.yEnd=block.y;
                loadRight.y=yInvisible+2;
                moveableBlock.y=block.y;
                drawElements();
            }
            if(loadRight.y > loadLeft.y && loadLeft.y > yInvisible){
                ctx.clearRect(0,0,innerWidth,innerHeight);
                ropeRight.yEnd+=loadLeft.y-yInvisible;
                ropeThird.yEnd+=loadLeft.y-yInvisible;
                loadRight.y+=loadLeft.y-yInvisible;
                moveableBlock.y+=loadLeft.y-yInvisible;
                ropeLeft.yEnd=yInvisible+2;
                loadLeft.y=yInvisible+2;
                drawElements();
            }
            a = 0;
            return;
        }
        if(loadRight.y-a <= yInvisible+2 || loadLeft.y+a <= yInvisible+2){
            a=0;
            return;
        }
        ctx.clearRect(0,0,innerWidth,innerHeight);
        drawElements();
        ropeRight.yEnd-=a;
        ropeThird.yEnd-=a;
        loadRight.y-=a;
        moveableBlock.y-=a;
        ropeLeft.yEnd+=a;
        loadLeft.y+=a;
        if(loadRight.y > yInvisible || loadLeft.y > yInvisible) requestAnimationFrame(start);
    }
}

function validate(){
    let weight1 = parseFloat(document.getElementById("weight1").value);
    let weight2 = parseFloat(document.getElementById("weight2").value);
    if(!isNaN(weight1)){
        if(weight1 > 999 || weight1 < 0) alert("Incorrect weight of blue load")
        else loadLeft.m = weight1;
    }
    if(!isNaN(weight2)){
        if(weight2 > 999 || weight2 < 0) alert("Incorrect weight of red load")
        else loadRight.m = weight2;
    }
}
