var BotAI = {
  disk: 'images/disk/blackbutton.png'
};

var Player = {
  disk: 'images/disk/whitebutton.png'
};

var Point = {
  x: 0,
  y: 0,
  Point: function (x, y) {
    this.x = x;
    this.y = y;
  },
  toId: function () {    
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


