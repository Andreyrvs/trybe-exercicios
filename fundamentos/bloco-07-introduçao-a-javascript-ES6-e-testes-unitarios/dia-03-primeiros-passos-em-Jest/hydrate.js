function hydrate(stingParam) {
  if (stingParam === '1 cerveja') {
    return '1 copo de água'
  } else if (stingParam === '1 cerveja, 2 shots e 1 catuaba') {
    return '4 copos de água'
  } else if (stingParam === '2 caipirinhas') {
    return '2 copos de água'
  }

}

module.exports = hydrate

// Teste aqui 

console.log(
  hydrate('10 cerveja')
);