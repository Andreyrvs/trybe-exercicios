function highestNumber(array) {
  
  let biggerNumber = 0;
  let saveIndex;
  for (let index = 0; index < array.length; index += 1) {
    
    if (array[index] < biggerNumber) {
      biggerNumber = array[index];
      saveIndex = index;
    }
  }
  console.log(saveIndex);
}

highestNumber([2, 4, 6, 7, 10, 0, -3]);