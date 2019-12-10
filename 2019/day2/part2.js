let fs = require('fs');

// let target = 19690720;
let aim = 0;
while(aim != 19690720){

  for(let x=1; x<100; x++){
    for(let y=1; y<100; y++){
      let input = fs.readFileSync('./input.txt','utf8');

      let array = input.split(',');
      // replace position 1 with the value x and replace position 2 with the value y
      console.log(`x: ${x}, y: ${y}`)
      array[1] = x;
      array[2] = y;

      for(let i=0; i<array.length; i+=4) {
        if (array[i]==1){
          // add value of position[i+1] + value of position[i+2], place value in position[i+3]
          const firstPosition = array[i+1]
          const firstValue = array[parseInt(firstPosition)]

          const secondPosition = array[i+2]
          const secondValue = array[parseInt(secondPosition)]

          const replacePosition = array[i+3]
          const replacePositionValue = parseInt(firstValue) + parseInt(secondValue);
          array[parseInt(replacePosition)] = replacePositionValue;


        } else if (array[i]==2) {
          // multiply value of position[i+1] + value of position[i+2], place value in position[i+3]

          const firstPosition = array[parseInt(i+1)]
          const firstValue = array[parseInt(firstPosition)]

          const secondPosition = array[parseInt(i+2)]
          const secondValue = array[parseInt(secondPosition)]

          const replacePosition = array[i+3]
          const replacePositionValue = parseInt(firstValue) * parseInt(secondValue);
          array[parseInt(replacePosition)] = replacePositionValue;

          // array[parseInt(array[i+3])] = parseInt(array[array[i+1]]) * parseInt(array[array[i+2]])
        } else if (array[i]==99) {
          console.log('final total', array[0]);
          if(array[0]==19690720){
            console.log(`we did it!  noun: ${x} and verb: ${y}`)
            console.log(100*x+y)
            aim = array[0];
            return;
          }
        }
      }
    }
  }
}

// noun: 76
// verb: 21
// answer: 7621