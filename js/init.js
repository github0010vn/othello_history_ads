var imported = document.createElement('script');
imported.src = 'js/sources.js';
document.head.appendChild(imported);


function drawBoardGame() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(16, 227, 69)";
    }
  }
}

function insertSprite(id, player) {
  var newImg = document.createElement('img');

  //if the current player is BotAI
  if (player == BOT_AI) {
    newImg.src = 'images/disk/whitebutton.png';
  }
  else newImg.src = 'images/disk/blackbutton.png';

  document.getElementById(id).appendChild(newImg);
}

function drawInitState() {
  insertSprite('33', BOT_AI);
  boardGame[3][3] = 0;
  diskOfBot.push(new Point(3, 3));

  insertSprite('44', BOT_AI);
  boardGame[4][4] = 0;  
  diskOfBot.push(new Point(4, 4));
  
  insertSprite('34', PLAYER);
  boardGame[3][4] = 1;
  diskOfPlayer.push(new Point(3, 4));

  insertSprite('43', PLAYER);
  boardGame[4][3] = 1;
  diskOfPlayer.push(new Point(4, 3));

  /*
  document.getElementById("i44").src = Player.disk;
  document.getElementById("i55").src = Player.disk;
  document.getElementById("i45").src = BotAI.disk;
  document.getElementById("i54").src = BotAI.disk;
  */
}
