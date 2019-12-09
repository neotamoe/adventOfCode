let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let modules = input.split('\n');

let total = 0;

const findFuelAmount = (mass) => {
  return Math.floor(mass/3) - 2;
}

modules.forEach(module => {
  total += findFuelAmount(module);
});

console.log('final total', total);