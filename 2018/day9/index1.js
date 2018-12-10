// 446 players; last marble is worth 71522 points
// What is the winning Elf's score?

let highScore = 0;

// set up players
let players = [];
for(let p=1; p<447; p++){
    players.push(p);
};
// for(let p=1; p<10; p++){
//     players.push(p);
// };

// set up scores map
let scores = new Map();
players.forEach(element => {
    scores.set(element, 0);
});

let i=10;
let currentPlayer = 10;
let currentMarble
let circle = [0, 8, 4, 9, 2, 5, 1, 6, 3, 7];
let currentMarbleIndex
let scoreToAdd = i;
let marbleToRemoveIndex = currentMarbleIndex - 7;


while(i<71523){
// while(i<49){

    if((i-1)%23==0){
        // make the marble that is one-clockwise of removed the current
        currentMarble = circle[marbleToRemoveIndex];
    } else {
        currentMarble = i-1;
    }
    currentMarbleIndex = circle.indexOf(currentMarble);

    // insert new marble
    let isNextMarbleMultipleOf23 = i%23==0;
    if(isNextMarbleMultipleOf23){  
        // don't insert marble, get score
        scoreToAdd = i;
        // add 7th counter-clockwise marble to score and remove
        marbleToRemoveIndex = currentMarbleIndex - 7;
        if(marbleToRemoveIndex<0){
            marbleToRemoveIndex = circle.length - 1 - (Math.abs(marbleToRemoveIndex));
        }
        scoreToAdd += parseInt(circle[marbleToRemoveIndex]);
        // console.log('i: ', i + ' circle[marbleToRemoveIndex]: ', circle[marbleToRemoveIndex] + ' marbleToRemoveIndex: ', marbleToRemoveIndex)

        // remove marble at marbleToRemoveIndex
        circle.splice(marbleToRemoveIndex, 1);

        // console.log('currentPlayer: ', currentPlayer);
        let currentPlayerScore = scores.get(currentPlayer);
        currentPlayerScore += parseInt(scoreToAdd);
        // console.log('SCORE TO ADD: ', scoreToAdd);
        // put new score in map
        scores.set(currentPlayer, currentPlayerScore);

        // check high score every time score is updated
        if(currentPlayerScore > highScore){
            highScore = currentPlayerScore;
        }


        // console.log('currentPlayer '+ currentPlayer+ ' currentPlayerScore:', currentPlayerScore + 'new high score:', highScore);
    } else {
        let insertMarbleIndex = currentMarbleIndex + 2;
        if (insertMarbleIndex == circle.length ){
            circle.push(i);
        } else if (insertMarbleIndex > circle.length) {
            insertMarbleIndex = insertMarbleIndex - currentMarbleIndex -1 ;
            circle.splice(insertMarbleIndex, 0, i);
        } else {
            circle.splice(insertMarbleIndex, 0, i);
        }    
    }

    // advance to next player
    // 9 players
    // if((currentPlayer+1)>9){
    //     currentPlayer = 1;
    // } else {
    //     currentPlayer++
    // } 
    // 446 players
    if((currentPlayer+1)>446){
        currentPlayer = 1;
    } else {
        currentPlayer++;
    } 
    i++;
}


console.log('final high score = ', highScore)