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
    this.turn = 1;
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
                console.log(ix.toString() + iy + i + j);
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
    this.getLegalMoves = function (_player) {
        var listMoves = [];
        for (var i = 0; i < _player.counter.length; i++) {
            var temp = this.checkLegalMove(_player.counter[i]);
            listMoves = merge(listMoves, temp);
        }
        return listMoves;
    }
    this.placeCounter = function (player, _coordiantes) {
        var x = parent(_coordiantes[0]), y = parent(_coordiantes[1]);
        this.flipp(player, _coordiantes);
    }
    this.flipp = function (player, _coordiantes) {

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

var bot = new BotPlayer(1, ['33', '44']);
var human = new HumanPlayer(2, ['34', '43']);
var mode = new GameModel(human, bot);
console.log(mode.getLegalMoves(human))
console.log(human.counter);


