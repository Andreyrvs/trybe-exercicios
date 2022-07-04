/* eslint-disable mocha/max-top-level-suites */
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de create', function () {
  describe('quando o payload informado não é válido', function () {
    const response = {};
    const request = {};

    before(function () {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    });

    after(function () {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async function () {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async function () {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', function () {
    const response = {};
    const request = {};

    before(function () {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

    after(function () {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async function () {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async function () {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });
  });
});

describe('Ao chamar o controller de findById', function () {
  describe('quando não existem filmes no banco de dados', function () {
    const response = {};
    const request = {};

    before(function () {
      request.params = {
        id: 1,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'findById')
        .resolves(null);
    });

    after(function () {
      MoviesService.findById.restore();
    });

    it('é chamado o método "status" passando 404', async function () {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "send" passando a mensagem "Not Found"', async function () {
      await MoviesController.findById(request, response);

      expect(response.send.calledWith('Not Found')).to.be.equal(true);
    });
  });

  describe('Ao chamar o controller de findById', function () {
    describe('quando não existem filmes no banco de dados', function () {
      const response = {};
      const request = {};

      before(function () {
        request.params = {
          id: 1,
        };

        response.status = sinon.stub()
          .returns(response);
        response.send = sinon.stub()
          .returns();

        sinon.stub(MoviesService, 'findById')
          .resolves(null);
      });

      after(function () {
        MoviesService.findById.restore();
      });

      it('é chamado o método "status" passando 404', async function () {
        await MoviesController.findById(request, response);

        expect(response.status.calledWith(404)).to.be.equal(true);
      });

      it('é chamado o método "send" passando a mensagem "Not Found"', async function () {
        await MoviesController.findById(request, response);

        expect(response.send.calledWith('Not Found')).to.be.equal(true);
      });
    });
  });
});
