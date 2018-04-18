var BotAI = {
  disk: 'images/disk/blackbutton.png'
};

var Player = {
  disk: 'images/disk/whitebutton.png'
};

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.toId = function(){
    return (this.x + 1).toString() + (this.y + 1);
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


