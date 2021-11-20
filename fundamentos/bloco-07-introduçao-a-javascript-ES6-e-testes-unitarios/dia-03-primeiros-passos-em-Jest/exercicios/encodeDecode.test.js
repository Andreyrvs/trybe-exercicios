const {encode, decode} = require('../exercicios/encodeDecode');

describe('Para as funções encode e decode', () => {
  // Feito com Boolean
/*   it('Teste se "encode" e "decode" são funções', () => {
    expect({ encode, decode }).toBeTruthy();
  }); */
  // Outra Forma de fazer, feito com typeof

  // -------- Encode -------------
  describe('Função Encode', () => {
    it('Teste se "encode" é definida', () => {
      expect(encode).toBeDefined();
    }); 
    it('Teste se "encode" e "decode" são funções', () => {
      expect(typeof encode).toBe('function');
    });
    it('converte apenas a vogal "a" no número 1' , () => {
      expect(encode('ana')).toEqual('1n1');
    });
    it('corverte a vogal "e" no número 2', () => {
      expect(encode('ele')).toEqual('2l2');
    });
    it('converte a vogal "i" no número 3 ', () => {
      expect(encode('xixi')).toBe('x3x3')
    });
    it('converte a vogal "o" no número 4', () => {
      expect(encode('ovo')).toEqual('4v4')
    });
    it('converte a vogal "u" no número 5', () => {
      expect(encode('nu')).toEqual('n5')
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(encode('trybe').length).toEqual(5)
    });
    it('Teste se "encode" e "decode" são funções', () => {
      expect(typeof decode).toBe('function');
    });
  });

  describe('Função Decode', () => {
    it('Teste se "encode" é definida', () => {
      expect(decode).toBeDefined();
    }); 
    it('Teste se "decode" e "decode" são funções', () => {
      expect(typeof decode).toBe('function');
    });
    it('converte apenas a vogal "a" no número 1' , () => {
      expect(decode('1n1')).toEqual('ana');
    });
    it('corverte a vogal "e" no número 2', () => {
      expect(decode('2l2')).toEqual('ele');
    });
    it('converte a vogal "i" no número 3 ', () => {
      expect(decode('x3x3')).toBe('xixi')
    });
    it('converte a vogal "o" no número 4', () => {
      expect(decode('4v4')).toEqual('ovo')
    });
    it('converte a vogal "u" no número 5', () => {
      expect(decode('n5')).toEqual('nu')
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(decode('trybe').length).toEqual(5)
    });
  });
});
