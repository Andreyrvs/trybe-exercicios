function verificaPalindrome(string) {
  if (string == string.split('').reverse().join('')) {
    console.log(string + ' True')
  } else {
    console.log('False')
  }
  
}

verificaPalindrome('desenvolvimento')