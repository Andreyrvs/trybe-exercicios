function largerInQuantity(array) {
  let biggerName;
  let split = array.split(' ');
  
  for (let index = 0; index < array.length; index += 1) {
    
    if (array[index] < biggerName) {
      biggerName = array[index];
 
    }
  }
  console.log(biggerName);
}
largerInQuantity(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);