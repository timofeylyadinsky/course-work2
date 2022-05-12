var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const g = 9.81; //Gravitational acceleration constanta

//let start = false

var water = {
    x: 0,
    y: canvas.height/2,
    density: 1000,
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = "#0063FF";
        ctx.fillRect(this.x, this.y, canvas.width, canvas.height/2);
        
        ctx.closePath();
      }
};


var goods = {
    x: canvas.width / 2,
    y: canvas.height * 3 /4,
    density: 240,
    volume: 0.1,
    volumeInWater: 1,
    volumeOutWater: 0,
    size: 0,
    draw: function(){
        this.size = Math.pow(this.volume, 1/3) * 100;
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        ctx.fill();
        ctx.closePath();
    }
}

//alert(Math.pow(8, 1/3));

drawElements();

function drawElements(){
    water.draw();
    goods.draw();
}

let a = 0, v = 0;

let fA = water.density * g * goods.volume * goods.volumeInWater;
let fT = goods.volume * goods.density * g;

function start(){
    fA = water.density * g * goods.volume * goods.volumeInWater;
    fT = goods.volume * goods.density * g;
    let mGoods = goods.volume * goods.density; 
    a = (fT - fA) / mGoods / 100;
    if(Math.abs(fT-fA) <= 0.0001){
        return;
    }
    //v+=a;
    if(goods.y + 0.5 * goods.size > canvas.height){
        goods.y = canvas.height - 0.5 * goods.size;
        a = 0;
        ctx.clearRect(0,0,innerWidth,innerHeight);
        drawElements();
        return;
    };
    if(goods.y - goods.size * 0.5 <= water.y){
        let heightAbove = 0;
        heightAbove = water.y - goods.y + goods.size * 0.5;
        heightAbove /= goods.size;
        goods.volumeInWater = 1 - heightAbove;
        goods.volumeOutWater = 0 + heightAbove;
    }
    goods.y+=a;
    ctx.clearRect(0,0,innerWidth,innerHeight);
    drawElements();
    requestAnimationFrame(start)
}


/*let a = 0, aTemp = 1;
let yInvisible = block.y + block.radius;
function start(){
    validate();
        if(loadRight.y > yInvisible || loadLeft.y > yInvisible) requestAnimationFrame(start);
}
*/
/*function validate(){
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
}*/
