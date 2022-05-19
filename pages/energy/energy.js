var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const g = 9.81; //Gravitational acceleration constanta

//let start = false

var surface = {
    x: 0,
    y: canvas.height-30,
    density: 1000,
    color: "black",
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;//"#0063FF";
        ctx.fillRect(this.x, this.y, canvas.width, 20);
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


var ballLeft = {
    x: 100,
    y: surface.y - 40,
    radius: 40,
    speed: 0,
    weight: 0.1,
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.strokeStyle = "black";
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();
    }
};

var ballRight = {
    x: canvas.width - 100,
    y: surface.y - 40,
    radius: 40,
    speed: 0,
    weight: 0.1,
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "blue";
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
    }
};

//alert(Math.pow(8, 1/3));

drawElements();

function drawElements(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    surface.draw();
    ballLeft.draw();
    ballRight.draw();
    //waterClarity.draw();
}

let a = 0, v = 0;



function start(){
    //validate();


    if( ballRight.x - ballRight.radius - ballLeft.x - ballLeft.radius <= 0.1){
        //u1=(ballLeft.weight - ballRight.weight) * (ballLeft.speed) / (ballLeft.weight + ballRight.weight);
        //u2=2 * ballLeft.weight * (ballLeft.speed) / (ballLeft.weight + ballRight.weight);
        let u1 = (2 * ballRight.weight * ballRight.speed + ballLeft.speed * (ballLeft.weight - ballRight.weight)) / (ballLeft.weight + ballRight.weight);
        let u2 = (2 * ballLeft.weight * ballLeft.speed + ballRight.speed * (ballRight.weight - ballLeft.weight)) / (ballLeft.weight + ballRight.weight);
        
        ballLeft.speed = u1;
        ballRight.speed = u2;
        ballLeft.x += ballLeft.speed;
        ballRight.x += ballRight.speed;
    }else if(ballLeft.x + ballLeft.radius + ballLeft.speed > ballRight.x - ballRight.radius + ballRight.speed){
        if(ballLeft.speed > ballRight.speed){
            ballLeft.x += ballLeft.speed;
            ballRight.x = ballLeft.x + ballLeft.radius+ballRight.radius;
        }else{
           ballRight.x += ballRight.speed;
            ballleft.x = ballRight.x - ballLeft.radius - ballRight.radius;
        }

    }else{
        ballLeft.x += ballLeft.speed;
        ballRight.x += ballRight.speed;
    }
    


    



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
function validate(){
    let weight1 = parseFloat(document.getElementById("weight1").value);
    let weight2 = parseFloat(document.getElementById("weight2").value);
    let speed1 = parseFloat(document.getElementById("speed1").value);
    let speed2 = parseFloat(document.getElementById("speed2").value);
    if(!isNaN(weight1)){
        if(weight1 > 99 || weight1 <= 0) alert("Incorrect weight of blue ball")
        else ballRight.weight = weight1;
    }//else alert("Incorrect weight of blue ball");
    if(!isNaN(weight2)){
        if(weight2 > 99 || weight2 <= 0) alert("Incorrect weight of black ball")
        else ballLeft.weight = weight2;
    }//else alert("Incorrect weight of black ball");

    if(!isNaN(speed1)){
        if(speed1 > 99 || speed1 < -99) alert("Incorrect speed of blue ball")
        else ballRight.speed = speed1;
    }//else alert("Incorrect speed of blue ball");
    if(!isNaN(speed2)){
        if(speed2 > 99 || speed2 < -99) alert("Incorrect speed of black ball")
        else ballLeft.speed = speed2;
    }//else alert("Incorrect speed of black ball");

    start();
}
