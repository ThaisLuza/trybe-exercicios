//1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((item)=> item === name);

//console.log(hasName(names, 'Ana'));

//2
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const verify = arr.every((item)=> item.age >= minimumAge)
  return verify;
}

console.log(verifyAges(people, 18));