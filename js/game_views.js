var Sprite = {
    bot: 'images/disk/whitebutton.png',
    human: 'images/disk/blackbutton.png'
  };
var GameView = function () {
    this.drawGrid = function() {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var id = i.toString() + j;
                document.getElementById(id).className = 'grid';
            }
        }
    }
    this.insertSprite = function (id, src) {
        if (!document.getElementById(id).hasChildNodes()) {
            var imgElem = document.createElement('img');
            imgElem.src = src;
            document.getElementById(id).appendChild(imgElem);
        }
        else document.getElementById(id).firstElementChild.src = src;
    
    }
    this.updateBoard = function (board) {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var id = i.toString() + j;
                if (board[i][j] != 0) {
                    var src = Sprite.human;
                    if (board[i][j] == -1) src = Sprite.bot;
                    this.insertSprite(id, src);
                }
            }
        }
    }
    this.showHint = function (id) {
        document.getElementById(id).setAttribute('class', 'hint');
    }
}