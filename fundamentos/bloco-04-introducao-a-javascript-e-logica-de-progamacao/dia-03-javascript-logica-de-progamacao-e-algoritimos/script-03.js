let n = 5;
let asterisco = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + asterisco;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}

// console.log('    *')
// console.log('   **')
// console.log('  ***')
// console.log(' ****')
// console.log('*****')
