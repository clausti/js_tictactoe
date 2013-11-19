(function() {
	var TTT = window.TTT = window.TTT || {};

	TTT.coordMap = {
									"0": [0, 0],
									"1": [0, 1],
									"2": [0, 2],
									"3": [1, 0],
									"4": [1, 1],
									"5": [1, 2],
									"6": [2, 0],
									"7": [2, 1],
									"8": [2, 2]
	};

	TTT.parseIdToCoord = function(squareId) {
		return TTT.coordMap[squareId];
	};

	TTT.Game.prototype.checkForWinner = function() {
		var gameWinner = this.winner()
		// gameWinner = _(gameWinner).capitalize();

		if (gameWinner) {
			gameWinner = TTT.getPlayerColor(gameWinner);
			$(".marquee").text(gameWinner + " Wins!!");
			$("div.board").off('click');
		}
	};

	TTT.getPlayerColor = function(mark) {
		return (mark === "x") ? "red" : "blue";
	};

})();


$(document).ready( function() {

	var game = new TTT.Game();


	$('div.board').on('click', 'div', function(e) {

			var element = $(e.target);
			var coords = TTT.parseIdToCoord(element.attr('data-id'));
			// debugger

			if (game.valid(coords) && game.isEmptyPos(coords)) {
				var player = TTT.getPlayerColor(game.player);
	      game.move(coords);
				element.toggleClass('square-' + player)

	    } else {
	      TTT.quake();
	    }

			game.checkForWinner();

	})

});