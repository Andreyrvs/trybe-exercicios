let n = 5;
let asterisco = '';

for (let i = 1; i < n; i += 1) {
  asterisco += '.';
  for(let j = 1; j < n - i; j ++){

    asterisco += '*';
  }
  console.log(asterisco)
}

// console.log('    *')
// console.log('   **')
// console.log('  ***')
// console.log(' ****')
// console.log('*****')