let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let modules = input.split('\n');

let total = 0;

const findFuelAmount = (mass) => {
  return Math.floor(mass/3) - 2;
}

modules.forEach(module => {
  while(module > 8) {
    let innerTemp = findFuelAmount(module);
    total += innerTemp;
    module = innerTemp;
  }
});

console.log('final total', total);