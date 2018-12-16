const fs = require('fs');

let codes = [];
let i = 0;
let temp = [];


let input = fs.readFileSync('./input.txt','utf8');
input = input.split(/[\n]/);

for(let i=0; i<input.length; i++){
    let tempLine = input[i];
    if(tempLine.includes('Before:')){
      temp = [];
      tempLine = tempLine.replace('Before: [','').replace(']','').split(', ');
      for(let i=0; i<tempLine.length; i++){
          tempLine[i] = parseInt(tempLine[i]);
      }
      temp.push(tempLine);
    } else if (!tempLine.includes('Before') && !tempLine.includes('After')){
      tempLine = tempLine.split(' ');
      for(let i=0; i<tempLine.length; i++){
          tempLine[i] = parseInt(tempLine[i]);
      }
      temp.push(tempLine);
    } else {
      tempLine = tempLine.replace('After:  [','').replace(']','').split(', ');
      for(let i=0; i<tempLine.length; i++){
          tempLine[i] = parseInt(tempLine[i]);
      }
      temp.push(tempLine);
      codes.push(temp);
    }
}
