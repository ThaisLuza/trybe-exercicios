const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA () {
return names.reduce((acc, cur) => acc += cur.toLowerCase().split('').filter((value) => value === 'a').length, 0)
}
console.log(containsA())