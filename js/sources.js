var BotAI = {
  disk: 'images/disk/blackbutton.png'
};

var Player = {
  disk: 'images/disk/whitebutton.png'
};

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toString = function(){
    return this.x.toString() + this.y;
  }
  this.valueOf = function () {
    console.log(this.toString());
    return this.toString();
  }
};


var BOT_AI = 0, PLAYER = 1;
var boardGame = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

var diskOfPlayer = [];
var diskOfBot = [];


