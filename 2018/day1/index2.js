let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let steps = input.split('\n');

let total = 0;

let frequencies = [0];

let duplicateFrequency = false;

let firstDuplicate = 0;

function goThrough(steps){
    steps.forEach(element => {
        if(element.substring(0,1)=='+'){
            total += parseInt(element.substring(1));
            // console.log('+ ' + element.substring(1) + ' = ' + total);
        } else {
            total -= parseInt(element.substring(1));
            // console.log('- ' + element.substring(1) + ' = ' + total);
        }
        if(frequencies.includes(total) && !duplicateFrequency){
            console.log('duplicate', total);
            duplicateFrequency = true;
            firstDuplicate = total;
        }
        frequencies.push(total);
    });
}

while(!duplicateFrequency){
    goThrough(steps);
}

console.log('final answer: ' + firstDuplicate);

// this doesn't exit the loop when the first duplicate is found due to using forEach, but does give the correct answer through the final log statement