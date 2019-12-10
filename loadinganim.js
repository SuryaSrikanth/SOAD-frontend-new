var ico = document.getElementById("imgbir");
var ico2 = document.getElementById("imgbir");
var ico3 = document.getElementById("imgbir");

function randomColor() {
  var colR = RandomHexCode();
  var colG = RandomHexCode();
  var colB = RandomHexCode();
  return "#" + colR + colG + colB;
}

function RandomHexCode() {
  var randVal = Math.floor(Math.random() * 10) + 4;
  switch (randVal) {
    case 0:
      return "00";
    case 1:
      return "11";
    case 2:
      return "22";
    case 3:
      return "33";
    case 4:
      return "44";
    case 5:
      return "55";
    case 6:
      return "66";
    case 7:
      return "77";
    case 8:
      return "88";
    case 9:
      return "99";
    case 10:
      return "AA";
    case 11:
      return "BB";
    case 12:
      return "CC";
    case 13:
      return "DD";
    case 14:
      return "EE";
    case 15:
      return "FF";
  }
}

let Particle = function(Xpos, Ypos, Xvel, Yvel) {
  this.Xpos = Xpos;
  this.Ypos = Ypos;
  this.Xvel = Xvel;
  this.Yvel = Yvel;
  this.color = color;
  this.alive = true;
};

Particle.prototype.advance = function() {
  this.Xpos = this.Xpos + this.Xvel;
  this.Ypos = this.Ypos + this.Yvel;

  if (
    this.Xpos <= 0 ||
    this.Xpos >= 550 + Math.random() * 50 ||
    this.Ypos <= 0 ||
    this.Ypos >= 700 + Math.random() * 50
  ) {
    this.alive = false;
  }
};

Particle.prototype.addAcceleration = function(Xacc, Yacc) {
  this.Xvel += Xacc;
  this.Yvel += Yacc;
};
Particle.prototype.isAlive = function() {
  return this.alive;
};

Particle.prototype.draw = function(context) {
  // console.log(`X: ${this.Xpos}, Y: ${this.Ypos}`);
  context.beginPath();

  //  context.drawImage(document.getElementById('imgbir'),this.Xpos, this.Ypos,50,50);

  context.arc(this.Xpos, this.Ypos, 5, 0, 2 * Math.PI);
  context.arc(1500 - this.Xpos, 500 - this.Ypos, 5, 0, 2 * Math.PI);

  context.fillStyle = this.color;
  context.fill();
};

var playAnimation = null;
function main() {
  var PList = [];
  // document;
  playAnimation = setInterval(function() {
    mainloop(PList);
  }, 20);
}

function updateimage() {
  document.getElementById("imgchik2").src = "./dress2.jpg";
}

function mainloaded() {
  if (playAnimation){
    clearInterval(playAnimation);
  }
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0, 0, 1500, 1500);
  ctx.clearRect(0, 0, 1500, 1500);
  
  ctx.drawImage(document.getElementById("imgchik"), 0, 0, 762 / 2, 1100 / 2);
  ctx.drawImage(document.getElementById("imgchik2"), 550, 0, 762 / 2, 1100 / 2);
  ctx.drawImage(
    document.getElementById("imgchik3"),1050, 0, 762 / 2, 1100 / 2);
}
function maininitial() {
  if (playAnimation) {
    clearInterval(playAnimation);
  }
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0, 0, 1500, 1500);
  ctx.drawImage(document.getElementById("imgchik"), 0, 0, 762 / 2, 1100 / 2);
  // ctx.drawImage(document.getElementById('imgchik2'),550, 0,762/2,1100/2);
  ctx.drawImage(document.getElementById("imgchik3"), 750, 0, 762 / 2, 1100 / 2);
}
function mainloop(Plist) {
  spawnloop(Plist);
  advanceloop(Plist);
  renderloop(Plist);
}

function spawnloop(Plist) {
  for (var i = 0; i < 1; i++) {
    var rand1 = Math.random() * 1 + 5;
    var rand2 = Math.random() * 1 + 5;
    var posrandx = Math.random() * 500;
    var posrandy = Math.random() * 500;
    this.color = randomColor();
    //        console.log(rand1);
    Plist.push(new Particle(10 + posrandx, 10 + posrandy, rand1, 0));
  }
}

function advanceloop(Plist) {
  for (var i = Plist.length - 1; i >= 0; i--) {
    var currentP = Plist[i];
    // console.log(currentP.Xpos);
    currentP.advance();
    // console.log(currentP.Xpos);
    currentP.addAcceleration(0, 0);

    if (!currentP.isAlive()) {
      Plist.splice(i, 1);
    }
  }
}

function renderloop(Plist) {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0, 0, 1500, 1500);
  ctx.drawImage(document.getElementById("imgchik"), 0, 0, 762 / 2, 1100 / 2);
  ctx.drawImage(document.getElementById("imgchik2"), 550, 0, 762 / 2, 1100 / 2);
  ctx.drawImage(
    document.getElementById("imgchik3"),
    1050,
    0,
    762 / 2,
    1100 / 2
  );
  for (var i = 0; i < Plist.length; i++) {
    Plist[i].draw(ctx);
  }
}
