var imported = document.createElement('script');
imported.src = 'js/sources.js';
document.head.appendChild(imported);


function drawBoardGame() {
  for (var i = 1; i < 9; i++) {
    for (var j = 1; j < 9; j++) {
      document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(16, 227, 69)";
    }
  }
}

function drawInitState() {
  var newWhiteDisk = document.createElement('img');
  newWhiteDisk.src = 'images/disk/whitebutton.png';
  document.getElementById('44').appendChild(newWhiteDisk);

  newWhiteDisk = document.createElement('img');
  newWhiteDisk.src = 'images/disk/whitebutton.png';
  document.getElementById('55').appendChild(newWhiteDisk);

  var newBlackDisk = document.createElement('img');
  newBlackDisk.src = 'images/disk/blackbutton.png';
  document.getElementById('45').appendChild(newBlackDisk);

  newBlackDisk = document.createElement('img');
  newBlackDisk.src = 'images/disk/blackbutton.png';
  document.getElementById('54').appendChild(newBlackDisk);
  /*
  document.getElementById("i44").src = Player.disk;
  document.getElementById("i55").src = Player.disk;
  document.getElementById("i45").src = BotAI.disk;
  document.getElementById("i54").src = BotAI.disk;
  */
}
