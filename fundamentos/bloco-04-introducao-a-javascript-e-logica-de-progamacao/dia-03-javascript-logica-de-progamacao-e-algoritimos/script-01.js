let n = 5;
let asterisco = '';

for (let i = 1; i <= n; i++) {  
  for (let j = 1; j <= n; j++) {
    asterisco += '*'
  }
  console.log(asterisco)
  asterisco = '';
}