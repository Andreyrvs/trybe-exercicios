//Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let i = 1; i < numbers.length; i += 1) {
  for (let secondI = 0; secondI < i; secondI += 1) {
    if (numbers[i] < numbers[secondI]) {
      let position = numbers[i];
      numbers[i] = numbers[secondI];
      numbers[secondI] = position;
    }
  }
}
console.log(numbers)