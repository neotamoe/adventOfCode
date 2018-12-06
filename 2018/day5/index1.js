let fs = require('fs');

let polymer = fs.readFileSync('./input.txt','utf8');
// let polymer = 'dabAcCaCBAcCcaDA';
console.log(polymer.length);

let i=0;

while(polymer.length>11600){

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
// console.log(polymer)

function isUpperAndLower(one, two){
    let isFirstUpper = one==one.toUpperCase();
    let isSecondUpper = two==two.toUpperCase();
    return isFirstUpper != isSecondUpper
}


function areSameLetter(one, two){
    return one.toUpperCase() == two.toUpperCase();
}

// final answer is obtained by watching logs--again, not most elegant solution, but made it work.
// once there are no more same letters to remove, the program will still be running due to the while
// loop but the last log will have the right number.