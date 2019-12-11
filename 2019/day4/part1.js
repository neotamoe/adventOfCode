const start = 147981
const end = 691423

let count = 0;

const checkValidity = (number) => {
  const numArray = (""+number).split("")
  let alwaysIncreases = true
  let hasDouble = false;
  for(let i=0; i<numArray.length-1; i++){
    if (numArray[i] > numArray[i+1]) {
      alwaysIncreases = false
      break;
    }
    if (numArray[i] == numArray[i+1]) {
      hasDouble = true;
    }
  }
  return alwaysIncreases && hasDouble
}

for(let i=start; i<end+1; i++){
  if(checkValidity(i)){
    count++;
  }
}

console.log(`final count: ${count}`)