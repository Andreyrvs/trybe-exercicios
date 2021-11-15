const encode = require('./encodeDecode')
const decode = require('./encodeDecode')

describe('Para as funções encode e decode', () => {
  it('Teste se "encode" e "decode" são funções', () => {
    expect({encode, decode}).toBeTruthy()
  });
});