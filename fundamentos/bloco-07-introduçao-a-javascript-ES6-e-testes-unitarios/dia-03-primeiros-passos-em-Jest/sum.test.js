const sum = require('./sum.js');

describe('Testa a função sum', () => {
  it('Deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrowError();
    expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
  })
});
