// Array Teste [2, 3, 2, 5, 8, 2, 3];

function highestNumber (arrayNumbers) {
  let majorNumber = arrayNumbers[0];
  let count = 0
  
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (majorNumber === arrayNumbers[index]) {
      count += 1
      majorNumber = arrayNumbers[index]
    }
    
  }
  console.log(majorNumber)
  return majorNumber
}
highestNumber([2, 3, 2, 5, 8, 2, 3]);
