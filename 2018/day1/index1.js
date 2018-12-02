let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let steps = input.split('\n');

let total = 0;

steps.forEach(element => {
    if(element.substring(0,1)=='+'){
        total += parseInt(element.substring(1));
        console.log('+ ' + element.substring(1) + ' = ' + total);
    } else {
        total -= parseInt(element.substring(1));
        console.log('- ' + element.substring(1) + ' = ' + total);
    }
});

console.log('final total', total);