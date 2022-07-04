const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });

});

describe('Busca apenas um filme no BD por seu ID', function () {
  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    MoviesModel.getById.restore();
  });

  describe('quando não existe um filme com o ID informado', () => {
    it('retorna null', async () => {
      const response = await MoviesModel.getById();
      expect(response).to.be.equal(null);
    });
  });


  describe('quando existe um filme com o ID informado', () => {

    before(async () => {
      const execute = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,

      }

      sinon.stub(MoviesModel, 'getById').resolves(execute)
    })

    after(async () => {
      connection.execute.restore()
    })

    describe('busca o filme com sucesso', function () {

      it('retorna um objeto', async () => {
        const response = await MoviesModel.getById(1)

        expect(response).to.be.an('object');
      })
      it('o objeto não está vazio', async () => {
        const response = await MoviesModel.getById(1)

        expect(response).to.have.a.property('id')
      })

      it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
        const response = await MoviesModel.getById(1)

        expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
      })
    })
  })
})