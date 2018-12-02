let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let boxes = input.split('\n');
let oneOfPairs
let diffPos

for(let i=0; i<boxes.length; i++){
    for(let j=1; j<boxes.length; j++){
            let k = 0;
            let diff = 0;
            let diffPosition = 0;
        while(k<boxes[i].length){            
            if(boxes[i].charAt(k)==boxes[j].charAt(k) && (diff==1 || diff==0)){
                if(k==boxes[i].length - 1 && i!=j){
                    console.log('found pair with one diff: ' + boxes[i] + ' and ' + boxes[j]);
                    console.log('....and diffPosition = ' + diffPosition);
                    oneOfPairs = boxes[i];
                    diffPos = diffPosition
                    break;
                } else {
                    k++;
                }
            } else if(boxes[i].charAt(k)!=boxes[j].charAt(k) && diff==0){
                diffPosition = k;
                diff = 1;
                k++;
            } else {
                break;
            }
        }
    }
}

let array = oneOfPairs.split('');
let final = array.splice(diffPos,1)
console.log(array.join(''))