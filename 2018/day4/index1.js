let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let timestamps = input.split('\n');

let map = new Map();
let mapTotal = new Map();

timestamps.sort(function(a,b){
    return new Date(a.substring(1,17)) - new Date(b.substring(1,17));
});
let currentGuard

for(let t=0; t<timestamps.length; t++){
    timestamps[t] = timestamps[t].split('] ');
    let secondHalf = timestamps[t][1];
    if(secondHalf.startsWith('Guard #')){
        currentGuard = secondHalf.split(' ')[1].substring(1)
        continue;
    }
    if(secondHalf.startsWith('falls asleep')){
        let asleepMinute = timestamps[t][0].slice(-2);  // get time fell asleep
        let wakeMinute = timestamps[t+1].split('] ')[0].slice(-2);;  // get wake up time from next line
        let guardAsleepTimes = map.get(currentGuard);
        let guardTotalTimeAsleep = parseInt(wakeMinute) - parseInt(asleepMinute);
        if(guardAsleepTimes !== undefined){
            for(let i=asleepMinute; i<wakeMinute; i++){  // currentTime starts at 0 for shift
                guardAsleepTimes.push(i);
            }
            mapTotal.set(currentGuard, parseInt(mapTotal.get(currentGuard)) + parseInt(guardTotalTimeAsleep));
            map.set(currentGuard, guardAsleepTimes)
        } else{
            guardAsleepTimes = [];
            for(let j=asleepMinute; j<wakeMinute; j++){
                guardAsleepTimes.push(j);
            }
            map.set(currentGuard, guardAsleepTimes) 
            mapTotal.set(currentGuard, parseInt(guardTotalTimeAsleep));
        }
    }
    if(secondHalf.startsWith('wakes up')){
        continue;
    }
}


// map.forEach(function(value, key) {
//     console.log(key + ' = ' + value.sort());
// });

console.log('\n\nGuards Asleep Totals: ')
mapTotal.forEach(function(value, key){
    console.log(key + ' = ' + value);
})

// at this point i have to check the logs above to get the guard with the most asleep time
// then i use that guard number (283) to get the minute the guard was asleep the most often
let mostCount = map.get('283');
console.log(mostCount);
var modeMap = {};
var maxEl = mostCount[0], maxCount = 1;
for(var i = 0; i < mostCount.length; i++)
{
    var el = mostCount[i];
    if(modeMap[el] == null)
        modeMap[el] = 1;
    else
        modeMap[el]++;  
    if(modeMap[el] > maxCount)
    {
        maxEl = el;
        maxCount = modeMap[el];
    }
}
console.log('maxElement: ', maxEl);

// i do notice some of the values in the map didn't get parsed right and were left as strings instead of numbers, 
// but hedged my bets to guess that it wouldn't impact the final mode
