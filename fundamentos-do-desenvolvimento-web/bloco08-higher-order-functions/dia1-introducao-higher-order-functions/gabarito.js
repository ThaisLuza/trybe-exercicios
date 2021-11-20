const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificacao = (gabarito,respostaEstudante)=>{
  if(respostaEstudante === 'N.A') return 0;
  if(respostaEstudante === gabarito) return 1;
  return -0.5;
}



const respostas = (gabarito, respostaEstudante, func) => {
  let nota = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    nota += func(gabarito[index], respostaEstudante[index])
  }
  return nota
}

console.log(respostas(RIGHT_ANSWERS,STUDENT_ANSWERS,verificacao))