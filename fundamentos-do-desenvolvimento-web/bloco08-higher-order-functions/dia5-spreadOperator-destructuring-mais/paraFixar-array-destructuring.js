//1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [saudacao, realizaSaudacao]=saudacoes;
console.log(realizaSaudacao(saudacao))

//2
 let comida = 'gato';
 let animal = 'água';
 let bebida = 'arroz';


[comida,animal,bebida]=[bebida,comida,animal]

console.log(comida,animal,bebida); // arroz gato água

//3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];


[,,, ...numerosPares]=numerosPares
console.log(numerosPares)

