let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let inputs = input.split('\n').map(num => parseInt(num))



function findTwo() {
  for(let i=0; i<inputs.length; i++){
    for(let j=1; j<inputs.length; j++){
      if(inputs[i] + inputs[j] === 2020){
        console.log(`${inputs[i]} and ${inputs[j]}`)
        console.log(`product: ${inputs[i]*inputs[j]}`)
        return
      }
    }
  }  
}

findTwo()

function findThree() {
  for(let i=0; i<inputs.length; i++){
    for(let j=1; j<inputs.length; j++){
      for(let k=2; k<inputs.length; k++){
        if(inputs[i] + inputs[j] + inputs[k] === 2020){
          console.log(`${inputs[i]} and ${inputs[j]} and ${inputs[k]}`)
          console.log(`product: ${inputs[i]*inputs[j]*inputs[k]}`)
          return
        }
      }
    }
  }  
}

findThree()


