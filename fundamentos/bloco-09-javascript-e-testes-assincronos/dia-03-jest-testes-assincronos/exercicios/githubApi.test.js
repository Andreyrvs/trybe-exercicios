// githubApi.test.js

const { describe } = require('@jest/globals');
const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// getRepos('https://api.github.com/orgs/tryber/repos');
// implemente seus testes aqui

/* 1 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado.
 Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list'
  e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
*/

describe('a função getRepos retorna os repositorios fornecidos', () => {

  test('ao passar um nome de repositorio a funcao getRepos o retorna', async () => {
    const todoList = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(todoList).toContain('sd-01-week4-5-project-todo-list')
  })
})