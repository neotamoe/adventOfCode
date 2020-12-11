function findSeat(seatStr){
  let seatArr = seatStr.split("")
  let start = 0
  let end = 127
  let row

  for(let i=0; i<8; i++){
    // console.log(`start: ${start} end: ${end}`)
    if(seatArr[i] === 'F'){
      // console.log(`F keeps: `)
      let newEnd = (end - start + 1)/2 - 1 + start;
      end = newEnd;
      if(i==7){ 
        row = start; 
        // console.log(`ROW: ${start}`) 
      }
    } else {  // B
      // console.log(`B keeps: `)
      let newStart = (end + 1 - start)/2 + start;
      start = newStart;
      if(i==7){ 
        row = end; 
        // console.log(`ROW: ${end}`) 
      }
    }
  }

  let left = 0;
  let right = 7;
  let column

  for(let j=7; j<seatArr.length; j++){
    // console.log(`left: ${left} right: ${right}`)
    if(seatArr[j] === 'L'){
      // console.log(`L keeps: `)
      let newRight = (right - left + 1)/2 - 1 + left;
      right = newRight;
      if(j==9){ 
        column = left; 
        // console.log(`COLUMN: ${start}`) 
      }
    } else {  // R
      // console.log(`R keeps: `)
      let newLeft = (right + 1 - left)/2 + left;
      left = newLeft;
      if(j==9){ 
        column = right; 
        // console.log(`COLUMN: ${end}`) 
      }
    }
  }

  console.log(`SEAT CODE: ${seatStr}; SEAT ID: ${row} * 8 + ${column} = ${(row*8) + column}`)
  return ((row*8) + column)
}

// findSeat('FBFBBFFRLR') //row 44, column 5, seat ID 357
// findSeat('BFFFBBFRRR') //row 70, column 7, seat ID 567.
// findSeat('FFFBBBFRRR') //row 14, column 7, seat ID 119.
// findSeat('BBFFBBFRLL') //row 102, column 4, seat ID 820.

let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let inputs = input.split('\n')
let highest = 0

let allIDs = []
inputs.map(seatCode => {
  const seatId = findSeat(seatCode)
  if(seatId > highest) { 
    highest = seatId
    // console.log(`new HIGHEST! => highest is now ${highest} by seatCode ${seatCode}`)
  }
  allIDs.push(seatId)
})

console.log(`highest: ${highest}`)

let sorted = allIDs.sort((a, b) => a - b)
sorted.map((id, idx) => {
  if(id+1 != sorted[idx+1]){
    console.log(`MY SEAT ID IS: ${id+1} between ${sorted[idx]} and ${sorted[idx+1]}`)
  }
})


// 991 too high 
// 989 - right

//548
