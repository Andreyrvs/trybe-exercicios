function highestNumber(array) {
  
  let biggerNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    
    if (array[index] > biggerNumber) {
      biggerNumber = array[index]
    }
  }
  return biggerNumber;
}

highestNumber([2, 3, 6, 7, 10, 1]);