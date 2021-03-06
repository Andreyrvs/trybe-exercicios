const btnPreventDefault = document.querySelector('#prevent-default');
const todosEstados = document.querySelector('#option-estados');


const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

function geraLista() {
  
  const selecionaDrop = document.querySelector('#select-estado');
  for (let index = 0; index < estados.length; index += 1) {
    const criaOption = document.createElement('option')
    criaOption.innerText = estados[index];
    selecionaDrop.appendChild(criaOption);
  }
}
geraLista();
