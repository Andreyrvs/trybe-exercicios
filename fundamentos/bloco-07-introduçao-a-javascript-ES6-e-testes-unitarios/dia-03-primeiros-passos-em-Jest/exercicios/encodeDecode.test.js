const {encode, decode} = require('./encodeDecode');

describe('Para as funções encode e decode', () => {
  it('Teste se "encode" e "decode" são funções', () => {
    expect({ encode, decode }).toBeTruthy();
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

});
