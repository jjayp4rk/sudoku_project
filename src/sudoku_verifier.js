export function sudokuVerifier({ problem, solution }) {
  // TODO implement this function
  var status = '';
  var invalidIndexes = [];
  var existingIndexes = [];

  for (var i = 0; i < problem.length; i++) {
    if (problem[i] != null) {
      existingIndexes.push(i);
    }
  }

  const valueIndexPair = data => {
    var tempArray = [];
    for (var i = 0; i < data.length; i++) {
      tempArray.push({
        num: data[i],
        index: i
      });
    }
    return tempArray;
  };

  const tempSolution = valueIndexPair(solution);

  // Organize data function
  const organize = data => {
    var _rows = [];
    var _cols = [];
    var _grid = [];
    for (var i = 0; i < 9; i++) {
      _cols.push([]);
      _grid.push([]);
    }

    for (var i = 0, j = data.length, chunk = 9; i < j; i += chunk) {
      // Create rows array
      var row = data.slice(i, i + chunk);
      _rows.push(row);
    }

    for (var r = 0; r < 9; r++) {
      for (var c = 0; c < 9; c++) {
        // Create columns array
        _cols[r][c] = _rows[c][r];

        // Create 3x3 Grid Arrays
        var gridRow = Math.floor(r / 3);
        var gridCol = Math.floor(c / 3);
        var gridIndex = gridRow * 3 + gridCol;

        _grid[gridIndex].push(_rows[r][c]);
      }
    }
    return [_rows, _cols, _grid];
  };

  // Validators
  const _validate = data => {
    for (var r = 0; r < data.length; r++) {
      var numRow = data[r].filter(number => number.num !== null);
      var _data = numRow.sort(function(a, b) {
        return a.num - b.num;
      });
      for (var c = 0; c < _data.length - 1; c++) {
        var firstObj = _data[c];
        var secondObj = _data[c + 1];
        if (firstObj.num == secondObj.num) {
          invalidIndexes.push(firstObj.index);
          invalidIndexes.push(secondObj.index);
        }
      }
    }
  };

  // Remove duplicate indexes from the invalid indexes
  const removeDuplicates = data => {
    var uniqArray = [];
    for (var i = 0; i < data.length; i++) {
      if (uniqArray.indexOf(data[i]) == -1) {
        uniqArray.push(data[i]);
      }
    }
    return uniqArray;
  };

  // Check to see if the solution is complete
  const _isComplete = data => {
    for (var i = 0; i < data.length; i++) {
      if (data[i] == null) {
        return false;
      }
    }
    return true;
  };

  const removeIndexes = data => {
    for (var i = 0; i < data.length; i++) {
      var existingIndex = data[i];
      if (invalidIndexes.includes(existingIndex)) {
        var j = invalidIndexes.indexOf(existingIndex);
        invalidIndexes.splice(j, 1);
      }
    }
  };

  const _isValid = () => {
    var organized = organize(tempSolution);
    _validate(organized[2]);
    _validate(organized[1]);
    _validate(organized[0]);
    invalidIndexes = removeDuplicates(invalidIndexes);
    removeIndexes(existingIndexes);
    if (invalidIndexes.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  if (_isValid()) {
    if (_isComplete(solution)) {
      status = 'valid';
    } else {
      status = 'incomplete';
    }
  } else {
    status = 'invalid';
  }

  return {
    status,
    invalidIndexes
  };
}
