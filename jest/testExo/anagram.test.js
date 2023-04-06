const isAnagram = require('./anagram');


test('"La crise economique" est un anagramme de "Le scenario comique"', () => {
  expect(isAnagram('La crise economique', 'Le scenario comique')).toBeTruthy();
});

//test avec les caracteres speciaux
test('"vire" est un anagramme de "@@ rive##"', () => {
  expect(isAnagram('vire', 'rive##')).toBeTruthy();
});

test('"veteran" n\'est un anagramme de "teheran"', () => {
  expect(isAnagram('veteran', 'teheran')).toBeFalsy();
});
