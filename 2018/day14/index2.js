// Your puzzle input is 074501.

let recipes = [3,7]
let elf1Index = 0;
let elf2Index = 1;
let recipeTotal, temp1, temp2, newElf1Index, newElf2Index
let input = '074501';
let inputFound = false;

while(!inputFound){
    recipeTotal = recipes[elf1Index] + recipes[elf2Index];
    if(recipeTotal>9){
        recipes.push(Math.floor(recipeTotal / 10 % 10));
        recipes.push(recipeTotal%10);
    } else {
        recipes.push(recipeTotal);
    }

    temp1 = recipes[elf1Index] + 1; 
    temp2 = recipes[elf2Index] + 1; 
    if(elf1Index + temp1 == recipes.length){ 
        elf1Index = 0;
    } else if(elf1Index + temp1 > recipes.length-1){ 
        elf1Index = (elf1Index + temp1) % recipes.length;  
    } else {
        elf1Index = temp1 + elf1Index;
    }
    if(elf2Index + temp2 == recipes.length){
        elf2Index = 0;
    } else if(elf2Index + temp2 > recipes.length-1){ 
        elf2Index = (elf2Index + temp2) % recipes.length;  
    } else {
        elf2Index = temp2 + elf2Index;
    }

    let last6 = recipes.slice(-7).join('');
    if(last6.includes(input)){
        console.log('recipes length ------> ' + ( recipes.length ))
        console.log(recipes.slice(-7));
        if(last6.startsWith(input)){
            console.log('final answer: ' + (recipes.length - 7))
        } else {
            console.log('final answer: ' + (recipes.length - 6))
        }
        inputFound = true;
        break;
    } 
}

