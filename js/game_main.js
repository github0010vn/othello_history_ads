var model = new GameModel();
var view = new GameView();
var human = new HumanPlayer(model, view, PLAYER);
var bot = new BotPlayer(model, view, BOT_AI);

gameInit = function () {
    view.drawGrid();
    view.updateBoard(model.board);
}

humanPerform = function () {
    human.perform();
}

botPerform = function () {
    bot.perform();
    humanPerform();
}

handleClick = function (id) {
    model.placeCounter(PLAYER, id);
    view.updateBoard(model.board);
    view.updateScore(model.scores[0], 'ScorePlayer');
    human.disableListen();
    setTimeout(botPerform, 2000);
}

