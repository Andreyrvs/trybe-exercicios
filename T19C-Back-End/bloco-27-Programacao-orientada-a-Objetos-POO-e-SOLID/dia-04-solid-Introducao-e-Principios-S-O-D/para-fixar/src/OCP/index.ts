// ./src/index.ts

type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type School = {
  name: string;
  approvalGrade: number;
};

type Student = {
  name: string;
  disciplines: Discipline[];
  school: School; // Agora não é mais uma string
};

/* Apoio para a função `getGradeLetter` */
const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1, 0],
  letters: ['A', 'B', 'C', 'D', 'E', 'F'],

};

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber: number): string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let index = 0; index < gradeNumbers.length; index += 1) {
    if (gradeNumber >= gradeNumbers[index]) return gradeLetters[index];
  }
  return 'F';
};

/*  Coletar notas */

const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

/* converter */

const percentageGradesIntoLetters = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades) });

  /* Atualizar */
const updateApprovalData = (student: Student): void => {
  console.log(`A pessoa com nome ${student.name} foi aprovada!`);
  
  student.disciplines.forEach(({ name, letterGrade }) => 
  console.log(`${name}: ${letterGrade}`));
};

/* Fazemos a modificação da nossa função approvedStudents */
const approvedStudents = ({ disciplines, school }: Student): boolean =>
  disciplines.every(({ grade }) => (grade >= school.approvalGrade));

/* Abaixo temos o exemplo de execução com algumas adições */
const studentsExample = [
  {
    name: 'Lee',
    school: { name: 'Standard', approvalGrade: 0.7 },
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: { name: 'Hogwarts', approvalGrade: 0.8 },
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];
  
function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

setApproved(studentsExample);

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};
