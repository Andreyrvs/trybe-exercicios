const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']; 
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; // Corretas = 6 / Erradas = 4 

const myHOF = (rightAnswers, studentAnswers, callback) => {
  let count = 0;

  for (let index = 0; index < rightAnswers.length; index += 1) {
    const retornoAcoes = callback(rightAnswers[index], studentAnswers[index]);
    count  += retornoAcoes;
  };
  return `Respostas Corretas ${count}`
};

console.log(myHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return + 1;
  }
  if (rightAnswers !== studentAnswers) {
    return - 0.5;
  }
}));
