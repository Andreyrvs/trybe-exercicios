let pessoa = {
  nome: '',
  idade: 0,
};

const sessaoPrincipal = document.getElementById('principal');
const btnAdiciona = document.querySelector('.btnAdicionar');

btnAdiciona.addEventListener('click', adicionaPessoa)

function criaElemento(objeto) {}

function adicionaPessoa() {
  pessoa.nome = document.getElementById('nome').value;
  pessoa.idade = document.getElementById('idade').value;

  const novoElemento = document.createElement('p');
  novoElemento.innerText = pessoa.nome + ' - ' + pessoa.idade;

  sessaoPrincipal.appendChild(novoElemento);
}

window.onload = function () {};
