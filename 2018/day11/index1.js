let serialNumber = 8979;

function getCellPowerLevel (x, y){
    let rackId = x + 10;
    let powerLevel = rackId * y;
    powerLevel += serialNumber;
    powerLevel *= rackId;
    powerLevel = Math.floor((powerLevel/100)%10);
    powerLevel -= 5;
    return powerLevel;    
}

function get3x3GridTotal(x,y){
    return grid[y][x]
                + grid[y][x+1]
                + grid[y][x+2]
                + grid[y+1][x]
                + grid[y+1][x+1]
                + grid[y+1][x+2]
                + grid[y+2][x]
                + grid[y+2][x+1]
                + grid[y+2][x+2];
}

let grid = [
    []
];

let currentY = 0;  // +1 for actual

let y = 0;

while(currentY<300){
    for(let i=0; i<300; i++){   
        grid[currentY][i] = getCellPowerLevel(i+1, currentY + 1);
    }
    grid.push([]);
    currentY++;
}
console.log(grid);

let maxPowerCellX=0
let maxPowerCellY=0
let maxPowerGrid=-17;
let currentX = 0
for(let j=0; j<298; j++){  // j is y axis (rows going down)
    currentX = 0;
    while(currentX<298){
        let tempPowerGrid = get3x3GridTotal(currentX,j);
        console.log('tempPowerGrid: ',tempPowerGrid, ' currentX+1 ', currentX+1 + ' j/currentY: ' + j);
        if(tempPowerGrid>maxPowerGrid){
            maxPowerGrid = tempPowerGrid;
            maxPowerCellX = currentX + 1;
            maxPowerCellY = j + 1;
        }
        currentX++;    
    }
}
console.log(maxPowerCellX + ',' + maxPowerCellY);
