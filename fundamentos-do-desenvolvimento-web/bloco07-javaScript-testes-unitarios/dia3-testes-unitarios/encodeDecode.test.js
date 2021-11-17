const encode = (string) => {
  for (let i = 0; i < string.length; i += 1) {
    string = string.replace('a', '1');
    string = string.replace('e', '2');
    string = string.replace('i', '3');
    string = string.replace('o', '4');
    string = string.replace('u', '5');
  }
  return string;
};

const decode = (string) => {
  for (let i = 0; i < string.length; i += 1) {
    string = string.replace('1', 'a');
    string = string.replace('2', 'e');
    string = string.replace('3', 'i');
    string = string.replace('4', 'o');
    string = string.replace('5', 'u');
  }
  return string;
};

//1
test('Verifica se encode e decode são funçoes', () => {
  expect(typeof encode && typeof decode).toBe('function');
});

//2
test('Verifica vogais', () => {
  expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
});

//3
test('Verifica numeros', () => {
  expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
});

//4
test('Verifica demais numeros/letras', () => {
  expect(encode('b,c,d,f,g')).not.toBe('1,2,3,4,5');
});

test('Verifica demais numeros/letras', () => {
  expect(decode('6,7,8,9')).not.toBe('a,e,i,o,u');
});

//5
test('Verifica tamanho da string', () => {
  expect(encode('bom dia').length).toEqual('bom dia'.length);
});

test('Verifica tamanho da string', () => {
  expect(decode('1,2,3,4,5').length).toEqual('1,2,3,4,5'.length);
});
