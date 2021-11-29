const uppercase = require('../src/exercicio-07')

it ('Testa se a function uppercase transforma as letras em maiusculas', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST')
      done()
    } catch (error) {
      done(error);
    }
  })
})