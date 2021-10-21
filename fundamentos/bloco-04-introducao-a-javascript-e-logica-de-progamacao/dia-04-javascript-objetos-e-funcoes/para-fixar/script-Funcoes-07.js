function convertGradeToPercentage(a) {
  let fullGrade = 100;
  let percentage = a / fullGrade * 100;

  if (a < 0 || a > fullGrade) {
    console.log('Invalid grade')
  } else if (percentage >= 90) {
    console.log('A');
  } else if (percentage >= 80) {
    console.log('B');
  } else if (percentage >= 70) {
    console.log('C');
  } else if (percentage >= 60) {
    console.log('D');
  } else if (percentage >= 50) {
    console.log('E');
  } else if (percentage < 50) {
    console.log('F');
  }

  return a
}

convertGradeToPercentage(61)