/* eslint-disable mocha/max-top-level-suites */
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', function () {
  describe('quando o payload informado não é válido', function () {
    const payloadMovie = {};

    it('retorna um boolean', async function () {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async function () {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', function () {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(function () {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(function () {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async function () {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async function () {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Busca apenas um filme no BD por seu ID', function () {
  before(async function () {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async function () {
    connection.execute.restore();
  });

  describe('quando não existe um filme com o ID informado', function () {
    it('retorna null', async function () {
      const response = await MoviesService.findById();

      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe um filme com o ID informado', function () {
    before(function () {
      const EXAMPLE = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      sinon.stub(MoviesModel, 'getById').resolves(EXAMPLE);
    });

    after(function () {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async function () {
      const response = await MoviesService.findById(1);

      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async function () {
      const response = await MoviesService.findById(1);

      expect(response).to.be.not.empty;
    });

    it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"',
      async function () {
        const item = await MoviesService.findById(1);

        expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
      });
  });
});