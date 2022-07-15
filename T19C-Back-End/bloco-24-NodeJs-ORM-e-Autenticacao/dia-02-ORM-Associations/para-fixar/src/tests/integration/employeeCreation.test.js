/* eslint-disable mocha/no-top-level-hooks */
/*
### Testando a rota POST /employees

- Acessarei meu `rest-client` favorito (PostMan, Insomnia, HTTPie, etc...)
  - Para um caso de sucesso:
    - Farei uma requisição `POST` com os dados corretos para meu
      end-point `/employee`;
    - Aguardo uma resposta com status `201 - Created`;
    - Essa resposta deve conter também um atributo `id`, no corpo;
    - Essa resposta deve conter também um atributo `message`,
      no corpo, com a mensagem `Cadastrado com sucesso`;
    - Farei uma requisição `GET` utilizando esse `id` para meu
      end-point `/employee/:id`;
    - Aguardo uma resposta com status `200 - OK`;
    - Essa resposta deve conter também um atributo `addresses`,
      no corpo, com pelo menos um item.
  - Para um caso de falha:
    - Farei uma requisição `POST` com os dados incorretos para meu
      end-point `/employee`;
    - Aguardo uma resposta com status `500 - Internal Server Error`;
    - Essa resposta deve conter também um atributo `message`,
      no corpo, com a mensagem `Algo deu errado`;
*/

const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../app');

const consoleLogStub = stub(console, 'log');
before(function () { return consoleLogStub.returns(true); });
after(function () { return consoleLogStub.restore(); });

describe('Rota POST /employeesUnmanaged', function () {
  describe('quando os dados do `body` são válidos', function () {
    let postEmployee;
    let getEmployee;

    before(async function () {
      try {
        postEmployee = await chai.request(app)
        .post('/employeesUnmanaged')
        .send({
          firstName: 'Rodrigo',
          lastName: 'Oliveira',
          age: 30,
          city: 'TrybeCity',
          street: 'Rua Teste',
          number: 42,
        });

        const { body: { id } } = postEmployee;

        getEmployee = await chai.request(app)
        .get(`/eagerLoading/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    });

    it('retorna 201 - Created', async function () {
      const { status } = postEmployee;

      expect(status).to.be.equals(201);
    });

    it('retorna um atributo `id`, que é um número', async function () {
      const { body: { id } } = postEmployee;

      expect(typeof id).to.be.equals('number');
    });

    it('retorna uma mensagem `Cadastrado com sucesso`', async function () {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Cadastrado com sucesso');
    });

    it('é possível consultar a pessoa criada através do `id` retornado', async function () {
      const { body: { id: postId } } = postEmployee;
      const { body: { id: getId } } = getEmployee;

      expect(postId).to.be.equals(getId);
    });

    it('essa consulta também retornou um atributo `addresses`, com pelo menos um item', 
      async function () {
        const { body: { addresses } } = getEmployee;

        expect(addresses.length).to.be.greaterThanOrEqual(1);
    });
  });

  describe('quando os dados do `body` não são válidos', function () {
    let postEmployee;

    before(async function () {
      try {
        // removendo city
        postEmployee = await chai.request(app)
        .post('/employeesUnmanaged')
        .send({
          firstName: 'Rodrigo',
          lastName: 'Oliveira',
          age: 30,
          street: 'Rua Teste',
          number: 42,
        });
      } catch (error) {
        console.error(error.message);
      }
    });

    it('retorna 500 - Internal Server Error', async function () {
      const { status } = postEmployee;

      expect(status).to.be.equals(500);
    });
    
    it('retorna uma mensagem `Algo deu errado`', async function () {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Algo deu errado');
    });
  });
});