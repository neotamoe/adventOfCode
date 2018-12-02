let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let boxes = input.split('\n');

let two = 0;
let three = 0;


for(let i=0; i<boxes.length; i++){
    let alphaMap = new Map();
    alphaMap.set('a',0);
    alphaMap.set('b',0);
    alphaMap.set('c',0);
    alphaMap.set('d',0);
    alphaMap.set('e',0);
    alphaMap.set('f',0);
    alphaMap.set('g',0);
    alphaMap.set('h',0);
    alphaMap.set('i',0);
    alphaMap.set('j',0);
    alphaMap.set('k',0);
    alphaMap.set('l',0);
    alphaMap.set('m',0);
    alphaMap.set('n',0);
    alphaMap.set('o',0);
    alphaMap.set('p',0);
    alphaMap.set('q',0);
    alphaMap.set('r',0);
    alphaMap.set('s',0);
    alphaMap.set('t',0);
    alphaMap.set('u',0);
    alphaMap.set('v',0);
    alphaMap.set('w',0);
    alphaMap.set('x',0);
    alphaMap.set('y',0);
    alphaMap.set('z',0);

    for(let j=0; j<boxes[i].length;j++){
        let count = alphaMap.get(boxes[i].charAt(j));
        count = count + 1;
        alphaMap.set(boxes[i].charAt(j), count);
    }
    let twoFound = false;
    let threeFound = false;
    let itValues = alphaMap.values();
    console.log(itValues)
    let k=0
    while(k<26){
        let current = itValues.next().value;
        console.log('current: ', current);
        if(twoFound && threeFound){
            break;
        } else if(current==2){
            twoFound = true;
        } else if (current==3){
            threeFound = true;
        }
        k++;
    }
    if(twoFound){
        two++;
    }
    if(threeFound){
        three++;
    }
}

console.log('checksum------> two (' + two + ') * three (' + three + ') = ' + two*three);