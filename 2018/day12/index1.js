let initialState = "#.##.#.##..#.#...##...#......##..#..###..##..#.#.....##..###...#.#..#...######...#####..##....#..###"
let initialStateArray = initialState.split('');

for(let k=0; k<initialStateArray.length; k++){
    initialStateArray[k] = initialStateArray[k] + '/' + k;  // #/1 or ./34
    // console.log(initialStateArray[k])
}

initialStateArray.unshift('./-1');
initialStateArray.unshift('./-2');
initialStateArray.unshift('./-3');
initialStateArray.unshift('./-4');
initialStateArray.unshift('./-5');

console.log(initialStateArray);

let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');
input = input.split(/[\n]/);

let map = new Map();

for(let i=0; i<input.length; i++){
    input[i] = input[i].split(' => ');
    map.set(input[i][0], input[i][1]);    
}

let generation = 1;

while(generation<21){
    for(let j=0; j<initialStateArray.length-4; j++){
        let temp = "";
        for(let m=j; temp.length<5; m++){
            console.log('m: ' +m)
            if(m==0){
                temp = "..";
            } else if (m==1){
                temp = "."
            }
            temp += initialStateArray[m].charAt(0);
        }
        if(map.has(temp)){
            initialStateArray[j+2][0] = map.get(temp);
        }
    }
    generation++;
}

let sum = 0;

for(let n=0; n<initialStateArray.length; n++){
    initialStateArray[n] = initialStateArray[n].split('\/');
    let pot = initialStateArray[n][1];
    if(initialStateArray[n][0]=='#'){
        sum += parseInt(pot);
        console.log('adding ' + pot + ' to the sum for total: ' + sum);    
    }
}

console.log("SUM: " + sum);