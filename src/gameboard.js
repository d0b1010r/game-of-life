export function getNextGameboard(gameboard) {
  return gameboard.map((gameboardRow, rowIndex) => {
    return gameboardRow.map((field, columnIndex) => {
      return nextField(gameboard, rowIndex, columnIndex);
    });
  });
}

function nextField(gameboard, rowIndex, columnIndex) {
  /*
    For a space that is populated:
      Each cell with one or no neighbors dies, as if by solitude.
      Each cell with four or more neighbors dies, as if by overpopulation.
      Each cell with two or three neighbors survives.
    For a space that is empty or unpopulated
      Each cell with three neighbors becomes populated.
  */

  if (isFieldAlive(gameboard, rowIndex, columnIndex)) {
    if (countNeighbors(gameboard, rowIndex, columnIndex) <= 1) return 0;
    else if (countNeighbors(gameboard, rowIndex, columnIndex) >= 4) return 0;
    else if (
      countNeighbors(gameboard, rowIndex, columnIndex) === 2 ||
      countNeighbors(gameboard, rowIndex, columnIndex) === 3
    )
      return 1;
  } else {
    return countNeighbors(gameboard, rowIndex, columnIndex) === 3 ? 1 : 0;
  }
}

function countNeighbors(gameboard, rowIndex, columnIndex) {
  return (
    (isFieldAlive(gameboard, rowIndex - 1, columnIndex - 1) ? 1 : 0) +
    (isFieldAlive(gameboard, rowIndex - 1, columnIndex) ? 1 : 0) +
    (isFieldAlive(gameboard, rowIndex - 1, columnIndex + 1) ? 1 : 0) +
    (isFieldAlive(gameboard, rowIndex, columnIndex - 1) ? 1 : 0) +
    (isFieldAlive(gameboard, rowIndex, columnIndex + 1) ? 1 : 0) +
    (isFieldAlive(gameboard, rowIndex + 1, columnIndex - 1) ? 1 : 0) +
    (isFieldAlive(gameboard, rowIndex + 1, columnIndex) ? 1 : 0) +
    (isFieldAlive(gameboard, rowIndex + 1, columnIndex + 1) ? 1 : 0)
  );
}

function isFieldAlive(gameboard, rowIndex, columnIndex) {
  // lazy boundary checking
  try {
    return isFieldValueAlive(gameboard[rowIndex][columnIndex]);
  } catch (err) {
    return false;
  }
}

export function isFieldValueAlive(fieldValue) {
  return fieldValue === 1 ? true : false;
}
