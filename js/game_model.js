var BOT_AI = -1, PLAYER = 1;
var isOutOfBoard = function (x, y) {
    return (x > 7 || y > 7 || x < 0 || y < 0);
}
function merge(a, b) {
    return a.concat(b.filter(function (item) {
      return a.indexOf(item) == -1;
    }));
  }
var GameModel = function (human, bot) {
    this.board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.turn = 0;
    this.players = [human, bot];
    this.legalMoves = []
    this.getPlayer = function (type) {
        if (type == BOT) return this.players[1];
        return this.players[0];
    }
    this.checkBoard = function (id, ix, iy) {
        var x = parseInt(id[0]);
        var y = parseInt(id[1]);
        var i = x + ix, j = y + iy;
        res = [];
        if (this.board[i][j] != 0) {
            while (this.board[i][j] != 0
                && this.board[i][j] != this.board[x][y]
                && !isOutOfBoard(i, j)) {
                i += ix;
                j += iy;
            }
            if (!isOutOfBoard(i, j) && this.board[i][j] == 0) {
                res.push(i.toString() + j);
            }
        }        
        return res;
    }
    this.checkLegalMove = function (id) {
        var listLegal = []
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                var newList = this.checkBoard(id, i, j);
                listLegal = merge(listLegal, newList);
            }    
        }
        return listLegal;
    }
    this.hasLegalMoves = function () {
        var listMoves = this.getLegalMoves();
        if (listMoves.length > 0) return true;
        return false;
    }
    this.getLegalMoves = function () {
        var _player = this.players[this.turn];
        var listMoves = [];
        for (var i = 0; i < _player.counter.length; i++) {
            var temp = this.checkLegalMove(_player.counter[i]);
            listMoves = merge(listMoves, temp);
        }
        return listMoves;
    }
    this.letFlip = function (x, y, ix, iy) {
        var i = x, j = y
        for (; !isOutOfBoard(i, j); i += ix, j += iy) {
            if (this.board[x][y] * this.board[i + ix][j + iy] != -1) break;
        }
        i += ix;
        j += iy;
        if (this.board[i][j] != 0) {
            for (var m = x, n = y; m != i || n != j; m += ix, n += iy) {
                this.board[m][n] = this.board[x][y];
            }
        }            
    }
    this.flip = function (x, y) {
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                this.letFlip(x, y, i, j);
            }
        }
    }
    this.placeCounter = function (_coordiantes) {
        var x = parseInt(_coordiantes[0]), y = parseInt(_coordiantes[1]);
        var player = this.players[this.turn];
        this.board[x][y] = player.type;
        this.flip(x, y);
    }
    this.isTerminal = function () {
        var isExistEmptyPlace = false;
        for (var i = 0; i < this.board.length; i++) {
            if (this.board.includes(0)) {
                isExistEmptyPlace = true;
                break;
            }
        }
        return (!isExistEmptyPlace || this.legalMoves.length == 0)
    }
}


var Player = function (type, listCounter) {
    this.type = type;
    this.counter = listCounter;
    this.getMove = function() {

    }
}

var HumanPlayer = function (type, listCounter) {
    Player.apply(this, [type, listCounter]);

}

var BotPlayer = function (type, listCounter) {
    Player.apply(this, [type, listCounter]);
}



