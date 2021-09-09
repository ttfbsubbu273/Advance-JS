'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getsUp(grid, queen_pos){
    const [qr, qc] = queen_pos;
    let counter = 0;
    while(qr >= 0 && grid[qr][qc] === 0){
        grid[qr][qc] = "X";
        counter++;
        qr--;
    }
    return counter;
}

function queensAttack(n, k, r_q, c_q, obstacles) {
    
    const grid = Array.from({length: n}, () => new Array(n).fill(0));

    for(const [r,c] of obstacles) grid[r-1][c-1] = 1;
    grid[r_q -1][c_q -1] = "Q";

    let counter = 0;
    const queen_pos = [r_q -1, c_q -1];

    console.log(grid);

    return counter;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const r_q = parseInt(secondMultipleInput[0], 10);

    const c_q = parseInt(secondMultipleInput[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().replace(/\s+$/g, '').split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    const result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + '\n');

    ws.end();
}
