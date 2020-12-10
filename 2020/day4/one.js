let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let inputs = input.split('\n\n').map(item => item.replace(/\n/g, " "))


// console.log(inputs[0])
// console.log(inputs[1])
// console.log(inputs[2])
// console.log(inputs[3])
// console.log(inputs[4])
// console.log(inputs[5])

let categories = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:']

console.log(categories.every(item => inputs[0].includes(item)))
let count = 0

for(let i=0; i<inputs.length; i++){
  if(categories.every(item => inputs[i].includes(item))){
    count++
  }  
}

console.log(`final valid passport count: ${count}`)
