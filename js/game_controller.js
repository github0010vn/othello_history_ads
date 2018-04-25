var GameController = function (model, view) {
    this.model = model;
    this.view = view;

    this.enableClick = function(id) {
        document.getElementById(id).setAttribute("onClick", "handleClick(this.id)")
    }
    this.disableClick = function (id) {
        document.getElementById(id).setAttribute("onclick", "");
    }
    this.perform = function () {
        
    }
    this.enableListen = function () {
        var listMoves = this.model.getLegalMoves();
        for (var i = 0; i < listMoves.length; i++) {
            this.enableClick(listMoves[i]);
            this.view.showHint(listMoves[i]);
        }
    }
    this.disableListen = function () {
        for (var i = 0; i < 8; i++)
            for (var j = 0; j < 0; j++) {
                var id = i.toString() + j;
                this.disableClick(id);
                this.view.hideHint(id);
            }    
    }
    this.handleClick = function (id) {
        this.model.placeCounter(id);
        this.view.updateBoard(this.model.board);
        
    }
}