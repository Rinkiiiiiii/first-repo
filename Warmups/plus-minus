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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var pNum = 0;
    var nNum = 0;
    var zNum = 0;
    var size = arr.length;
    for(var i = 0 ; i < size ; i++){
        if(arr[i]>0){
            pNum++;
        }else if(arr[i]<0){
            nNum++;
        }else{
            zNum++;
        }
    }
    var pNumFraction = pNum / size;
    var nNumFraction = nNum / size;
    var zNumFraction = zNum / size;
    console.log(pNumFraction.toFixed(6) +"\n"+ nNumFraction.toFixed(6) +"\n"+ zNumFraction.toFixed(6));
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
