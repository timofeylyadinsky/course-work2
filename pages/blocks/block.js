var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


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
        ctx.closePath();
        ctx.stroke();
    }
}

var loadLeft = {
    x: ropeLeft.x,
    y: ropeLeft.yEnd,
    size: 20,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size,)
        ctx.closePath();
    }
} 

var loadRight = {
    x: ropeRight.x,
    y: ropeRight.yEnd,
    size: 20,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size,)
        ctx.closePath();
    }
} 

block.draw();
ropeLeft.draw();
ropeRight.draw();
loadLeft.draw();
loadRight.draw();


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