const {encode, decode} = require('./encodeDecode');

describe('Para as funções encode e decode', () => {
  it('Teste se "encode" e "decode" são funções', () => {
    expect({ encode, decode }).toBeTruthy();
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u;', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('b, c, d, f')).toBe('b, c, d, f')
  });
});
