let qstn1 = {
  question: 'what?',
  answer: 'example',
  correctAnswer: 'Its C'
}

let qstn2 = {
  question: 'when?',
  answer: 'example',
  correctAnswer: 'Sorry its A'
}

let qstn3 = {
  question: 'where?',
  answer: 'example',
  correctAnswer: 'Yeah, again C'
}

let qstn4 = {
  question: 'why?',
  answer: 'example',
  correctAnswer: 'Nope'
}


let qstns = [qstn1, qstn2, qstn3, qstn4];

let answrs = qstns.filter((item) => item.correctAnswer.includes('C'));

console.log(answrs);