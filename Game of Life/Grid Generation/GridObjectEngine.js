$(document).ready(function() {

	// OBJECT DEFINITIONS
	var Grid = {
		Rows: 10,
		Columns: 10,
		/*
		setSize: function() {
			this.Rows = receiveInput(); // Undefined function for retrieving number of Rows & Columns from user
			this.Columns = receiveInput();
		} */
		cellStat: function(x,y) {
			return lifeStat[x][y];
		},
		generate: function() {
			var convertedHTML = '';
			// var htmlString = '';
			for(var i = 0; i < Grid.Rows; i++) {
				htmlGrid[i][0] = '<div class="lane lane' + i + '">';
				convertedHTML += htmlGrid[i][0];
				// htmlString += '<div class="lane">';
				for(var j = 0; j <= Grid.Columns; j++) {
					htmlGrid[i][j+1] = '<div class="cell"> </div>';
					convertedHTML += htmlGrid[i][j+1];
					// htmlString += '<div class="cell"> </div>';
				}
				htmlGrid[i][Grid.Columns + 1] = '</div>';
				convertedHTML += htmlGrid[i][Grid.Columns + 1];
				// htmlString += '</div>';
			}
			console.log(htmlGrid[1][1]);
			$('.grid-container').append(convertedHTML);
			// $('.grid-container').append(htmlString);
			applyClass();
		},
		statGen: function() {
			for(var x = 0; x < this.Rows; x++) {
				for(var y = 0; y < this.Columns; y++) {
					lifeStat[x][y] = Math.floor(Math.random()*2);
				}
			}
		},
		color: function() {
			$('.lane').find('active').css("background-color", "green");
		}
		
	};
	
	// Function for creating a blank matrix populated by empty strings
	function newMatrix() {
		var name = [];
		for(var x = 0; x < Grid.Rows; x++) {
			name[x] = []
			for(var y = 0; y < Grid.columns; y++) {
				name[x][y] = '';
			}
		}
		return name;	
	};
	
	// Loops through the individual cells of a matrix and performs a command for each cell
	function matrixLoop(command, x, y) {
		for(var i = 0; i < Grid.Rows; i++) {
			for(var j = 0; j < Grid.Columns; j++) {
				command;
			}
		}
	};
	
	function applyClass() {
		for(var i = 0; i <= Grid.Rows; i++) {
			for(var j = 0; j <= Grid.Columns; j++) {
				if(lifeStat[i][j] === 1) {
					var currentString = htmlGrid[i+1][j+1]
					console.log(currentString);
					currentString.replace('cell', 'cell active');
					
				} 
			}
		}
	};
	
	// FUNCTION DECLARATIONS
	var lifeStat = newMatrix();
	var htmlGrid = newMatrix();
	console.log(htmlGrid[1][1]);
	Grid.statGen();
	console.time('Gen Time: ')
	Grid.generate();
	console.timeEnd('Gen Time: ');
	
});
	
	