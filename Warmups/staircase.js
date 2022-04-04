'use strict';

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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    var H = [];
    var uLimit = n+1;
    var lLimit = n-1;
    for(var i = 2 , o = lLimit; i < uLimit , o > 0; i++ , o--){
        H+="\n"+" ".repeat(o-1)+"#".repeat(i);
    }
    console.log(" ".repeat(lLimit)+"#"+H);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
