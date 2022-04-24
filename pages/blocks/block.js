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

var loadLeft = {
    x: ropeLeft.x,
    y: ropeLeft.yEnd,
    size: 20,
    m: 10,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x - 2 * this.size, this.y, 4 * this.size, 4 * this.size,)
        ctx.closePath();
    }
} 

var loadRight = {
    x: ropeRight.x,
    y: ropeRight.yEnd,
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
    ropeLeft.draw();
    ropeRight.draw();
    loadLeft.draw();
    loadRight.draw();
}

let a = 1;
let yInvisible = block.y + block.radius;
function start(){
    validate();
    if(loadLeft.m != loadRight.m){
        a = (g * (loadLeft.m - loadRight.m)/(loadLeft.m + loadRight.m));
        if(loadRight.y-a <= yInvisible || loadLeft.y+a <= yInvisible) {
            if(loadRight.y < loadLeft.y && loadRight.y > yInvisible){
                ctx.clearRect(0,0,innerWidth,innerHeight);
                ropeLeft.yEnd+=loadRight.y-yInvisible;
                loadLeft.y+=loadRight.y-yInvisible;
                ropeRight.yEnd=yInvisible+2;
                loadRight.y=yInvisible+2;
                drawElements();
            }
            if(loadRight.y > loadLeft.y && loadLeft.y > yInvisible){
                ctx.clearRect(0,0,innerWidth,innerHeight);
                ropeRight.yEnd+=loadLeft.y-yInvisible;
                loadRight.y+=loadLeft.y-yInvisible;
                ropeLeft.yEnd=yInvisible+2;
                loadLeft.y=yInvisible+2;
                drawElements();
            }
            return;
        }
        ctx.clearRect(0,0,innerWidth,innerHeight);
        drawElements();
        ropeRight.yEnd-=a;
        loadRight.y-=a;
        ropeLeft.yEnd+=a;
        loadLeft.y+=a;
        if(loadRight.y > yInvisible || loadLeft.y > yInvisible) requestAnimationFrame(start);
    }
}

function validate(){
    let weight1 = parseFloat(document.getElementById("weight1").value);
    let weight2 = parseFloat(document.getElementById("weight2").value);
    if(!isNaN(weight1)){
        if(weight1 > 9999 || weight1 <= 0) alert("Incorrect weight of blue load")
        else loadLeft.m = weight1;
    }
    if(!isNaN(weight2)){
        if(weight2 > 9999 || weight2 <= 0) alert("Incorrect weight of red load")
        else loadRight.m = weight2;
    }
}


/*

const img = new Image();
img.onload = ball.draw();
img.src = 'album1.jpg';

function draw() {
  const ctx = document.querySelector('canvas').getContext('2d');
  
  const pattern = ctx.createPattern(img, 'repeat');
  
  ctx.fillStyle = pattern;
  ctx.fillRect(10, 20, 30, 40);
}


var ball = {
    x: 100,
    y: 100,
    radius: 25,
    color: 'blue',
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };*/