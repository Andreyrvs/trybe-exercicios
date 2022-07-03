const { expect } = require('chai');

const MoviesModel = {
  create: () => { },
};

describe('Insere um novo filme no BD', function () {
  const payLoadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  describe('quando é inserido com sucesso', function () {
    it('retorna um objeto', async function () {
      const response = await MoviesModel.create(payLoadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async function () {
      const response = await MoviesModel.create(payLoadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
