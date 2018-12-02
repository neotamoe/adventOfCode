let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let steps = input.split('\n');

let total = 0;

let frequencies = [0];

let duplicateFrequency = false;

function goThrough(steps){
    steps.forEach(element => {
        if(element.substring(0,1)=='+'){
            total += parseInt(element.substring(1));
            // console.log('+ ' + element.substring(1) + ' = ' + total);
        } else {
            total -= parseInt(element.substring(1));
            // console.log('- ' + element.substring(1) + ' = ' + total);
        }
        if(frequencies.includes(total)){
            console.log('duplicate', total);
            duplicateFrequency = true;
            return total;
        }
        frequencies.push(total);
    });
}

while(!duplicateFrequency){
    goThrough(steps);
}

console.log('final total', total);

// this doesn't exit the loop when the first duplicate is found, but does (through the logs) give the correct answer