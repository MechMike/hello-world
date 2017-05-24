

// Global Variables
var rows = 100;
var columns = 100;
var gridIndex = new Array();
var $lane = $("<div />", {
  class: 'lane'
});
var $box = $("<div />", {
  class: 'box'
});

// Global Declaration
$(document).ready(main);

// Global Function
function main() {
	
	// Local Declarations for "main"
    var indexValues = createGridIndex();
    generateGrid();
    console.log(indexValues);
	
	// var htmlText = parseInt($('html').css('font-size'));
	var displayHeight = parseInt($('#game-display').css('height'));
	var boxWidth = $('.lane .box').css('width');
	var boxHeight = $('.lane .box').css('height');
	var laneWidth = parseInt($('.lane').css('width'));
	var laneHeight = $('.lane').css('height');
	boxWidth = laneWidth / (columns);
	boxHeight = displayHeight/rows;
	laneHeight = boxHeight;
	
	$('.lane .box').css('width', boxWidth);
	$('.lane .box').css('height', boxHeight);
	$('.lane').css('height', laneHeight);
	
	/* // Development Console Logging
	console.log(boxWidth);
	console.log(boxHeight);
	console.log(displayHeight); */
	
	// Local Functions for "main"
	
		// Generates the visual grid on the page
		function generateGrid() {
			for(var i = 0; i < columns; i++) {
     		 $lane.append($box.clone());
    	  	}
     	  	for(var j = 0; j < rows; j++) {
    		 $("#wrapper").append($lane.clone());
   	  	 	}
  	  	}
		
	    // Creates a data grid that stores the life status of each cell
	    function createGridIndex() {
	      for(i = 0; i < rows; i++) {
	        gridIndex[i] = new Array();
	        for(j = 0; j < columns; j++) {
	          gridIndex[i][j] = 0;
	       	}
	      }
	      return gridIndex;
	    }
}
