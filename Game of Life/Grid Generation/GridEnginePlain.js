// Attempts to generate a grid via plain Javascript, no jQuery appends, to reduce load time

$(document).ready(function() {
	var Rows = 100;
	var Columns = 100;
	
	var GridJS = function() {
		console.time('Gen time: ')
		var elementGrid = [];
		for (var i = 0; i < Rows*Columns; i++ ) {
			elementGrid.push('<div class="cell"> </div>');
		}
		document.getElementById("grid-container").innerHTML = elementGrid.join('');
		console.timeEnd('Gen time: ');
	};
	
	var CellDimensions = function() {
		console.time('Dimensions Time: ');
		// var gridClass = document.getElementsByClassName('grid-container');
		var gridHeight = parseInt(retreive('grid-container', 'height'));
		console.log('Grid Height: ' + gridHeight);
		var gridWidth = parseInt(retreive('grid-container', 'width'));
		var cellHeight = gridHeight / Rows;
		var cellWidth = gridWidth / Columns;
		console.log(cellHeight + " " + cellWidth);
		document.getElementsByClassName("cell").style.height = cellHeight + "px";
		document.getElementsByClassName("cell").style.width = cellWidth + "px";
		console.timeEnd('Dimensions Time: ');
	};
	
	function retreive(selector, property) {
	    var element = document.getElementById(selector);
	    var propertyValue = window.getComputedStyle(element, null).getPropertyValue(property);
	    // document.getElementByClassName(selector).innerHTML = propertyValue;
		return propertyValue;
	};
	
	
	
	GridJS();
	CellDimensions();
});