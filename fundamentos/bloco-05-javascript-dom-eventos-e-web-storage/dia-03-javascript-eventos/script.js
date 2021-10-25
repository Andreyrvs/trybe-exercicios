function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exericico 01 :
function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const savePosition = dezDaysList[index];
    let daysList = document.getElementById('days');
    let createLiDaysList = document.createElement('li');
    createLiDaysList.className = 'day';
    createLiDaysList.innerText = savePosition;
    if (savePosition === 24 || savePosition === 25 || savePosition === 31) {
      createLiDaysList.className += ' holiday';
    }
    if (
      savePosition === 4 ||
      savePosition === 11 ||
      savePosition === 18 ||
      savePosition === 25
    ) {
      createLiDaysList.className += ' friday';
    }

    daysList.appendChild(createLiDaysList);
  }
}
createDays();

// Exercicio 02 :
function createBtnHoliday(feriados) {
  let pegaDiv = document.querySelector('.buttons-container');
  let creatButtonHoliday = document.createElement('button');
  creatButtonHoliday.id = 'btn-holiday';
  creatButtonHoliday.innerText = feriados;

  pegaDiv.appendChild(creatButtonHoliday);
}
createBtnHoliday('Feriados');

// Exercicio 03 :

let pickUpButton = document.getElementById('btn-holiday');
pickUpButton.addEventListener('click', changeHolidayColor);

function changeHolidayColor() {
  let saveHoly = document.querySelectorAll('.holiday');

  for (let index = 0; index < saveHoly.length; index += 1) {
    const element = saveHoly[index];

    element.style.backgroundColor = 'rgb(2,238,238)';
  
  }
  // if (element.style.backgroundColor === 'rgb(2,238,238)') 
  // }

  // usar uma funcao anonima para dar a cor e outra para tirar a cor usando if;
}

// Exercicio 04 :
function createBtnFriday(stringFriday) {
  let pegaDiv = document.querySelector('.buttons-container');
  let createBtnFriday = document.createElement('button');
  createBtnFriday.id = 'btn-friday';
  createBtnFriday.innerText = stringFriday;

  pegaDiv.appendChild(createBtnFriday);
}
createBtnFriday('Sexta-feira');

// Exercicio 05 :
function changeTextOnFriday() {
  let saveFriday = document.querySelectorAll('.friday');

  for (let index = 0; index < saveFriday.length; index += 1) {
    const element = saveFriday[index];

    element.innerText = 'Sexta-feira';
  }
}
let saveButton = document.getElementById('btn-friday');
saveButton.addEventListener('click', changeTextOnFriday);

// Exercicio 06 :
// Zoom quando passa por cima
let catchWeeDays = document.querySelector('.week-days');
catchWeeDays.addEventListener('mouseover', (e) => {
  e.target.style = 'font-size:30px';
});
// Sai o zoom
catchWeeDays.addEventListener('mouseout', (e) => {
  e.target.style = 'font-size:20px';
});

// Exericico 07 :
let catchDiv = document.querySelector('.my-tasks');
let catchBtnAdd = document.getElementById('btn-add');

catchBtnAdd.addEventListener('click', (e) => {
  let catchInput = document.getElementById('task-input');
  let textinput = catchInput.value;

  let createSpan = document.createElement('span');
  createSpan.innerText = textinput;
  // createSpan.style.display = 'inline-block';
  catchDiv.appendChild(createSpan);

  console.log(textinput);

  console.log(catchDiv);
});

// Exericico 08 :
function legenda(cor) {
  let catchDiv = document.querySelector('.my-tasks');

  let creatDiv = document.createElement('div');
  // creatDiv.innerText = 'Sou uma div';
  creatDiv.style.backgroundColor = cor;

  catchDiv.appendChild(creatDiv);
}
legenda('blue');
