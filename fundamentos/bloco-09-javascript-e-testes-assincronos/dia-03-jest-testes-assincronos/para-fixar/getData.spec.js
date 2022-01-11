const getSuperHero = require('./getData');

test('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero();
  expect(hero)
  .toBe('Wonder Woman');
});
test('Testa se é um falso positivo com asysc/await', async () => {
  const hero = await getSuperHero();
  expect(hero)
  .toMatch('erro');
});
test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
  const error = await getSuperHero();
  expect(error).toMatch('erro');
});