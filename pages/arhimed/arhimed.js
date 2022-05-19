var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const g = 9.81; //Gravitational acceleration constanta

//let start = false

var water = {
    x: 0,
    y: canvas.height/2,
    density: 1000,
    color: "#0063FF",
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;//"#0063FF";
        ctx.fillRect(this.x, this.y, canvas.width, canvas.height/2);

        /*ctx.fillStyle = "rgba(100,150,185,0.5)";
        ctx.fillRect(this.x, this.y, canvas.width, canvas.height/2);
        */
        ctx.closePath();
      }
};

var waterClarity = {
    x: 0,
    y: canvas.height/2,
    density: 1000,
    color: "rgba(100,150,185,0.3)",
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;//"rgba(100,150,185,0.3)";
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
    size: 46,
    color: "black",
    draw: function(){
        this.size = Math.pow(this.volume, 1/3) * 150;        
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        ctx.fill();
        ctx.closePath();
    }
}

//alert(Math.pow(8, 1/3));

//drawElements();

function drawElements(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    addColorToGoods();
    water.draw();
    goods.draw();
    waterClarity.draw();
}

function setDensity(radio){
    const type = parseInt(radio.value);
    if(!isNaN(type)){
        goods.density = type;
    }else{
        alert("Error");
    }
    drawElements();
}

function setLiquidDensity(radio){
    const type = parseInt(radio.value);
    if(!isNaN(type)){
        water.density = type;
        waterClarity.density = type;
    }else{
        alert("Error");
    }
    drawElements();
}


function addColorToGoods(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    switch(goods.density){
        case 240: 
        //ctx.drawImage(img, goods.x, goods.y, 10, 10);
        probkaPattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = probkaPattern; 
        ctx.fill();
        goods.color = probkaPattern;
        break;
        case 700: 
        var gradient = ctx.createRadialGradient(goods.x, goods.y, goods.size / 4, goods.x, goods.y, goods.size / 2);

        // Add three color stops
        gradient.addColorStop(0, '#B5885F');
        gradient.addColorStop(.8, '#E0BC5F');
        gradient.addColorStop(1, '#8C623A');
        goods.color = gradient;
        //drawElements();
        break;
        case 2700: 
        var gradient = ctx.createLinearGradient(goods.x - 0.5 * goods.size, goods.y - 0.5 * goods.size, goods.x + goods.size * 0.5, goods.y + goods.size * 0.5);
        gradient.addColorStop(0, '#FFFAF0');
        gradient.addColorStop(.1, '#CDCDC8');
        gradient.addColorStop(.3, '#BEBEC8');//#BEBEC8
        gradient.addColorStop(.4, '#FFFAF0');
        gradient.addColorStop(.7, '#FFFAF0');
        gradient.addColorStop(.8, '#CDCDC8');
        gradient.addColorStop(.9, '#BEBEC8');
        gradient.addColorStop(1, '#FFFAF0');
        goods.color = gradient;
        break;
        case 1800: 
        goods.color = "#854232"
        break;
        case 8900: 
        var gradient = ctx.createLinearGradient(goods.x - 0.5 * goods.size, goods.y + 0.5 * goods.size, goods.x + goods.size * 0.5, goods.y - goods.size * 0.5);
        gradient.addColorStop(0, '#5B1B11');
        gradient.addColorStop(.4,'#C45C3F');
        gradient.addColorStop(.5, '#E8AB7E');//F2C593
        gradient.addColorStop(.6,'#C45C3F');//C45C3F
        gradient.addColorStop(1, '#5B1B11');
        goods.color = gradient;
        break;
    }
    switch(water.density){
    case 1000:
        water.color = "#0063FF";
        waterClarity.color = "rgba(100,150,185,0.3)";
        break;
    case 930:
        water.color = "rgba(250,250,40,0.8)";//"#DFDD00";
        waterClarity.color = "rgba(250,250,40,0.3)";
        break; 
    case 800:
        water.color = "rgba(100,150,185,0.2)";
        waterClarity.color = "rgba(100,150,185,0.1)";
        break;
    case 710:
        water.color = "rgba(223,158,0,0.3)";//"#DFDD00";
        waterClarity.color = "rgba(250,250,40,0.3)";
        break;
    case 1200:
            water.color = "rgba(100,150,185,0.4)";//"#DFDD00";
            waterClarity.color = "rgba(100,150,185,0.1)";
            break;
    }
}

var img = new Image();
var probkaPattern;
img.onload = function() {
    ctx.drawImage(img, 10, 10, goods.size-10, goods.size-10, goods.x, goods.y, goods.size-20, goods.size-20);
    probkaPattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = probkaPattern; 
    ctx.fill();
    drawElements();
};
img.src = "../../assets/probka.jpg";

let a = 0, v = 0;

let fA = water.density * g * goods.volume * goods.volumeInWater;
let fT = goods.volume * goods.density * g;

function start(){
    fA = water.density * g * goods.volume * goods.volumeInWater;
    fT = goods.volume * goods.density * g;
    let mGoods = goods.volume * goods.density; 
    a = (fT - fA) / mGoods / 100;
    if(Math.abs(fT-fA) <= 0.01){
        v = 0;
        //return;
    }
   
    if(goods.y + 0.5 * goods.size > canvas.height && a > 0){
        
        goods.y = canvas.height - 0.5 * goods.size;
        a = 0;
        v = 0;
        ctx.clearRect(0,0,innerWidth,innerHeight);
        drawElements();
        //return;
    }else if(goods.y + 0.5 * goods.size > canvas.height && a < 0){
        goods.y = canvas.height - 0.5 * goods.size;
        //a = 0;
        v = 0;
        ctx.clearRect(0,0,innerWidth,innerHeight);
        drawElements();
        //return;
    }
    if(goods.y - goods.size * 0.5 <= water.y){
        if(a <= 0){
            let heightAbove = 0;
            heightAbove = water.y - goods.y + goods.size * 0.5;
            heightAbove /= goods.size;
            goods.volumeInWater = 1 - heightAbove;
            goods.volumeOutWater = 0 + heightAbove;
            v = 20 * a;
        }else{
            let heightAbove = 0;
            heightAbove = water.y - goods.y + goods.size * 0.5;
            heightAbove /= goods.size;
            goods.volumeInWater = 1 - heightAbove;
            goods.volumeOutWater = 0 + heightAbove;
        }
    }


    v+=a;
    goods.y+=v;
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
