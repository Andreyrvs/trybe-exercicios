let n = 5;
let asterisco = '';

for (let i = 1; i <= n; i++) {
  asterisco += '*';
  for(let j = 1; j <= i; j++){

    asterisco += '_';
  }
  console.log(asterisco)
}

// console.log('    *')
// console.log('   **')
// console.log('  ***')
// console.log(' ****')
// console.log('*****')