let sum = 0;

for (i=2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
  sum += Number(process.argv[i]);
  
}

console.log(sum)