// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'melao', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['sorvete', 'calda', 'uva'];

const fruitSalad = (fruit, additional) => {
  const saladinha = [...specialFruit,...additionalItens];
  return saladinha;
};

console.log(fruitSalad(specialFruit, additionalItens));