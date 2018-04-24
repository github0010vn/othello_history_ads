var BotAI = {
  disk: 'images/disk/blackbutton.png'
};

var Player = {
  disk: 'images/disk/whitebutton.png'
};

function merge(a, b) {
  return a.concat(b.filter(function (item) {
    return a.indexOf(item) == -1;
  }));
}


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


