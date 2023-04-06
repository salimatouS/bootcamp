
const reverseString = require('./reverseString');

test('"coca-cola" est l\'inverse de "aloc-acoc"', () => {
  expect(reverseString('cocacola')).toEqual('alocacoc');
});

test('"COCA-COLA" est l\'inverse de "aloc-acoc"', () => {
  expect(reverseString('COCA-COLA')).toEqual('aloc-acoc');
});

test('"eviter" n\'est pas l\'inverse de "verite"', () => {
  expect(reverseString('eviter')).not.toEqual('verite');
});