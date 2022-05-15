/*var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var img = new Image();
               
img.src = './assets/brown-wooden-texture.jpg';

var pat;
img.onload = function() {              
    pat = ctx.createPattern(img, "repeat");
    
};
*/
//var img=document.getElementById("wood");
//var pat=ctx.createPattern(img,"repeat");


const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));
function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
    navList.classList.remove('open');
    hamburger.classList.remove('open');
  }
}
function toggleMenu() {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
/*

var img = new Image();
var pattern;
img.onload = function() {
    ctx.drawImage(img, this.x - 2 * this.size, this.y);
    pattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern; 
    ctx.fill();

};
img.src = "http://professorweb.ru/downloads/brick_tile.gif";



var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    /*ctx.fillStyle = this.color;
    ctx.fillStyle = pattern; 
   
    /*
    img.onload = function() {              
    // create pattern
    var pat = ctx.createPattern(img,'repeat');
    ctx.fillStyle = pat;
    ctx.fill();
    }
    //ctx.closePath();
    ctx.fill();
    ctx.closePath();
  }
};

var loadLeft = {
    x: 250,
    y: 150,
    size: 20,
    m: 10,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = pattern;
        ctx.rect(this.x - 2 * this.size, this.y, 4 * this.size, 4 * this.size);
        
        ctx.fill();
        //ctx.stroke();
        ctx.closePath();
    }
};






var loadLeft2 = {
    x: 350,
    y: 150,
    size: 20,
    m: 10,
    draw: function(){
        ctx.beginPath();
        ctx.fillStyle = "#0cdf23";
        ctx.rect(this.x - 2 * this.size, this.y, 4 * this.size, 4 * this.size);
        ctx.fill();
        ctx.closePath();
    }
}; 


//canvas.fillStyle = "green";
function startFunc(){
    ball.draw();
    loadLeft.draw();
//loadLeft2.x+=100;

    loadLeft2.draw();
    loadLeft2.x+=100;
    loadLeft.y+=10;

}
*/

/*
var myGamePiece;
var myObstacles = [];

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myGamePiece.newPos();    
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}*/