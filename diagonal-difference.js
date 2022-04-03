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

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    //pD = arr[0][0] + arr[1][1] + arr[2][2];
    //sD = arr[0][2] + arr[1][1] + arr[2][0];
    //return Math.abs(pD-sD);
    const size = arr[0].length;
    let y = 0;
    let sD = 0;
    
    for (let i = 0 , o = (size - 1); i < size , o > -1 ; i++ , o--){
         y += arr[i][i];
         sD += arr[i][o];
    }
    return Math.abs(y-sD); 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

// changes from another pc
