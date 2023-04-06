
const chunkArray = require('./chunk');

test('Découper un tableau de 8 valeurs avec une longueur de 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]]);
});

test('Découper un tableau de 5 valeurs avec une longueur de 1', () => {
  const numbers = [1, 2, 3, 4, 5];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1], [2], [3],[4], [5]]);
});

test('Découper un tableau de 9 valeurs avec une longueur de 1', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const len = 3;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});