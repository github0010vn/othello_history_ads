var Othello = function () {
    this.human = new HumanPlayer(PLAYER, ['43', '34']);
    this.bot = new BotPlayer(BOT_AI, ['33', '44']);
    this.model = new GameModel(this.human, this.bot);
    this.view = new GameView();
    this.controller = new GameController(this.model, this.view);
    this.init = function () {
        this.view.drawGrid();
        this.view.updateBoard(this.model.board);
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