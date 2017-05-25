

// Global Variables
var rows = 10;
var columns = 10;
var gridIndex = new Array(); // Matrix for holding current generation life status
var childGrid = new Array(); // Matrix for holding next generation life status
var $lane = $("<div />", { // NOTE: b/c Bootstrap uses the "rows" class, "lane" was used instead; lane means grid row
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
    //console.log(indexValues); // Log for development
	//console.log(indexValues.length);
	naturalSelection();
	printColors();
	
	// Local Functions for "main"
		
		/*
		// Generates the visual grid on the page
		function generateGrid() {
			for(var i = 0; i < columns; i++) {
     		 $lane.append($box.clone());
    	  	}
     	  	for(var j = 0; j < rows; j++) {
    		 $("#wrapper").append($lane.clone());
   	  	 	}
			adjustDimensions();
			printColors();
  	  	}*/
	
		// Secondary Grid Generator
		function generateGrid() {
			for(var i = 0; i < rows; i++) {
				$('#wrapper').append($lane)
				for(var j = 0; j < columns; j++) {
					var coordClass;
					coordClass = 'rw-' + i +'-col-' + j;
					$('#wrapper:nth-child(' + (i + 1) + ')').append($box);
					$('#wrapper:nth-child(' + (i + 1) + ')').children(':nth-child('+ (j + 1) +')').addClass(coordClass);
				}
			}
		}
		
		// Rewrites the dimensions of the grid based on the user's viewing window
		function adjustDimensions() {
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
		}
		
		// Applies color to cells based on their index value
		function printColors() {
			for(var i = 1; i < rows; i++) {
				for(var j = 1; j < columns; j++) {
					var cellAlive = gridIndex[i][j];
					if(cellAlive === 1) {
						var currentCell = '#wrapper:nth-child(' + j + ') .lane:nth-child(' + i + ')';
						// console.log(currentCell);
						//console.log('This is row ' + j + ' column ' + i);
						$(currentCell).css('background-color', 'green');
						console.log('Green printed at' + i + ', ' + j);
					}
				}
			}
		} 
		
	    // Creates a data grid that stores the life status of each cell
	    function createGridIndex() {
	      for(i = 0; i < rows; i++) {
	        gridIndex[i] = new Array();
	        for(j = 0; j < columns; j++) {
	          gridIndex[i][j] = Math.floor(Math.random()*2);
	       	}
	      }
	      return gridIndex;
	    }
		
		// Checks the index value of a cell's neighbor and returns them 
		function checkNeighbors(i, j) {
			var north;
			var east;
			var south;
			var west;
			
			if (i === 0) {
				north = 0;
			} else {
				north = gridIndex[i-1][j];
			}
			
			if (j === columns - 1) {
				east = 0;
			} else {
				east = gridIndex[i][j+1];
			}
			
			if (i === rows - 1) {
				south = 0;
			} else {
				south = gridIndex[i+1][j];
			}
			
			if (j === 0) {
				west = 0;
			} else {
				west = gridIndex[i][j-1];
			}
			
			var population = north + east + south + west;
			return population;
		}
		
		// Determines new life status of a cell based on its surrounding population
		function naturalSelection() {
			childGrid = gridIndex; 
			for(var i = 0; i < rows; i++) {
				for(var j = 0; j < columns; j++) {
					switch(checkNeighbors(i,j)) {
						// No neighbors
						case 0:
							childGrid[i][j] = 0;
							break;
						// One neighbor
						case 1:
							childGrid[i][j] = 0;
							break;
						// Two neighbors
						case 2:
							childGrid[i][j] = 1;
							break;
						// Three neighbors
						case 3:
							childGrid[i][j] = 1;
							break;
						// Four neighbors
						case 4:
							childGrid[i][j] = 0;
							break;
						default: 
							break;
					}
				}
			}
			gridIndex = childGrid;
		}
}
