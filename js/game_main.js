var Othello = function () {
    this.model = new GameModel();
    this.view = new GameView();
    this.controller = new GameController(model, view);
    this.init = function () {
        this.view.updateBoard(this.model);
        this.controller.enableListen();
    }
    this.run = function () {
        if (!model.isTerminal()) {
            if (model.turn == PLAYER) {
                this.controller.enableListen();
            }
            else {
                this.controller.disableListen();
            }
        }
    }
}