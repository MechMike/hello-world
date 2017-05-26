$(document).ready(main);

function main() {
	var rows = 10;
	var columns = 10;
	var currentCell;
	
	var lifeStatus = [];
	GenGrid(rows, columns);
	naturalSelection(rows, columns);
	recolorCells();
	
	/*
	for(var a = 0; a < 10; a++) {
	setTimeout(function() {
		naturalSelection(rows, columns);
		recolorCells();
	}, 500);
	} */
	
	
	function recolorCells(){
		console.time('Recolor Cells: ');
		$('.lane').find('.alive').css('background-color', 'green')
		
		// Slower method for coloring cells
		/*
		for(var i = 0; i < rows; i++) {
			for(var j = 0; j < rows; j++) {
				currentCell = 'row-' + i + '-col-' + j;
				if(lifeStatus[i][j][1] === 1) {
					$('.'+ currentCell).toggleClass('alive');
					$('.'+ currentCell).css('background-color', 'green');
				} else {
					$('.'+ currentCell).toggleClass('dead');
					$('.'+ currentCell).css('background-color', 'none');
				}
				
			}
		}*/
		console.timeEnd('Recolor Cells: ');
	}
	
	
	
	
	
	function GenGrid(x,y) {
		console.time('Gen Grid: ');
		for(var i = 0; i < x; i++) {
			lifeStatus[i] = [];
			var currentLane;
			currentLane = 'lane-' + i;
			$('.grid-container').append('<div class="lane ' + currentLane + '"> </div>');
			for(var j = 0; j < y; j++) {
				
				currentCell = 'row-' + i + '-col-' + j;
				$('.' + currentLane).append('<div class="cell ' + currentCell + '"</div>');
				lifeStatus[i][j] = [currentCell, Math.floor(Math.random()*2)];
				
				if(lifeStatus[i][j][1] === 1) {
					$('.'+ currentCell).addClass('alive');
					// $('.'+ currentCell).css('background-color', 'green');
				} else {
					$('.'+ currentCell).addClass('dead');
					// $('.'+ currentCell).css('background-color', 'none');
				}
			}
		}
		SetDimensions(x,y);
		console.timeEnd('Gen Grid: ');
	}
	
	
	
	function naturalSelection(x,y) {
		console.time('Natural Selection time: ')
		var updateStatus = lifeStatus;
		
		for(var i = 0; i < x; i++) {
			for(var j = 0; j < y; j++) {
				var population;
				var currentStatus = lifeStatus[i][j][1];
				var north, east, south, west;
				if (i === 0) {
					north = 0;
				} else {
					north = lifeStatus[i-1][j][1];
				}
				if (i === x-1) {
					south = 0;
				} else {
					south = lifeStatus[i+1][j][1];
				}
				if (j === 0) {
					west = 0;
				} else {
					west = lifeStatus[i][j-1][1];
				}
				if (j === y-1) {
					east = 0;
				} else {
					east = lifeStatus[i][j+1][1];
					
				}
				population = north + east + south + west;
				switch(population) {
					case 0:
						updateStatus[i][j][1] = 0;
						break;
					case 1:
						updateStatus[i][j][1] = 0;
						break;
					case 2:
						updateStatus[i][j][1] = 1;
						break;
					case 3:
						updateStatus[i][j][1] = 1;
						break;
					case 4:
						updateStatus[i][j][1] = 0;
						break;
				}
				// console.log(updateStatus[i][j][1]);
				
				
			}
		}
		lifeStatus = updateStatus;
		console.timeEnd('Natural Selection time: ')
	}
	
	
	function SetDimensions(x,y) {
		console.time('Set Dimen: ');
		var displayHeight = parseInt($('.grid-container').css('height'));
		var displayWidth = parseInt($('.grid-container').css('width'));
		var windowHL = [(2*displayHeight), (2*displayWidth)];
		var vSpaceLeft = (1-1/(windowHL[0]/displayHeight))*windowHL[0];
		var laneHeight = (displayHeight / x);
		var cellHeight = laneHeight;
		var cellWidth = (displayWidth / y);
		/*
		console.log('Vertical Space Left: ' + vSpaceLeft);
		console.log('Display Height: ' + displayHeight);
		console.log('Display Width: ' + displayWidth);
		*/
		$('.cell').css({'width': cellWidth, 'height': cellHeight});
		$('.lane').css('height', laneHeight);
		$('.container').css({'margin-top': vSpaceLeft , 'margin-bottom': vSpaceLeft });
		
	}
	console.timeEnd('Set Dimen: ');
	
}

