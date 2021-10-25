function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exericico 01 :
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const savePosition = dezDaysList[index];
    let daysList = document.getElementById('days')
    let createLiDaysList = document.createElement('li');
    createLiDaysList.className = 'day'
    createLiDaysList.innerText = savePosition;
    if (savePosition === 24
        || savePosition === 25
        || savePosition === 31) {
          createLiDaysList.className += ' holiday'
    }
    if (savePosition === 4
      || savePosition === 11
      || savePosition === 18
      || savePosition === 25) {
        createLiDaysList.className += ' friday'

    }
    
    daysList.appendChild(createLiDaysList);
  }
  
}
createDays();

// Exercicio 02 :
function createBtnHoliday(Feriados) {
  
  let pegaDiv = document.querySelector('.buttons-container')
  let creatButtonHoliday = document.createElement('button')
  creatButtonHoliday.id = 'btn-holiday'
  creatButtonHoliday.innerText = Feriados;
  pegaDiv.appendChild(creatButtonHoliday)
}
createBtnHoliday('Feriados');

// Exercicio 03 :
function changeColor(event) {
  let saveHoly = document.querySelectorAll('.holiday')

  for (let index = 0; index < saveHoly.length; index += 1) {
    const element = saveHoly[index];

    element.style.backgroundColor = 'pink'  
  }
  event.target.style.backgroundColor = 'green'
}

let text = document.getElementById('btn-holiday');
text.addEventListener('click', changeColor);

// Exercicio 04 :
function createBtnFriday() {
  
}