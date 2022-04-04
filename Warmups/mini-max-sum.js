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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum5 = 0;
    var min = 0;
    var max = 0;
    var size = arr.length;
    
    for(var i = 0 ; i < size ; i++){
        sum1 += arr[i];
        sum2 += arr[i];
        sum3 += arr[i];
        sum4 += arr[i];
        sum5 += arr[i];
    }
    
    sum1 = sum1 - arr[0];
    sum2 = sum2 - arr[1];
    sum3 = sum3 - arr[2];
    sum4 = sum4 - arr[3];
    sum5 = sum5 - arr[4];
    var sum = [sum1 , sum2 , sum3 , sum4 , sum5];
    var min = sum[0];
    var max = sum[0];
   
    for(var o = 0 ; o < 6 ; o++) {
        if (sum[o] > max ) {
            max = sum[o];
        } 
        if (sum[o] < min) {
            min = sum[o];
        }
    }

    console.log (min , max);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
