let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let steps = input.split('\n');

for(let i=0; i<steps.length; i++){
    steps[i] = steps[i].replace('Step ', '').replace(' must be finished before step ', '').replace(' can begin.', '').split('');
    // console.log(steps[i]);
}

let sortedByFirst = steps.sort(function(a, b) {
    return a[0].toLocaleLowerCase().localeCompare(b[0].toLocaleLowerCase());
});

let currentFirst = "";

let j=0;
let k=0;
let map = new Map();
let temp = "";

while(k<26 && j<sortedByFirst.length){
    currentFirst = String.fromCharCode(65 + k);
    if(sortedByFirst[j][0]!==currentFirst){
        temp = temp.split('').sort().join('');
        map.set(currentFirst, temp);
        temp = "";
        k++;
    }
    else if (sortedByFirst[j][0]===currentFirst){
        temp = temp + sortedByFirst[j][1];
        j++;
    } 
}

map.set(currentFirst, temp);

// console.log(map);

let finalString = "";
let keys = map.keys();
console.log(keys);
let m = 0;

// while(finalString.length<26){

    for (var key of map.keys()) {
        if(map.get(key)==""){
            finalString += key;
            // console.log(key + ' is empty');
        }
        // console.log(key);
        // console.log(map.get(String.fromCharCode(65 + m)))
        m++;
    }
// }

console.log(finalString);


