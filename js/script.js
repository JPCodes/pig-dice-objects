function Player(playerN) {
  this.playerName = playerN;
	this.roundScore = 0;
	this.gameScore = 0;
}

Player.prototype.roundScoreReset = function() {
  this.roundScore = 0;
  return this.roundScore;
};

Player.prototype.getGameScore = function() {
  return this.gameScore;
}

Player.prototype.getRoundScore = function() {
  return this.roundscore;
}

Player.prototype.getName = function() {
  return this.playerName;
}

// Constructor to create this:
// player 1 = {
// scoreRound: 34,
// scoreGame : 78
//};

var player1Name;
var player2Name;
var roundScore = 0;
var aRollTotal = 0;
var bRollTotal = 0;
var i = 2;
var diceRoll = function () {
    var x = Math.floor((Math.random() * 6) + 1);
    return x;
}

var playerTurns = function() {
	if (i % 2 === 0) {
			$("#turnOver").text("");
			$("#roll-display").html("");
			aRollTotal += roundScore;
			$("#playera-display").text(aRollTotal);
			$("#playerb-display").text(bRollTotal);
			console.log(aRollTotal + "A");

	} else if (i % 2 === 1) {
			 $("#turnOver").text("");
			 $("#roll-display").html("");
			 bRollTotal += roundScore;
			 $("#playerb-display").text(bRollTotal);
			 console.log(bRollTotal + "B");
	 }
}
var playerDisplayer = function() {
	if (i % 2 === 0) {

			$("#playerDisplayerParent").show();
			$("#playerDisplayer").text("Player B");


	} else if (i % 2 === 1) {

			 $("#playerDisplayerParent").show();
			 $("#playerDisplayer").text("Player A");

	 }
}


	$(document).ready(function() {

    $("form#nameEntry").submit(function(event) {
      event.preventDefault();

      var player1Name = $("#player1Name").val();
      var player2Name = $("#player2Name").val();

      player1 = new Player(player1Name);
      player2 = new Player(player2Name);

      $("form#nameEntry").hide();
      $("form#gameUI").show();

      $("#playeraName").text(player1.getName());
      $("#playerbName").text(player2.getName());
    });

			$("#roll").click(function(event) {
				$("#endTurn").show();
				$("#turnOver").text("");
				var rollAction = diceRoll();

				$("#roll-display").text(rollAction);

				roundScore = roundScore + rollAction;

				if (rollAction === 1) {
					roundScore = 0;
					$("#turnOver").text("Your turn is over");
					$("#endTurn").hide();
					playerDisplayer();
					i++;
				}
				$("#roundTotal").text(roundScore);

				$("#playerb-display").text(bRollTotal);
				event.preventDefault();
			});

			$("#startGame").click(function() {
				$("#playerDisplayerParent").show();
 			 	$("#playerDisplayer").text("Player A");
				$("#startGame").hide();
				$("#endTurn").show();
				$("#roll").show();
				playerTurns();
			});


			$("#endTurn").click(function() {

				playerTurns();
				playerDisplayer();
				i++;
				roundScore = 0;


				if (aRollTotal >= 100 || bRollTotal >= 100){
					$("#turnOver").text("GAME OVER");
					$("#playera-display").text("0");
					$("#playerb-display").text("0");
					$("#roundTotal").text("0");
					$("#startGame").show();
					$("#endTurn").hide();
					$("#roll").hide();
					i = 2;
					aRollTotal = 0;
					bRollTotal = 0;
				}
			});

	});
