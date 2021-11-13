let selectBtnsContainer = document.querySelector('.buttons-container');

// Cria os dias da semana Dinamicamente
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
function createBtnHoliday(stringParam) {
  let creatButtonHoliday = document.createElement('button');
  creatButtonHoliday.id = 'btn-holiday';
  creatButtonHoliday.innerText = stringParam;

  selectBtnsContainer.appendChild(creatButtonHoliday);
}
createBtnHoliday('Feriados');

// Exercicio 03 :
let pickUpButton = document.getElementById('btn-holiday');
pickUpButton.addEventListener('click', function () {
  let saveHoly = document.querySelectorAll('.holiday');
  for (let index = 0; index < saveHoly.length; index += 1) {
    const cor = saveHoly[index];
    cor.classList.toggle('hCor');
  }
});

// Exercicio 04 :
function createBtnFriday(stringFriday) {
  let createBtnFriday = document.createElement('button');
  createBtnFriday.id = 'btn-friday';
  createBtnFriday.innerText = stringFriday;

  selectBtnsContainer.appendChild(createBtnFriday);
}
createBtnFriday('Sexta-feira');

// Exercicio 05 :
/**
 * 
 * Nesse exericico Não consegui fazer a lógica inversa de Retirar o texto sexta-feira
 * 
 */
let saveFriday = document.querySelectorAll('.friday');
let saveButton = document.getElementById('btn-friday');

saveButton.addEventListener('click', function () {
  for (let index = 0; index < saveFriday.length; index += 1) {
    const element = saveFriday[index];

    element.innerHTML = 'Sexxtou';
  }
});

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

catchBtnAdd.addEventListener('click', () => {
  let catchInput = document.getElementById('task-input');

  let createSpan = document.createElement('span');
  createSpan.innerText = catchInput.value;

  catchDiv.appendChild(createSpan);
});

// Exericico 08 :
function legenda(cor) {
  let catchDiv = document.querySelector('.my-tasks');

  let creatDiv = document.createElement('div');
  creatDiv.className = 'LegendaCor'
  creatDiv.style.backgroundColor = cor;

  catchDiv.appendChild(creatDiv);
}
legenda('blue');
