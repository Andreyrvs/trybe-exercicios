function verificaPalindrome(a) {
  if (a == a.split('').reverse().join('')) {
    console.log(a + ' True')
  } else {
    console.log('False')
  }
  
}

verificaPalindrome('natan')