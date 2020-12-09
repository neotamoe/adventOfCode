let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');


const findCorrectPasswords = function(line){
  let arr = line.split(':')
  let rulesSplit = arr[0].split(' ')
  let rulesMin = rulesSplit[0].split('-')[0]
  let rulesMax = rulesSplit[0].split('-')[1]
  let letter = rulesSplit[1]

  let password = arr[1].trim()
  let passwordArr = password.split('')

  let count = 0

  for(let i=0; i<passwordArr.length; i++){
    if(letter == passwordArr[i]){
      count++
    }
  }

  return (count <= rulesMax && count >= rulesMin) ? 1 : 0
}


let inputs = input
  .split('\n')
  .map(item => findCorrectPasswords(item))
  .reduce((acc, curr) => acc + curr, 0)

console.log(`final result: ${inputs}`)