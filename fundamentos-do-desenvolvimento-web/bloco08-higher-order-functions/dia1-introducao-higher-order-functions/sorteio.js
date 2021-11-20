const sorteio = () => {
  const numSort = Math.floor(Math.random() * 5 + 1);
  return numSort;
};
const verificacao = (number, callback) => {
  const numero = callback()
  if (number === numero) {
    return "Parabéns você ganhou";
  }
  return "Tente novamente";
};

console.log(verificacao(4,sorteio))
