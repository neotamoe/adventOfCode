let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');
// let input = fs.readFileSync('./testinput.txt','utf8');
input = input.split(/[\s]+/);

for(let n=0; n<input.length; n++){
    input[n] = parseInt(input[n]);
}
console.log(input);

let sum = 0;

let parentNode = input[0];
let parentEntries = input[1];
console.log('parentNode', parentNode);
console.log('parentEntries', parentEntries);
let i = 2;
let childNodesArray = [];
while(parentNode>0){
    console.log('parentNode at start of loop:', parentNode);

        childNodes = input[i];
        i++;
        console.log('childNodes',childNodes);

        metadataEntries = input[i];
        i++;
        console.log('metadataEntries:', metadataEntries);

        if(childNodes===0){
            while(metadataEntries>0){
                sum += parseInt(input[i]);
                // console.log('ADDING ', input[i] + ' for new SUM: ', sum);
                i++;
                metadataEntries--;
            }
        } else if (childNodes>0){
            childNodesArray.push(childNodes);
            continue;   
        } 
        parentNode--;
        if(childNodesArray.length>0){
            while(childNodesArray.length > 0){
                sum += parseInt(input[i]);
                // console.log('ADDING ', input[i] + ' for new SUM: ', sum);
                childNodesArray.shift();
                i++;
            }
        }
        console.log('parentNode at end of loop:', parentNode);
        if(parentNode===0){
            while((i)<input.length){
                sum += parseInt(input[i]);
                // console.log('ADDING ', input[i] + ' for new SUM: ', sum);
                i++;
            }
        }
}


console.log('final sum:', sum);