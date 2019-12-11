const start = 147981
const end = 691423

let count = 0;

const alwaysIncreasesFunction = (numArray) => {
  let alwaysIncreases = true;
  for(let i=0; i<numArray.length-1; i++){
    if (numArray[i] > numArray[i+1]) {
      alwaysIncreases = false
      break;
    }
  }
  return alwaysIncreases
}

const hasDoubleFunction = (numArray) => {
  let hasDouble = false;
  let temp = [0,0,0,0,0,0,0,0,0,0]
  for(let i=0; i<numArray.length; i++){
    let tempCount = temp[numArray[i]-1]
    tempCount++;
    temp[numArray[i]-1] = tempCount;
  }
  for(let j=0; j<temp.length; j++){
    if(temp[j]==2){
      hasDouble = true;
      break;
    }
  }
  return hasDouble
}

const checkValidity = (number) => {
  const numArray = (""+number).split("")
  let hasDouble = false;
  const alwaysIncreases = alwaysIncreasesFunction(numArray)
  if(alwaysIncreases){
    hasDouble = hasDoubleFunction(numArray);
    return hasDouble
  } 
  return alwaysIncreases
}

// test cases
// console.log(checkValidity(123444))
// console.log(checkValidity(111122))
// console.log(checkValidity(112233))
// console.log(checkValidity(155888))
// console.log(checkValidity(688900))

for(let k=start; k<end+1; k++){
  if(checkValidity(k)){
    console.log(`valid number --> ${k}`)
    count++;
  } 
}

console.log(`final count: ${count}`)
// 1006 too low
// 1607 too high
// correct answer: 1206