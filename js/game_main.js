var model = new GameModel();
var view = new GameView();
var human = new HumanPlayer(model, view, PLAYER);
var bot = new BotPlayer(model, view, BOT_AI);

var defaultColorFramePlayer = 'rgba(0, 255, 85, 0.4)';
var intervalTime;
setDefaultColorFramePlayer = function (id) {
    document.getElementById(id).style.backgroundColor = defaultColorFramePlayer;
}
blinkMe = function (id) {
    selector = document.getElementById(id);
    if (selector.style.backgroundColor == defaultColorFramePlayer) {
        selector.style.backgroundColor = 'rgba(227, 16, 157, 0.329)';
    }
    else {
        selector.style.backgroundColor = defaultColorFramePlayer;
    }
}

takeTurn = function (prev, now) {
    clearInterval(intervalTime);
    setDefaultColorFramePlayer(prev);
    intervalTime = setInterval("blinkMe(" + "'" + now + "')", 300);
}

gameInit = function () {
    view.drawGrid();
    view.updateBoard(model.board);
    setDefaultColorFramePlayer('frameBotAI');
    setDefaultColorFramePlayer('framePlayer');
}

humanPerform = function () {
    human.perform();
}

botPerform = function () {
    bot.perform();
    takeTurn('frameBotAI', 'framePlayer');
    humanPerform();
}

handleClick = function (id) {
    model.placeCounter(PLAYER, id);
    view.updateBoard(model.board);
    view.updateScore(model.scores[0], 'ScorePlayer');
    this.view.updateScore(this.model.scores[1], 'ScoreBot');
    human.disableListen();
    takeTurn('framePlayer', 'frameBotAI');
    setTimeout(botPerform, 2000);
}

