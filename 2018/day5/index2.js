let fs = require('fs');

let polymer = fs.readFileSync('./input.txt','utf8');
// let polymer = 'dabAcCaCBAcCcaDA';
console.log(polymer.length);

polymer = polymer.replace(/[Kk]+/g, '');

let i=0;

while(polymer.length>5000){

    if(i==polymer.length-1){
        i=0;
    }
    if(i<polymer.length-1){
        let shouldCompare = isUpperAndLower(polymer.charAt(i), polymer.charAt(i+1));
        let isSameLetter = areSameLetter(polymer.charAt(i), polymer.charAt(i+1));
        if(shouldCompare && isSameLetter){
            polymer = polymer.slice(0, i) + polymer.slice(i+2);
            console.log('now polymer length is: ', polymer.length)
            i--;
        } else {
            i++;
        }
    }
}

console.log('final:', polymer.length);

function isUpperAndLower(one, two){
    let isFirstUpper = one==one.toUpperCase();
    let isSecondUpper = two==two.toUpperCase();
    return isFirstUpper != isSecondUpper
}


function areSameLetter(one, two){
    return one.toUpperCase() == two.toUpperCase();
}

// again, not great as it required me manually running the program for each letter,
// but got me the right answer relatively quickly...at least for me.  :)