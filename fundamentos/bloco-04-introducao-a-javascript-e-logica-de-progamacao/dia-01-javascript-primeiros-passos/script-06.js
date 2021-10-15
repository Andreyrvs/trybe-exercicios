let pecaXadrez;
let peca = 'bispo';

switch (peca) {
  case pecaXadrez = 'peao':
    console.log('Movimenta só para frente')    
    break;
  case pecaXadrez = 'torre':    
    console.log('Movimenta em formato de cruz')
    break;
  case pecaXadrez = 'cavalo':
    console.log('Movimenta um formato de L')
    break;
  case pecaXadrez = 'bispo':    
    console.log('Movimenta em ambas as diagonais')
    break;
  case pecaXadrez = 'rei':
    console.log('Movimenta somente uma casa por vez, em qualquer direção')
    break;
  case pecaXadrez = 'rainha':
    console.log('Movimenta em todas as direções')
    break;  
  default:
    console.log('Essa pessa não existe')
    break;
}