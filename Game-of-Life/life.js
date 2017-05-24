
function main() {
  
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
 
  

  // Generates the visual grid on the page
  function generateGrid() {
    for(var i = 0; i < columns; i++) {
      $lane.append($box.clone());
    }
    for(var j = 0; j < rows; j++) {
      $("#wrapper").append($lane.clone());
    }
  }

  // Creates a grid that stores the life status of each cell
  function createGridIndex() {
    for(i = 0; i < rows; i++) {
      gridIndex[i] = new Array();
      for(j = 0; j < columns; j++) {
        gridIndex[i][j] = 0;
     }
    }
    return gridIndex;
  }

  var indexValues = createGridIndex();
  generateGrid();
  
  var htmlText = parseInt($('html').css('font-size'));
  var boxWidth = $('.lane .box').css('width');
  var boxHeight = $('.lane .box').css('height');
  var laneWidth = parseInt($('.lane').css('width'));
  var laneHeight = $('.lane').css('height');
  //console.log(boxWidth);
  //console.log(boxHeight);
  //console.log(laneWidth);
  //console.log(laneHeight);
  //console.log(htmlText);
  //boxWidth = laneWidth / (columns);
  //boxHeight = 25*htmlText/rows;
  //laneHeight = boxHeight;
  $('.lane .box').css('width', boxWidth);
  $('.lane .box').css('height', boxHeight);
  $('.lane').css('height', laneHeight);
  //console.log(boxWidth);
  //console.log(boxHeight);

  //console.log(indexValues);
}

$(document).ready(main);