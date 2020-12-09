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

const findCorrectPasswordsTake2 = function(line){
  let arr = line.split(':')
  console.log(arr)
  let rulesSplit = arr[0].split(' ')
  let position1 = parseInt(rulesSplit[0].split('-')[0])
  let position2 = parseInt(rulesSplit[0].split('-')[1])
  let letter = rulesSplit[1]

  let password = arr[1].trim()
  let passwordArr = password.split('')
  if((letter == passwordArr[position1-1] && letter == passwordArr[position2-1])){
    return 0
  }
  if((letter == passwordArr[position1-1] || letter == passwordArr[position2-1])){
    return 1
  }
  return 0
}


let inputs = input
  .split('\n')
  .map(item => findCorrectPasswords(item))
  .reduce((acc, curr) => acc + curr, 0)

console.log(`final result: ${inputs}`)

// console.log(findCorrectPasswordsTake2(inputs[0]))

let inputs2 = input
  .split('\n')
  .map(item => findCorrectPasswordsTake2(item))
  .reduce((acc, curr) => acc + curr, 0)

console.log(`final result take 2: ${inputs2}`)