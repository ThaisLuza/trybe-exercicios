// PARTE I
//1
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
};

testingScope(true);

//PARTE I
//2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(
  `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
);

//PARTE II
//1
const calcularFatorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * calcularFatorial(n - 1);
};
calcularFatorial(5);

//2
const longestWord = (string) => {
  let palavras = string.split(" ");
  let big = "";

  for (word of palavras) {
    if (word.length > big.length) {
      big = word;
    }
  }

  console.log(big);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

//3
const botao = document.getElementById("btn");
const paragrafo = document.getElementById("contagem");

let clickCount = 0;
botao.addEventListener("click", () => {
  clickCount += 1;
  paragrafo.innerText = `Esse botão foi clicado ${clickCount} ${
    clickCount === 1 ? "vez" : "vezes"
  } `;
});

//4
const procurarX = (string) => {
  let frase = "Tryber x aqui!";
  let novaFrase = frase.replace("x", string);
  return novaFrase;
};

procurarX("Thais");

let skills = ["git", "gitHub", "HTML", "CSS", "Javascript"];
let skillsOrdenadas = skills.sort();

const minhaFrase = (func) => {
  return `${func} Minhas cinco principais habilidades são:${skillsOrdenadas} #goTrybe.`;
};
minhaFrase(procurarX("Thais"));
