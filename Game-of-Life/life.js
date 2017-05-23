
function main() {
  
  // Global Variables
  var rows = 50;
  var columns = 100;
  var gridIndex = new Array();
  var $row = $("<div />", {
    class: 'row'
  });
  var $box = $("<div />", {
    class: 'box'
  });

  // Generates the visual grid on the page
  function generateGrid() {
    for(var i = 0; i < columns; i++) {
      $row.append($box.clone());
    }
    for(var j = 0; j < rows; j++) {
      $("#wrapper").append($row.clone());
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

  console.log(indexValues);
}

$(document).ready(main);