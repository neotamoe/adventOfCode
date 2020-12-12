let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let inputs = input
  .split('\n\n')
  .map(group => group.replace(/\n/g, "").split("").sort())
  .map(gp => findQuestionsByGroup(gp))
  .reduce((prev, curr) => prev + curr, 0)

function findQuestionsByGroup(arr){
  let temp = [...new Set(arr)]
  // console.log(`temp: ${temp.length}`)
  return temp.length
}

console.log(`inputs: ${inputs}`)
