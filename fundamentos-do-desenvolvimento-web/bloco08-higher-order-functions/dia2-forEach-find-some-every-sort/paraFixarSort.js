//1-ORDEM CRESCENTE
const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

people.sort(function(a,b) {
  return a.age < b.age ? -1 : a.age > b.age? 1 : 0;
});

console.log(people);

//2-ORDEM DECRESCENTE
people.sort(function(a,b) {
  return a.age > b.age ? -1 : a.age < b.age? 1 : 0;
});

console.log(people);