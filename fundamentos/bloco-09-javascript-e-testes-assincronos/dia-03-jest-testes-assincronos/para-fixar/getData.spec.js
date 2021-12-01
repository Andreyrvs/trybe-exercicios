const getSuperHero = require('./getData');

test('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero();
  expect(hero).toBe('Wonder Woman');
});