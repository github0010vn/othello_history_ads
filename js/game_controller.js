var MAX_SIZE_ADS = 10;
var minADS = [];
var maxADS = [];

insertADS = function (ads, element) {
    len = ads.length;
    if (len >= MAX_SIZE_ADS) {
        ads.splice(len - 1, 1);
    }
    ads.unshift(element);
}
moveToFront = function (ads, element) {
    var i = ads.indexOf(element);
    ads.splice(i, 1);
    ads.unshift(element);
}

filterMovesWithADS = function (ads, listMoves) {
    for (var i = ads.length - 1; i >= 0; i--) {
        elem = ads[i];
        index = listMoves.indexOf(elem);
        if (index != -1) {
            listMoves.splice(index, 1);
            listMoves.unshift(elem);
        }
    }
}

queryADS = function (ads, element) {
    if (ads.indexOf(element) != -1) {
        moveToFront(ads, element);
    }
    else insertADS(ads, element);
}

var Player = function (model, view, type) {
    this.type = type;
    this.model = model;
    this.view = view;
}



var HumanPlayer = function (model, view, type) {
    Player.apply(this, [model, view, type]);
    this.enableClick = function(id) {
        document.getElementById(id).setAttribute("onClick", "handleClick(this.id)")
    }
    this.disableClick = function (id) {
        document.getElementById(id).setAttribute("onClick", "");
    }
    this.disableListen = function () {
        for (var i = 0; i < 8; i++)
        for (var j = 0; j < 8; j++) {
                var id = i.toString() + j;
                this.disableClick(id);
                this.view.hideHint(id);
            }   
        this.model.turn = BOT_AI;
    }
    this.handleClick = function (id) {
        this.model = this.model.placeCounter(this.type, id);
        this.view.updateBoard(this.model.board);
        this.view.updateScore(this.model.scores[0], 'ScorePlayer');
        this.disableListen();
    }
    this.perform = function () {
        //this.model.turn = 0;
        var listMoves = this.model.getLegalMoves(this.type);
        for (var i = 0; i < listMoves.length; i++) {
            this.enableClick(listMoves[i]);
            this.view.showHint(listMoves[i]);
        }
    }
}

var BotPlayer = function (model, view, type) {
    Player.apply(this, [model, view, type]);
    
    this.perform = function (newModel) {
        ////this.model.turn = 0;
        move = this.decide();
        this.model.placeCounter(this.type, move);
        this.view.updateBoard(this.model.board);
        this.view.updateScore(this.model.scores[1], 'ScoreBot');
        this.model.turn = PLAYER;
    }
    this.decide = function () {
        var depth = 10, bestScore = - INFINITY, bestMove = null;
        var listMoves = this.model.getLegalMoves(this.type);
        cpyModel = this.model.cloneObj();
        for (var i = 0; i < listMoves.length; i++) {
            move = listMoves[i];
            var moveScore = this.getMinValue(this.type * -1, cpyModel.placeCounter(this.type, move), depth - 1, -INFINITY, INFINITY);
            if (bestMove == null || bestScore < moveScore) {
                bestScore = moveScore;
                bestMove = move;
            }
        }
        return bestMove;
    }

    this.getMinValue = function (playerType, model, depth, alpha, beta) {
        if (depth == 0) {
            if (playerType == BOT_AI)
                return model.scores[1];
            return model.scores[0];
        }
        var worst = INFINITY;
        cpyModel = model.cloneObj();
        listMoves = model.getLegalMoves(playerType);
        filterMovesWithADS(minADS, listMoves);
        for (var i = 0; i < listMoves.length; i++) {
            var move = listMoves[i];
            var moveScore = this.getMaxValue(playerType * -1, model.placeCounter(playerType, move), depth - 1, alpha, beta);
            worst = Math.min(worst, moveScore);
            beta = Math.min(beta, moveScore);
            if (beta <= alpha) {
                queryADS(minADS, move);
                return worst;    
            }
        }
        return worst;
    }
    this.getMaxValue = function (playerType, model, depth, alpha, beta) {
        if (depth == 0) {
            if (playerType == BOT_AI)
                return model.scores[1];
            return model.scores[0];
        }
        var best = INFINITY;
        cpyModel = model.cloneObj();
        listMoves = model.getLegalMoves(playerType);
        filterMovesWithADS(maxADS, listMoves);
        for (var i = 0; i < listMoves.length; i++) {
            var move = listMoves[i];
            var moveScore = this.getMinValue(playerType * -1, model.placeCounter(playerType, move), depth - 1, alpha, beta);
            best = Math.max(best, moveScore);
            alpha = Math.max(alpha, moveScore);
            if (beta <= alpha) {
                queryADS(maxADS, move);
                return best;    
            }
        }
        return best;
    }

}