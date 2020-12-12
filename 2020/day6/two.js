let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let inputs = input
  .split('\n\n')
  .map(group => group.split("\n"))
  .map(gp => findSameQuestionsByGroup(gp))
  .reduce((prev, curr) => prev + curr, 0)

function findSameQuestionsByGroup(arr){
  // console.log(`arr: ${arr}`)
  if(arr.length === 1){
    // console.log(`plus arr[0].length: ${arr[0].length}`)
    return arr[0].length
  }
  
  // https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string
  let result = [...arr.join("")].reduce((res, char) => { res[char] = res[char] ? res[char] + 1 : 1; return res }, {}); 

  // console.log(`result: ${JSON.stringify(result, null, 4)}`)
  let same = []
  for (const [key, value] of Object.entries(result)) {
    if(value === arr.length) { same.push(key) }
  }
  // console.log(`plus same.length: ${same.length}`)
  return same.length
}

console.log(`output: ${inputs}`)
