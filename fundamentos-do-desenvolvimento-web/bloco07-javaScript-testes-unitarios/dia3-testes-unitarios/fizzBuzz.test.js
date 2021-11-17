function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

test('teste fizzBuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('teste fizzBuzz', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

test('teste fizzBuzz', () => {
  expect(myFizzBuzz(10)).toBe('buzz');
});

test('teste fizzBuzz', () => {
  expect(myFizzBuzz(14)).toBe(14);
});

test('teste fizzBuzz', () => {
  expect(myFizzBuzz("15")).toBe(false);
});
