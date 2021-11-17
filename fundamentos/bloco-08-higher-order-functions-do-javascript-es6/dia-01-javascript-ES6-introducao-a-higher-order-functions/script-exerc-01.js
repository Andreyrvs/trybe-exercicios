const criaEmail = (nameCom) => {
  const objEmail = {
    nomeCompleto: nameCom,
    email: '@trybe.com',
  } 
  const EmailCompleto = `${objEmail.nomeCompleto}${objEmail.email}`
  const espacoToUnderline = EmailCompleto.replace(/\s/ig, '_')
  return espacoToUnderline
}


const newEmployees = () => {
  const employees = {
    id1: criaEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: criaEmail('Luiza Drumend'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: criaEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());
