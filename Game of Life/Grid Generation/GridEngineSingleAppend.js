$(document).ready(function() {
	var Dimensions = [100,100];
	var totalCells = Dimensions[0]*Dimensions[1];
	
	
	function injectCells() {
		console.time('Time: ');
		var grid = '';
		for (var i = 0; i < totalCells; i++) {
			grid += '<div class="cell"> </div>';
		}
		document.querySelector('#grid-container').innerHTML = grid;
		console.timeEnd('Time: ');
	};
	
	function setDimen() {
		var gameContainer = document.getElementsByClassName('game-container');
		var width = gameContainer.element.style.width;
		var height = gameContainer.element.style.height;
		console.log(width + " " + height);
	};
	
	injectCells();
	setDimen();
});