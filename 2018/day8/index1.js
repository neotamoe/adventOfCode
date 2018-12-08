let fs = require('fs');

// let input = fs.readFileSync('./input.txt','utf8');
let input = fs.readFileSync('./testinput.txt','utf8');
input = input.split(/[\s]+/);

for(let n=0; n<input.length; n++){
    input[n] = parseInt(input[n]);
}
console.log(input);
// 2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2
let sum = 0;

let parentNode = input[0];
let parentEntries = input[1];
console.log('parentNode', parentNode);
console.log('parentEntries', parentEntries);

while(parentNode>0){
    console.log('parentNode at start of loop:', parentNode);
    for(let i=2; i<input.length; i+=2+metadataEntries){
        childNodes = input[i];
        console.log('childNodes',childNodes);
        metadataEntries = input[i+1];
        console.log('metadataEntries:', metadataEntries);
        if(childNodes===0){
            while(metadataEntries>0){
                sum += parseInt(input[i+2]);
                // console.log('ADDING ', input[i+2] + ' for new SUM: ', sum);
                i++;
                metadataEntries--;
            }
        } else if (childNodes>0){
            i=i-1;
            continue;   
        }
        parentNode--;
        console.log('parentNode at end of loop:', parentNode);
        if(parentNode===0){
            while((i+2)<input.length){
                sum += parseInt(input[i+2]);
                // console.log('ADDING ', input[i+2] + ' for new SUM: ', sum);
                i++;
            }
        }
    }
}


console.log('final sum:', sum);

function addMetaDataEntryValues(startIdx, howMany, currentSum){
    for(let c=startIdx; c<howMany; c++){
        console.log('startIndexValue = ', input[c]);
        currentSum += input[c];
        console.log('adding: ', input[c] + ' to currentSum: ',currentSum );
        parentNode--;
    }
    return currentSum;
}