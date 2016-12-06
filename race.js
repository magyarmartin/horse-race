var playerRed = document.getElementById("red");
var playerGreen = document.getElementById("green");
var playerBlue = document.getElementById("blue");
var playerYellow = document.getElementById("yellow");

document.que

function startGame() {
    playerRed.src = "img/red.gif";
    playerGreen.src = "img/green.gif";
    playerBlue.src = "img/blue.gif";
    playerYellow.src = "img/yellow.gif";

    var playerRedPos = 0;
    var playerGreenPos = 0;
    var playerBluePos = 0;
    var playerYellowPos = 0;

    function finish() {
        if (playerRedPos >= document.body.clientWidth-80) {
            playerRed.style.paddingLeft = document.body.clientWidth-80 + 'px';
            alert("A győztes a piros játékos");
        } else if (playerGreenPos >= document.body.clientWidth-80) {
            playerGreen.style.paddingLeft = document.body.clientWidth-80 + 'px';
            alert("A győztes a zöld játékos");
        } else if (playerBluePos >= document.body.clientWidth-80) {
            playerBlue.style.paddingLeft = document.body.clientWidth-80 + 'px';
            alert("A győztes a kék játékos");
        } else {
            playerYellow.style.paddingLeft = document.body.clientWidth-80 + 'px';
            alert("A győztes a sárga játékos");
        }

        playerRed.src = "img/red-still.gif";
        playerGreen.src = "img/green-still.gif";
        playerBlue.src = "img/blue-still.jpg";
        playerYellow.src = "img/yellow-still.jpg";
    }

    var id = setInterval(frame, 50);
    function frame() {
        if (playerRedPos >= document.body.clientWidth-80
            || playerGreenPos >= document.body.clientWidth-80
            || playerBluePos >= document.body.clientWidth-80
            || playerYellowPos >= document.body.clientWidth-80) {
            finish();
            clearInterval(id);
        } else {
            playerRedPos += (Math.random() * 10 + 1);
            playerRed.style.paddingLeft = playerRedPos + 'px'; 

            playerGreenPos += (Math.random() * 10 + 1);
            playerGreen.style.paddingLeft = playerGreenPos + 'px'; 

            playerBluePos += (Math.random() * 10 + 1);
            playerBlue.style.paddingLeft = playerBluePos + 'px'; 

            playerYellowPos += (Math.random() * 10 + 1);
            playerYellow.style.paddingLeft = playerYellowPos + 'px'; 
        }
    }

}


document.getElementById("start__button").addEventListener("click", function(){
    startGame();
})