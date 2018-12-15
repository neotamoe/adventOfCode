// Your puzzle input is 074501.

let recipes = [3,7]
let elf1Index = 0;
let elf2Index = 1;
let recipeTotal
let newElf1Index,newElf2Index
// console.log('elf1index:', elf1Index);
// console.log('elf2index:', elf2Index);
// console.log('recipes:' + recipes.toString());
// console.log('--------');

while(recipes.length<74511){
    recipeTotal = recipes[elf1Index] + recipes[elf2Index];
    // console.log('recipeTotal: ' + recipeTotal);
    if(recipeTotal>9){
        recipes.push(Math.floor(recipeTotal / 10 % 10));
        recipes.push(recipeTotal%10);
    } else {
        recipes.push(recipeTotal);
    }
    // console.log(recipes.toString());
    let temp1 = recipes[elf1Index] + 1; // 3+1 = 4
    let temp2 = recipes[elf2Index] + 1; // 7+1 =8
    // console.log('temp1: ' + temp1 + ' temp2: ' + temp2)
    if(elf1Index + temp1 == recipes.length){ // 0 + 4
        newElf1Index = 0;
    } else if(elf1Index + temp1 > recipes.length-1){ 
        newElf1Index = (elf1Index + temp1) % recipes.length;  
    } else {
        newElf1Index = temp1 + elf1Index;
    }
    if(elf2Index + temp2 == recipes.length){
        newElf2Index = 0;
    } else if(elf2Index + temp2 > recipes.length-1){ // index 1, rotate 8 = 9
        newElf2Index = (elf2Index + temp2) % recipes.length;  // 9 % 4 = 1
    } else {
        newElf2Index = temp2 + elf2Index;
    }
    elf1Index = newElf1Index;
    elf2Index = newElf2Index; 
    // console.log('elf1index:', elf1Index);
    // console.log('elf2index:', elf2Index);
    // console.log('recipes:' + recipes.toString());
    // console.log('--------');
}

console.log(recipes.toString())

let last10 = recipes.splice(recipes.length-10,10);

console.log(last10.join(''));

