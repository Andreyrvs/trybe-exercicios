
// ------ Operador AND ------

function currentHour(message) {
  if (message >= 22) {
    console.log('Não deveríamos comer nada, é hora de dormir')
  } else if (message >= 18 && message < 22) {
    console.log('Rango da noite, vamos jantar :D')
  } else if (message >= 14 && message < 18) {
    console.log('Vamos fazer um bolo pro café da tarde?')
  } else if (message > 11 && message < 14) {
    console.log('Hora do almoço!!!')
  } else if (message > 4 && message < 11) {
    console.log('Hmmm, cheiro de café recém passado')
  }
  return message
}

currentHour(5)


// ------ Operador OR ------

function learningOnTrybe(weekDay) {
  if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' ||
    weekDay === 'quarta-feira' || weekDay === 'quinta-feira' ||
    weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D')
  } else if (weekDay === 'sabado' || weekDay == 'domingo') {
    console.log('FINALMENTE, descanso merecido UwU')
  }
  return weekDay
}

learningOnTrybe('sabado')