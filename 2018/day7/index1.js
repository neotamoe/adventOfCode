let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');
let steps = input.split('\n');
// let testinput = fs.readFileSync('./testinput.txt','utf8');
// let steps = testinput.split('\n');


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
        temp = temp.split('').sort();
        map.set(currentFirst, temp);
        temp = "";
        k++;
    }
    else if (sortedByFirst[j][0]===currentFirst){
        temp = temp + sortedByFirst[j][1];
        j++;
    } 
}

map.set(currentFirst, temp.split('').sort());

console.log(map);

let finalString = "";
let keys = map.keys();
let last = "";

for (var key of map.keys()) {
    if(map.get(key).length==0){
        finalString += key;
        last = key;
        console.log(key + ' is empty');
        map.delete(key);
    } 
}
console.log(map);
console.log('found last letter: ' + last);

let tempOrder = "";
let minLength = 2;
while(minLength>1){
    for (key of map.keys()) {
        let currLength = map.get(key).length;
        if(currLength>minLength){
            minLength = currLength;
        }
        if (map.get(key)==last && map.get(key).length===1 ){
            tempOrder = tempOrder + key;
            map.delete(key);
        } 
    }    
    tempOrder = tempOrder.split('').sort().join('');
    finalString = tempOrder + finalString;
    last = finalString.charAt(0).toString();
    console.log(map);
    console.log('1st partial finalString:',finalString);
    console.log('last',last);
}


// while(finalString.length<6){
//     tempOrder = "";
//     for (var key of map.keys()) {
//         if (map.get(key).includes(last) ){
//             tempOrder = tempOrder + key;
//             map.delete(key);
//             continue;
//         } 
//     }
//     tempOrder = tempOrder.split('').sort().join('');
//     finalString = tempOrder + finalString;
//     last = finalString.charAt(0).toString();
//     console.log(map);
//     console.log('end partial finalString:',finalString);
//     console.log('last',last);
// }


console.log(map)
console.log(finalString);



