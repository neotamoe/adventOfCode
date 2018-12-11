export function getDataPoints(){
    let fs = require('fs');

    let input = fs.readFileSync('./input.txt','utf8');
    let points = input.split('\n');
    let dataPoints = []
    
    for(let i=0; i<points.length; i++){
        points[i] = points[i].replace('position=', '').replace('velocity=','').split('> ');
        points[i][0] = points[i][0].replace('<','');
        points[i][1] = points[i][1].replace('<','').replace('>','');    
        // console.log(points[i]);
        points[i][0] = points[i][0].split(', ');
        // console.log(points[i])
        dataPoints.push({x: parseInt(points[i][0][0].trim()), y: parseInt(points[i][0][1].trim())});
    }
    
    return dataPoints;
}