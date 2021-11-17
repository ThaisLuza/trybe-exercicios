const sum = require('./sum');

describe('Requisito 1', () => {
  it('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('sums two values', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('sums two values', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});
