function techList (arrayTech, name){
  if (arrayTech.length === 0) return 'Vazio!';
  
  const arrayOrganizado = arrayTech.sort();
  const listaTech = []

  for (let index = 0; index < arrayOrganizado.length; index += 1) {
    listaTech.push({
      tech: arrayOrganizado[index],
      name,
    })
  }  
  
  return listaTech;
};

module.exports = techList;

// Teste aqui
