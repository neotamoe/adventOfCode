let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let inputs = input.split('\n\n').map(item => item.replace(/\n/g, " "))

let categories = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:']

console.log(categories.every(item => inputs[0].includes(item)))
let count = 0

let firstValid = []

for(let i=0; i<inputs.length; i++){
  if(categories.every(item => inputs[i].includes(item))){
    firstValid.push(inputs[i])
  }  
}

let mappedValids = firstValid.map(entry => entry.split(" "))

for(let j=0; j<mappedValids.length; j++){
  ok = true
  let k = 0
  while(ok && k < 7){
    let temp = mappedValids[j][k].split(":")
    if(temp[0] == "byr" && !(temp[1].length === 4 && temp[1] >= 1920 && temp[1] <=2002)){
      ok = false
      break;
    }
    if(temp[0] == "iyr" && !(temp[1].length === 4 && temp[1] >= 2010 && temp[1] <=2020)){
      ok = false
      break;
    }
    if(temp[0] == "eyr" && !(temp[1].length === 4 && temp[1] >= 2020 && temp[1] <=2030)){
      ok = false
      break;
    }
    if(temp[0] == "hgt" && !(temp[1].match(/(1(([5-8]{1}[0-9]{1})|(9[0-3]{1}))cm)|((59|([6]{1}[0-9]{1})|(7[0-6]{1}))in)$/))){
      ok = false
      break;
    }
    if(temp[0] == "hcl" && !(temp[1].match(/#[0-9a-f]{6}$/))){
      ok = false
      break;
    }
    if(temp[0] == "ecl" && !(temp[1].match(/^(amb|blu|brn|gry|grn|hzl|oth)$/))){
      ok = false
      break;
    }
    if(temp[0] == "pid" && !(temp[1].match(/^[0-9]{9}$/))){
      ok = false
      break;
    }
    if(k==6){ count++ }
    k++
  }
}


console.log(`final valid passport count: ${count}`)
