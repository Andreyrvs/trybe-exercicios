function chessPieces(a) {
  if (a == 'pawn') {
    console.log(a + ' -> ' + ' Walk only forward');
  } else if (a == 'knight') {
    console.log(a + ' -> ' + ' Walks in L shape');
  } else if (a == 'bishop') {
    console.log(a +' Walk on all diagonals');
  } else if (a == 'rook') {
    console.log(a + ' -> ' + 'Walks in the shape of a cross');
  } else if (a == 'quenn') {
    console.log(a + ' -> ' + ' Walk in all directions without house restrictions');
  } else if (a == 'king') {
    console.log(a + ' -> ' + ' Walk one house at a time');
  } else {
    console.log(a + ' -> ' + ' This is not a valid chess piece.');
  }

  return a;
}

chessPieces('ola'.toLowerCase())
